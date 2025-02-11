import stripe from 'stripe';
import { ManagementClient } from 'auth0';
import sgMail from '@sendgrid/mail';

const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripeClient.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const customerEmail = session.customer_details.email;
    const password = Math.random().toString(36).slice(-8);

    const auth0 = new ManagementClient({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
      clientSecret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
    });

    try {
      const auth0User = await auth0.createUser({
        connection: 'Username-Password-Authentication',
        email: customerEmail,
        password: password,
      });

      const msg = {
        to: customerEmail,
        from: 'your_email@example.com',
        subject: 'Your Account Details',
        text: `Your account has been created. Email: ${customerEmail}, Password: ${password}`,
      };

      await sgMail.send(msg);
      console.log('User created and email sent:', auth0User.email);
    } catch (err) {
      console.error('Error creating user or sending email:', err);
    }
  }

  res.json({ received: true });
}
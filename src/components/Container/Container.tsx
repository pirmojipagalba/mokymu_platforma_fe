import React from 'react';
import './container.scss';

interface ContainerProps {
  type?: string | undefined;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ type, children }) => {
  return <div className={`container ${type === 'wide' ? type : ''}`}>{children}</div>;
};

export default Container;

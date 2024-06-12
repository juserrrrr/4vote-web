// pages/index.tsx
import React from 'react';
import OrderButton from './OrderButton';

const Home: React.FC = () => {
  return (
    <div style={containerStyle}>
      <OrderButton />
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
};

export default Home;

import React from 'react';

interface DividerProps {
  width?: string;
}

const Divider: React.FC<DividerProps> = ({ width = '100%' }) => (
  <div className="my-3 mx-2">
    <hr
      className={`w-full border-t-2 border-corPrincipal`}
      style={{ width }}
    />
  </div>
);

export default Divider;

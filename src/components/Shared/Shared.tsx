import React, { FC } from 'react';
import './Shared.css';

interface SharedProps {}

const Shared: FC<SharedProps> = () => (
  <div className="Shared">
    Shared Component
  </div>
);
export function HeaderLabel({ title, backgroundColor }: { title: string; backgroundColor: string }) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(45deg, rgb(9, 82, 171), ${backgroundColor})`,
    color: '#FFFFFF'
  };

  return (
    <div className='header-wrapper' style={gradientStyle}>
      {title}
    </div>
  );
}


export default Shared;

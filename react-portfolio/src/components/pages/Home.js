import React from 'react';
import image from '../../media/image-of-me.jpg'

export default function Home() {
  return (
    <div>
      <h1>Michael Hoyle's Portfolio</h1>
      <img src={image} alt='Michael'></img>
    </div>
  );
}

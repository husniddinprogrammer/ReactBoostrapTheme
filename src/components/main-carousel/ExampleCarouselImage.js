import React from 'react';

function ExampleCarouselImage({ src, text }) {
  return (
    <div
      className="d-block w-100"
      style={{
        backgroundImage: `url('${src}?text=${text}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        filter: 'brightness(0.69)'
      }}
    />
  );
}

export default ExampleCarouselImage;

'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const ImageSlider = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [images]);
  
    return (
      <div className="">
        <Image
          src={images[currentIndex]}
          alt="Slider"
          width={840}
          height={320}
          className={`transition-opacity duration-500 ease-in-out rounded-xl`}
        />
      </div>
    );
  };  

export default ImageSlider;

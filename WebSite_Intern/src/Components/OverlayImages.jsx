// src/OverlayImages.js
import React from 'react';

const OverlayImages = () => {
  return (
    <div className="relative w-full h-96 ">
      
      <img 
        src="https://s3-alpha-sig.figma.com/img/f5ca/43c9/fdc78f1aa4fd306a8945447ed656f20e?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sex~ZK0t2GTlSHSrpZ4zaN~dJc-ibSOUcvmqij9pf71U8Na1T4H3Al3if~bz7SZxUZOp0wMHc7qVAMMLiHuwESki9JFT0GVh0U2DCgjqZqnJLyXWjVak29vQDdvndH3sfMScw9jbEiDiLBFEzHN6-B0xujLWFKA5hlE8yseq3Vd4~c1OytvKQZXC~ic1sSTmeziR6x9g-F5jSgN~nMPZ0-zrJJ5xkGtFISEq4hqVg6Lonraran3CkAipsWYg8sQCl2izJ4foarZmZSATNQvYYxznjJT2tzy8zqCa5pwACnZzypNw2hbZxkbTWKfHgvt8nCQvcsQ-J~4vi6rRFKxqbA__" 
        alt="Background" 
        className="w-full px-25 h-full object-cover ml-16 z-10"
      />
      <img 
        src="https://s3-alpha-sig.figma.com/img/5263/9ad1/8f28b2cc038ef68493515d6035af45da?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YqzJu1Sz~LiFGmd23IsZw8fbV8ZuEVWlC374BNmJykMrTiJngmefKajZu6XUZRNycz~3PkQTeRmKLs3q1z3OTExP219ubhjmaUOXxkyoz1C3MPhaDU679CqvkAasP6lWjYPx6VuZ95ffvmfMJWQ01BkRwxAhMbP3i2s9KcblPUBjRjzEUnJ1Qf2bujB9OEOSuo7pvsBxri2xUismYkiGZbz55gKaiq17m~xcvCRdyVre2mN9PHx~5pefS-lhuHyvNwbyPlClXdZh6SmTyDRHpLv5uWfNswrEIzOY8fOA617fLrruUdGcUxIu6s3oJYSSaXQiN~n91IlN-arfREw-gA__" 
        alt="Overlay" 
        className="absolute top-0  h-[50vh] z-0 "
      />
    </div>
  );
};

export default OverlayImages;

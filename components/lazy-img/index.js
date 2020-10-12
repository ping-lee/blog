import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx"; // a utility for constructing className conditionally

function LazyImage({ className, src, alt, lqip, aspectRatio = 2/3 }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef()
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);
  return (
    <div className="lazy-loading-img">
      <div className={clsx("wrapper", className)}>
        <div style={{ paddingBottom: `${100 / aspectRatio}%` }} />
        <img 
          src={lqip} 
          //src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUACYDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAQGBwEF/8QALhAAAgEDAgQEBAcAAAAAAAAAAQIDAAQRBRIGITFBBxMikTJRgbEVFkJhYnGh/8QAFgEBAQEAAAAAAAAAAAAAAAAABAMC/8QAHhEAAgICAgMAAAAAAAAAAAAAAAIBAxESITEyM1H/2gAMAwEAAhEDEQA/AKdpOiaOHUvYzs2wJkZwB860Dg/QbKxvIntLZkLyB2Dsctjn3qPZ6JqDoRHPatjphtpHuKi8TaxJwzabblliunOEO4MCRjv9aKuWbECZ1WMlz8QdJGu2MrpBDaX1uoeKbzAQe+04+/Y1n35cW5tUubGdkWT48+rDd/8Aar3F3G9xqkCx2mYIgm2RlyDI3T2PXlUHw/1S/E2oWspmWJlEkLHKq20AMA3TuOVVsqbTJiHSW1JGqcIzysQ1yylXOCUxkUr0bi6uJG3Sv8PpCh8/WlRiW+mtENe06OMBB5antzH7VmvjnaRbbaQAq8YAUj+XI/YUpSa/Ii/RXNI0Kxn8Fte1x4z+J2N5EkMwPRSUBGOn6z7D5VbdFUbEhb1RhgmG59uZ/ulKdVyjg7vZWdvNJtJcF4+eTzHKlKUAcf/Z"
          aria-hidden="true" />
        <img
          loading="lazy"
          src={src}
          //src="https://images.unsplash.com/photo-1518991791750-044b923256f0?fit=crop&w=1200&h=630"
          alt={alt}
          ref={imgRef}
          onLoad={() => setLoaded(true)}
          className={clsx("source", loaded && "loaded")}
        />
      </div>
    </div>
  );
}
export default LazyImage;
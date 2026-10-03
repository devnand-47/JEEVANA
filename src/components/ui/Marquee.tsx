import React from 'react';

interface MarqueeProps {
  items: React.ReactNode[];
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}

export default function Marquee({ items, reverse = false, className = "", itemClassName = "" }: MarqueeProps) {
  // We duplicate the array to ensure a seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className={`overflow-hidden flex hover-pause w-full ${className}`} aria-hidden="true">
      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        {duplicatedItems.map((item, index) => (
          <div key={index} className={`flex-shrink-0 flex items-center justify-center ${itemClassName}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

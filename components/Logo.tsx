import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showTagline = false, size = 'md' }) => {
  const sizeClasses = {
    sm: { icon: 'w-8 h-8', text: 'text-xl' },
    md: { icon: 'w-10 h-10', text: 'text-2xl' },
    lg: { icon: 'w-16 h-16', text: 'text-4xl' },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className="flex items-center gap-2">
        {/* Logo Icon */}
        <div className={`relative flex-shrink-0 ${currentSize.icon}`}>
           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
               {/* Bottom Orange Tip */}
               <path d="M50 98L20 50H80L50 98Z" fill="#F97316"/>
               
               {/* Top Blue Circle */}
               <circle cx="50" cy="45" r="38" fill="#0EA5E9"/>
               
               {/* White Icon: Chair & Desk Representation */}
               <g transform="translate(0, 5)">
                 {/* Chair L-shape */}
                 <path d="M35 30V55H50" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                 
                 {/* Desk T-shape */}
                 <path d="M65 35V55" stroke="white" strokeWidth="6" strokeLinecap="round"/>
                 <path d="M55 35H75" stroke="white" strokeWidth="6" strokeLinecap="round"/>
               </g>
           </svg>
        </div>
        
        {/* Text */}
        <div className="flex flex-col leading-none justify-center">
          <div className={`flex font-bold tracking-tight ${currentSize.text}`}>
             <span className="text-[#0EA5E9]">desk</span>
             <span className="text-[#F97316]">Ville</span>
          </div>
        </div>
      </div>
      
      {/* Tagline */}
      {showTagline && (
          <span className="text-[11px] text-gray-600 font-semibold tracking-wide mt-1.5 ml-1">
             Your Space, Your Productivity.
          </span>
      )}
    </div>
  );
};
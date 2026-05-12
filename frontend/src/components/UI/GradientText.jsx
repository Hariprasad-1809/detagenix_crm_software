import React from 'react';
import { cn } from '../../lib/utils';

export const GradientText = ({ children, className }) => {
  return (
    <span className={cn(
      "bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple bg-clip-text text-transparent animate-glow-pulse",
      className
    )}>
      {children}
    </span>
  );
};

export default GradientText;

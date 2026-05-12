import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const NeonButton = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  ...props 
}) => {
  const variants = {
    primary: 'bg-accent-cyan text-dark-900 hover:bg-white neon-glow-cyan',
    secondary: 'glass-effect text-white hover:bg-white/10',
    outline: 'border border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan/10',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default NeonButton;

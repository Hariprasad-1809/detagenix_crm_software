import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const GlassCard = ({ children, className, hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={cn(
        "glass-effect rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group",
        hover && "hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:border-accent-cyan/30",
        className
      )}
    >
      {/* Background glow effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-cyan/5 blur-[80px] rounded-full group-hover:bg-accent-cyan/10 transition-colors" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;

import React from 'react';
import { cn } from '../../lib/utils';

export const NeonInput = ({ label, error, className, ...props }) => {
  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-400 ml-1">
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full bg-dark-800/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white",
          "placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 focus:border-accent-cyan/50",
          "transition-all duration-300 neon-border-cyan",
          error && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/10",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-400 ml-1 mt-1">{error}</p>
      )}
    </div>
  );
};

export default NeonInput;

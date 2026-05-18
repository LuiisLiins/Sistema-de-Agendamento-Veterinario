export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-brand-primary text-white shadow-xl shadow-brand-primary/30 hover:translate-y-[-2px]',
    soft: 'bg-brand-soft text-brand-primary hover:bg-brand-primary/10',
    outline: 'border-2 border-gray-200 text-gray-400 hover:border-brand-primary hover:text-brand-primary'
  };

  return (
    <button 
      className={`px-4 py-2 rounded-xl font-bold text-sm transition-all active:scale-95 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
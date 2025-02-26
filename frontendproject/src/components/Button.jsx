const buttonVariants = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    ghost: "bg-transparent hover:bg-purple-50 text-gray-700",
    outline: "border-2 border-purple-600 text-purple-600 hover:bg-purple-50",
  }
  
  const buttonSizes = {
    default: "px-4 py-2",
    sm: "px-3 py-1.5 text-sm",
    lg: "px-6 py-3 text-lg",
    icon: "p-2",
  }
  
  const Button = ({ children, className = "", variant = "default", size = "default", asChild = false, ...props }) => {
    const Component = asChild ? (props.href ? "a" : "div") : "button"
  
    return (
      <Component
        className={`
          inline-flex items-center justify-center
          rounded-md font-medium
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
          disabled:opacity-50 disabled:pointer-events-none
          ${buttonVariants[variant]}
          ${buttonSizes[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </Component>
    )
  }
  
  export { Button, buttonVariants };
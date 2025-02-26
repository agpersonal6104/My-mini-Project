const ScrollArea = ({ className = "", children }) => {
    return (
      <div className={`relative overflow-auto ${className}`}>
        <div className="w-full h-full">{children}</div>
      </div>
    )
  }
  
  export { ScrollArea };
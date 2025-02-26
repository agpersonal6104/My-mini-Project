const Card = ({ children, className = "" }) => {
    return <div className={`bg-white rounded-lg shadow-sm ${className}`}>{children}</div>
  }
  
  const CardContent = ({ children, className = "" }) => {
    return <div className={`p-6 ${className}`}>{children}</div>
  }
  
  export { Card, CardContent };

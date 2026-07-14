function Button({
  children,
  type = "button",
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) {
  const base = `
    ${fullWidth ? "w-full" : "w-auto"}
    inline-flex
    items-center
    justify-center
    rounded-lg
    px-4
    py-2.5
    font-medium
    transition-all
    duration-200
    whitespace-nowrap
    shadow-sm
  `;

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200",
    danger:
      "bg-red-600 text-white hover:bg-red-700 hover:shadow-md",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
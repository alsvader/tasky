import { cn } from "@/utils/cn";

export function Button({
  children,
  className,
  ref,
  ...rest
}: React.ComponentProps<"button">) {
  return (
    <button
      ref={ref}
      className={cn(
        "flex items-center justify-center w-full h-12 px-6 bg-primary text-white rounded-lg text-base font-bold leading-normal hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-primary/50 ease-in-out",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

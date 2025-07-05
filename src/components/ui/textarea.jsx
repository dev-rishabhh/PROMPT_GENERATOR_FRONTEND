export const Textarea =(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className="flex my-2 px-3 py-2 min-h-[200px] resize-none  z-10 w-full rounded-md  border border-gray-300"
        ref={ref}
        {...props}
      />
    );
  }
);
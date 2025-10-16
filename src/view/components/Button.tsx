interface ButtonProps extends React.ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed cursor-pointer text-white px-6 h-12 rounded-2xl font-medium transition-all active:bg-teal-900"
    />
  );
}

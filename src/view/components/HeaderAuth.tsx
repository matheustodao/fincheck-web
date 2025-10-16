import { Link } from "react-router-dom";

interface HeaderAuthProps {
  title: string;
  description: string;
  linkLabel: string;
  linkTo: string;
}
export function HeaderAuth({
  description,
  linkLabel,
  linkTo,
  title,
}: HeaderAuthProps) {
  return (
    <header className="flex flex-col items-center gap-4">
      <h1 className="text-2xl text-center font-bold text-gray-900 tracking-[-1px]">
        {title}
      </h1>

      <p className="space-x-2 tracking-[-0.5px]">
        <span className="text-gray-700">{description}</span>
        <Link to={linkTo} className="text-teal-900 hover:underline font-medium">
          {linkLabel}
        </Link>
      </p>
    </header>
  );
}

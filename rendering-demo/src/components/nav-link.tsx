import Link from "next/link";

export default function NavLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children?: React.ReactNode;
}) {
  console.log("NavLink component");
  return (
    <Link href={href} className="text-blue">
      {label}
    </Link>
  );
}

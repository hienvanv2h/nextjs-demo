import NavLink from "./nav-link";
import NavSearch from "./nav-search";

export default function Navbar() {
  console.log("Navbar Component");
  return (
    <nav>
      <NavLink href="/dashboard" label="Dashboard" />
      <NavSearch />
    </nav>
  );
}

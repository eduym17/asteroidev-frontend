import { NavLink } from "react-router-dom";

type NavItemProps = {
  to: string;
  children: React.ReactNode;
  exact?: boolean;
};

export default function NavItem({
  to,
  children,
  exact = false,
}: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={exact}
      className={({ isActive }) =>
        `transition-colors ${
          isActive
            ? "text-asdev-white pb-1 border-b-2 border-asdev-aqua transition-all duration-500 px-2"
            : "text-asdev-gray-400 hover:text-asdev-white pb-1 border-b-2 border-transparent hover:border-asdev-violet transition-all duration-500 px-2"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
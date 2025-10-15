import Link from "next/link";

export default function NavLinks() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

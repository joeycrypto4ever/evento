import Link from "next/link";

const routes = [
  {
    id: 1,
    title: "Privacy Policy",
    path: "/privacy-policy",
  },

  {
    id: 2,
    title: "Terms & Conditions",
    path: "/terms-conditions",
  },
];
export default function footer() {
  return (
    <footer className="mt-auto flex  text-xs items-center justify-between border-t border-white/10 h-16 text-white/25 px-5 sm:px-9">
      <small className=" text-xs">© 2024</small>
      <nav>
        <ul className="flex gap-3">
          {routes.map((route) => (
            <li key={route.id}>
              <Link href={route.path}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

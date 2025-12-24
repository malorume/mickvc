import { CONFIG } from "@/config";
import Link from "next/link";

const data = {
  contact: [
    {
      href: `mailto:${CONFIG.EMAIL}`,
      label: CONFIG.EMAIL,
    },
  ],
};

export const Footer = () => (
  <footer className="w-full flex flex-col py-4 pt-10 box-sizing">
    <div className="sm:grid sm:grid-cols-3 gap-2 flex flex-col container">
      <div>&#169; mickvc - {new Date().getFullYear()}</div>
      <div></div>
      <ul className="flex flex-col gap-1">
        {data.contact.map((contact, key) => (
          <li
            key={key}
            className="text-base text-link hover:text-link-hover hover:underline"
          >
            <Link href={contact.href}>{contact.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

import Link from "next/link";
import { ReactNode } from "react";

type Props =
  | { href: string; children: ReactNode; variant?: "primary" | "ghost" }
  | { onClick: () => void; children: ReactNode; variant?: "primary" | "ghost" };

export function Button(props: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/30";

  const variant =
    props.variant === "ghost"
      ? "bg-transparent hover:bg-black/5 border border-black/10"
      : "bg-black text-white hover:bg-black/90";

  if ("href" in props) {
    return (
      <Link className={`${base} ${variant}`} href={props.href}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${variant}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

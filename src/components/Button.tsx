import Link from "next/link";
import { ReactNode } from "react";

type Props =
  | { href: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost" }
  | { onClick: () => void; children: ReactNode; variant?: "primary" | "secondary" | "ghost" };

function cls(variant: string) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/30";

  if (variant === "ghost") return `${base} border border-black/10 hover:bg-black/5`;
  if (variant === "secondary") return `${base} bg-black/5 hover:bg-black/10 text-black`;
  return `${base} bg-black text-white hover:bg-black/90 shadow-sm`;
}

export function Button(props: Props) {
  const variant = props.variant ?? "primary";
  if ("href" in props) {
    return (
      <Link className={cls(variant)} href={props.href}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={cls(variant)} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

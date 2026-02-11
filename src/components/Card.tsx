import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
      {children}
    </div>
  );
}

export function CardBody({ children }: { children: ReactNode }) {
  return <div className="p-6 sm:p-7">{children}</div>;
}

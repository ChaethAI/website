import * as React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // inner container (width + padding)
  outerClassName?: string; // outer full-width wrapper (e.g., background)
  id?: string; // optional anchor id on the outer wrapper
}

export function Container({ children, className = "", outerClassName = "", id }: ContainerProps) {
  return (
    <section id={id} className={outerClassName}>
      <div className={`mx-auto max-w-6xl p-4 sm:p-6 lg:p-10 ${className}`}>
        {children}
      </div>
    </section>
  );
}

import BreadcrumbLinks from "@/components/common/BreadcrumbLinks";
import React from "react";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <BreadcrumbLinks />
      {children}
    </div>
  );
}

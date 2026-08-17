import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type SiteLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
};

export default function SiteLink({ href, ...props }: SiteLinkProps) {
  const isInternalRoute = href.startsWith("/") && !href.startsWith("//");

  if (isInternalRoute) {
    return <Link href={href} {...props} />;
  }

  return <a href={href} {...props} />;
}

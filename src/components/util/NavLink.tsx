import { Link, type LinkProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { LinkTo } from "../../config/links";

type NavLinkProps = {
  children: React.ReactNode;
  link: LinkTo;
} & Omit<LinkProps, "component" | "to" | "href" | "children">;

export default function NavLink({
  children,
  link,
  ...linkProps
}: Readonly<NavLinkProps>) {
  const isRemote = link?.remote === true;

  return (
    <Link
      {...linkProps}
      component={isRemote ? "a" : RouterLink}
      {...(isRemote
        ? {
            href: link?.href,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {
            to: link?.href,
          })}
    >
      {children}
    </Link>
  );
}

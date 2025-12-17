import { Link, type LinkProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type SquareButtonProps = {
  children: React.ReactNode;
  to: string;
  remote?: boolean;
} & Omit<LinkProps, "component" | "to" | "children">;

export default function SquareButton({
  children,
  to,
  remote,
  ...linkProps
}: Readonly<SquareButtonProps>) {
  const target = "_blank";

  return (
    <Link
      {...linkProps}
      component={RouterLink}
      to={to}
      {...(remote && { target })}
      sx={{
        ...linkProps.sx,
      }}
    >
      {children}
    </Link>
  );
}

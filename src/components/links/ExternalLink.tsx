import { Link, type SxProps } from "@mui/material";

export function ExternalMuiLink({
  href,
  children,
  sx,
}: Readonly<{
  href: string;
  children: React.ReactNode;
  sx?: SxProps;
}>) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ wordBreak: "break-word", ...sx }}
    >
      {children}
    </Link>
  );
}

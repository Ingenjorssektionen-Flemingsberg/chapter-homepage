import { Box, Stack, Typography } from "@mui/material";
import type { Role } from "../../types/chapter";
import { rolesConfig } from "../../config/rolesConfig";
import NavLink from "../util/NavLink";

type RoleItemProps = {
  role?: Role;
  find?: string;
  showContact?: boolean;
  titleVariant?: "subtitle1" | "subtitle2" | "body1";
  memberVariant?: "body1" | "body2" | "caption";
};

export default function RoleItem({
  role,
  find,
  showContact = false,
  titleVariant = "subtitle1",
  memberVariant = "body1",
}: Readonly<RoleItemProps>) {
  const foundRole: Role | undefined =
    role ??
    (find
      ? rolesConfig.chapter
          .flatMap((group) => group.roles ?? [])
          .find((r) => r?.name === find)
      : undefined);

  const members = foundRole?.members ?? [];
  const hasTitle = Boolean(foundRole?.name);

  return (
    <Box>
      {hasTitle && (
        <Typography variant={titleVariant} sx={{ fontWeight: 700 }}>
          {foundRole!.name}
        </Typography>
      )}

      {members.length > 0 ? (
        <Typography
          variant={memberVariant}
          sx={{
            opacity: 0.85,
            whiteSpace: "pre-line",
            mt: hasTitle ? 0 : 0.25,
          }}
        >
          {members.join("\n")}
        </Typography>
      ) : (
        <Typography variant="body2" sx={{ opacity: 0.6 }}>
          —
        </Typography>
      )}

      {showContact && foundRole?.contact && (
        <Stack spacing={0}>
          <NavLink to={`mailto:${foundRole?.contact}`}>
            {foundRole?.contact}
          </NavLink>
        </Stack>
      )}
    </Box>
  );
}

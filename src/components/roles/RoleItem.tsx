import { Box, Stack, Typography } from "@mui/material";
import type { RoleWithMembers } from "../../types/groups";
import NavLink from "../links/NavLink";

type RoleItemProps = {
  role: RoleWithMembers;
  find?: string;
  showContact?: boolean;
  titleVariant?: "subtitle1" | "subtitle2" | "body1";
  memberVariant?: "body1" | "body2" | "caption";
};

export default function RoleItem({
  role,
  showContact = false,
  titleVariant = "subtitle1",
  memberVariant = "body1",
}: Readonly<RoleItemProps>) {
  const members = role.members ?? [];
  const hasTitle = Boolean(role.name);

  return (
    <Box>
      {hasTitle && (
        <Typography variant={titleVariant} sx={{ fontWeight: 700 }}>
          {role.name}
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
          {members.map((m) => m.full_name).join("\n")}
        </Typography>
      ) : (
        <Typography variant="body2" sx={{ opacity: 0.6 }}>
          —
        </Typography>
      )}

      {showContact && role?.contact && (
        <Stack spacing={0}>
          <NavLink link={{ href: `mailto:${role.contact}` }}>
            {role.contact}
          </NavLink>
        </Stack>
      )}
    </Box>
  );
}

import { Stack, Typography } from "@mui/material";
import type { GroupWithRoles } from "../../types/groups";
import RoleItem from "./RoleItem";
import NavLink from "../links/NavLink";

type GroupRolesProps = {
  group: GroupWithRoles;
  find?: string;
  showGroupName?: boolean;
  showContact?: boolean;
};

export default function GroupRoles({
  group,
  showGroupName = true,
  showContact = false,
}: Readonly<GroupRolesProps>) {
  const roles = (group.roles ?? []).filter(Boolean);
  const hasRoles = roles.length > 0;
  const hasTitle = Boolean(group.name);

  return (
    <Stack spacing={2}>
      {showGroupName && hasTitle && (
        <Typography
          variant="h6"
          sx={{ fontWeight: 800 }}
          textTransform="uppercase"
          letterSpacing="0.05em"
        >
          {group.name}
        </Typography>
      )}

      {hasRoles ? (
        <Stack spacing={2}>
          {roles.map((role, idx) => (
            <RoleItem
              key={`${group.name ?? "group"}-role-${role.name ?? idx}`}
              role={role}
              showContact={showContact}
            />
          ))}
        </Stack>
      ) : (
        <Typography variant="body2" sx={{ opacity: 0.6 }}>
          —
        </Typography>
      )}
      {showContact && group.contact && (
        <Stack spacing={0}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Kontakt
          </Typography>
          <NavLink link={{ href: `mailto:${group.contact}` }}>
            {group.contact}
          </NavLink>
        </Stack>
      )}
    </Stack>
  );
}

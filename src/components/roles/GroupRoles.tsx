import { Stack, Typography } from "@mui/material";
import type { Group } from "../../types/chapter";
import { rolesConfig } from "../../config/rolesConfig";
import RoleItem from "./RoleItem";
import NavLink from "../util/NavLink";

type GroupRolesProps = {
  group?: Group;
  find?: string;
  showGroupName?: boolean;
  showContact?: boolean;
};

export default function GroupRoles({
  group,
  find,
  showGroupName = true,
  showContact = false,
}: Readonly<GroupRolesProps>) {
  const foundGroup: Group | undefined =
    group ??
    (find ? rolesConfig.chapter.find((g) => g?.name === find) : undefined);

  const roles = (foundGroup?.roles ?? []).filter(Boolean);
  const hasRoles = roles.length > 0;
  const hasTitle = Boolean(foundGroup?.name);

  return (
    <Stack spacing={2}>
      {showGroupName && hasTitle && (
        <Typography
          variant="h6"
          sx={{ fontWeight: 800 }}
          textTransform="uppercase"
          letterSpacing="0.05em"
        >
          {foundGroup!.name}
        </Typography>
      )}

      {hasRoles ? (
        <Stack spacing={2}>
          {roles.map((role, idx) => (
            <RoleItem
              key={`${foundGroup?.name ?? "group"}-role-${role.name ?? idx}`}
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
      {showContact && foundGroup?.contact && (
        <Stack spacing={0}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Kontakt
          </Typography>
          <NavLink link={{ href: `mailto:${foundGroup?.contact}` }}>
            {foundGroup?.contact}
          </NavLink>
        </Stack>
      )}
    </Stack>
  );
}

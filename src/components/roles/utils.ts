import type { GroupWithRoles, RoleWithMembers } from "../../types/groups";

type GroupIndex = Map<string, GroupWithRoles>;
type RoleIndex = Map<string, RoleWithMembers>;

export function buildIndexes(groups: GroupWithRoles[]) {
  const groupIndex: GroupIndex = new Map();
  const roleIndex: RoleIndex = new Map();

  for (const group of groups) {
    groupIndex.set(group.name.toLowerCase(), group);

    for (const role of group.roles) {
      roleIndex.set(
        group.name.toLowerCase() + "-" + role.name.toLowerCase(),
        role,
      );
    }
  }

  return { groupIndex, roleIndex };
}

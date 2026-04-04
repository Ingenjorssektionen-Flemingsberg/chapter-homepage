export type Person = {
  id: string;
  full_name: string;
};

export type RoleWithMembers = {
  id: string;
  name: string;
  contact: string | null;
  role_priority: number;
  members: Person[];
  display_contact: boolean;
};

export type GroupWithRoles = {
  id: string;
  name: string;
  contact: string | null;
  group_priority: number;
  roles: RoleWithMembers[];
};

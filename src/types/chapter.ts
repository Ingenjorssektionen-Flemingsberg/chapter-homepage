export interface Role {
  name?: string;
  contact?: string;
  members?: string[];
}

export interface Group {
  name: string;
  contact?: string;
  primaryRoles?: string[];
  roles: Role[];
}

export interface ChapterConfig {
  chapter: Group[];
}

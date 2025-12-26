import YAML from "yaml";
import rolesYaml from "../config/roles.yaml?raw";
import { z } from "zod";

const parsed = YAML.parse(rolesYaml);

const Role = z.object({
  name: z.string().optional(),
  contact: z.string().optional(),
  members: z.array(z.string()).default([]),
});

const Group = z.object({
  name: z.string(),
  contact: z.string().optional(),
  primaryRoles: z.array(z.string()).optional(),
  roles: z.array(Role).default([]),
});

const ChapterSchema = z.object({
  chapter: z.array(Group),
});

export const rolesConfig = ChapterSchema.parse(parsed);

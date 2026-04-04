import type { GroupWithRoles } from "../types/groups";
import { apiClient } from "./apiClient";

/**
 * Public: list groups
 * GET /groups
 */
export const getGroups = async (): Promise<GroupWithRoles[]> => {
  const response = await apiClient.get<GroupWithRoles[]>("/groups");
  return response.data;
};

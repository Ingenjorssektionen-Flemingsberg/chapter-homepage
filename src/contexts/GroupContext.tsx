import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { GroupWithRoles, RoleWithMembers } from "../types/groups";
import { useNotification } from "./NotificationContext";
import { getGroups } from "../services/groups";
import { buildIndexes } from "../components/roles/utils";

interface GroupContextType {
  gIndex: Map<string, GroupWithRoles>;
  rIndex: Map<string, RoleWithMembers>;
  groups: GroupWithRoles[];
  getGroups: () => Promise<void>;
}

const GroupContext = createContext<GroupContextType | undefined>(undefined);

export const useGroups = (): GroupContextType => {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error("useGroups must be used within a GroupProvider");
  }
  return context;
};

export const GroupProvider = ({ children }: { children: React.ReactNode }) => {
  const [groups, setGroups] = useState<GroupWithRoles[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { showNotification } = useNotification();
  const { groupIndex, roleIndex } = useMemo(
    () => buildIndexes(groups),
    [groups],
  );

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = useCallback(async () => {
    if (loading) return;

    try {
      setLoading(true);
      const resp = await getGroups();
      setGroups(resp);
    } catch (err) {
      console.error("fetchGroups: " + err);
      showNotification("Failed to fetch members", "error");
    } finally {
      setLoading(false);
    }
  }, [loading, showNotification]);

  const value = useMemo<GroupContextType>(
    () => ({
      groups: groups,
      getGroups: fetchGroups,
      gIndex: groupIndex,
      rIndex: roleIndex,
    }),
    [groups, fetchGroups, groupIndex, roleIndex],
  );

  return (
    <GroupContext.Provider value={value}>{children}</GroupContext.Provider>
  );
};

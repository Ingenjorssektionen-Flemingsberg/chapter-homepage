import { apiClient } from "./apiClient";

export const getCalendarEvents = async (from: string, to: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await apiClient.get<any>(`/calendar?from=${from}&to=${to}`);

  return response?.data;
};

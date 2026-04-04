import type { MailRequest } from "../types/form";
import { apiClient } from "./apiClient";

/**
 * send mail from form
 */
export const sendMail = async (body: MailRequest): Promise<void> => {
  await apiClient.post<MailRequest>(`/mail`, body);
};

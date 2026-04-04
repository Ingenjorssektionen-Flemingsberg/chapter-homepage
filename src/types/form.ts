export type FormKind = "jml" | "fg" | "sno" | "sso";

export type MailRequest = {
  kind: FormKind;
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message: string;
};

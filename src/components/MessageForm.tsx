import { Box, Stack, TextField, Typography } from "@mui/material";
import SquareButton from "./buttons/SquareButton";
import { sendMail } from "../services/mails";
import type { FormKind, MailRequest } from "../types/form";

type MessageFormProps = {
  title: string;
  text?: string;
  kind: FormKind;
};

function getString(fd: FormData, key: string): string {
  const value = fd.get(key);
  return typeof value === "string" ? value : "";
}

export default function MessageForm({
  title,
  text,
  kind,
}: Readonly<MessageFormProps>) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload: MailRequest = {
      kind,
      subject: getString(formData, "subject"),
      name: getString(formData, "name"),
      email: getString(formData, "email"),
      phone: getString(formData, "phone"),
      message: getString(formData, "message"),
    };

    await sendMail(payload);
    form.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Typography variant="h6" fontWeight={700}>
          {title}
        </Typography>

        {text !== "" && <Typography variant="body1">{text}</Typography>}

        <TextField
          name="name"
          label="Namn"
          fullWidth
          helperText="Koppla ett namn med ärendet, om du vill."
        />

        <Box display="flex" flexDirection="row" gap={2}>
          <TextField
            name="email"
            label="Epostadress"
            type="email"
            fullWidth
            helperText="(krävs)"
          />

          <TextField
            name="phone"
            label="Telefonnummer"
            fullWidth
            helperText="(Frivilligt)"
          />
        </Box>

        <TextField
          name="subject"
          label="Ämne"
          fullWidth
          required
          helperText="(krävs)"
        />

        <TextField
          name="message"
          label="Meddelande"
          multiline
          minRows={4}
          fullWidth
          required
          helperText="(krävs)"
        />

        <SquareButton fullWidth type="submit">
          Skicka
        </SquareButton>
      </Stack>
    </Box>
  );
}

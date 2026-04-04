import { Box, Stack, TextField, Typography } from "@mui/material";
import SquareButton from "./buttons/SquareButton";
import type { FormKind, MailRequest } from "../types/form";
import { sendMail } from "../services/mails";

type ComplaintFormProps = {
  title: string;
  kind: FormKind;
};

function getString(fd: FormData, key: string): string {
  const value = fd.get(key);
  return typeof value === "string" ? value : "";
}

export default function ComplaintForm({
  title,
  kind,
}: Readonly<ComplaintFormProps>) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload: MailRequest = {
      kind,
      name: getString(formData, "name"),
      email: getString(formData, "email"),
      phone: getString(formData, "phone"),
      message: getString(formData, "complaint"),
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

        <TextField
          name="name"
          label="Namn"
          fullWidth
          helperText="Koppla ett namn med ärendet, om du vill. Frivilligt."
        />

        <Box display="flex" flexDirection="row" gap={2}>
          <TextField
            name="email"
            label="Epostadress"
            type="email"
            fullWidth
            helperText="E-postadress för återkoppling. Frivilligt."
          />

          <TextField
            name="phone"
            label="Telefonnummer"
            fullWidth
            helperText="Telefonnummer för återkoppling. Frivilligt."
          />
        </Box>

        <TextField
          name="complaint"
          label="Klagomål"
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

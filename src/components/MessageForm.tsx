import { Box, Stack, TextField, Typography } from "@mui/material";
import SquareButton from "./buttons/SquareButton";

type MessageFormProps = {
  title: string;
  text?: string;
  email: string;
};

export default function MessageForm({
  title,
  text,
  email,
}: Readonly<MessageFormProps>) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("subject"),
      complaint: formData.get("message"),
    };

    // TODO: Intentionally left unused, to be sent via backend mail service ?
    void payload;
    void email;
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

        <TextField
          name="email"
          label="Epostadress"
          type="email"
          fullWidth
          required
          helperText="(krävs)"
        />

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

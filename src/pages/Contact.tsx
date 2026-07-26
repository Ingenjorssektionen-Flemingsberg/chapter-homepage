import {
  Container,
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  Divider,
  Link,
  Chip,
} from "@mui/material";
import banner from "../assets/banner.webp";
import HeroBanner from "../components/HeroBanner";
import NavLink from "../components/links/NavLink";
import { LINKS } from "../config/links";
import type { GroupWithRoles, RoleWithMembers } from "../types/groups";
import { useGroups } from "../contexts/GroupContext";

const mailto = (email: string) => `mailto:${email}`;

function findContacts(groups: GroupWithRoles[]): RoleWithMembers[] {
  const contacts: RoleWithMembers[] = [];

  for (const g of groups) {
    for (const r of g.roles) {
      if (r.display_contact) {
        contacts.push(r);
      }
    }
  }

  return contacts;
}

function RoleContactCard({
  roleName,
  members,
  contact,
}: Readonly<{
  roleName: string;
  members: string[];
  contact: string | null;
}>) {
  const membersText = members.length
    ? members.join(", ")
    : "Inga medlemmar angivna.";

  return (
    <Card variant="outlined" sx={{ borderRadius: 3 }}>
      <CardContent sx={{ p: { xs: 2, md: 2.5 } }}>
        <Stack spacing={0}>
          <Typography
            variant="h6"
            mb={1}
            sx={{ fontWeight: 700, lineHeight: 1.2 }}
          >
            {roleName}
          </Typography>

          <Typography variant="body1">{membersText}</Typography>

          {contact ? (
            <Typography variant="body1">
              <Link href={mailto(contact)} underline="hover">
                {contact}
              </Link>
            </Typography>
          ) : (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Ingen kontakt angiven.
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}

function InfoCard({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <Card variant="outlined" sx={{ borderRadius: 3 }}>
      <CardContent sx={{ p: { xs: 2, md: 2.5 } }}>
        <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

export default function Kontakt() {
  const { groups } = useGroups();
  const roleCards = findContacts(groups);

  return (
    <Container
      disableGutters
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HeroBanner
        image={banner}
        subtitle="Hör av dig"
        title="Kontakt"
        height={{ xs: "40vh", md: "60vh" }}
        position={{ xs: "center", md: "center 250%" }}
      />

      <Box
        sx={{
          width: { xs: "92%", md: "60%" },
          maxWidth: 1200,
          py: { xs: 3, md: 5 },
        }}
      >
        <Stack spacing={3}>
          {/* Top intro */}
          <Card
            variant="outlined"
            sx={{
              borderRadius: 3,
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 2.5 } }}>
              <Stack spacing={1}>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>
                  Allmänna frågor
                </Typography>

                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Vid frågor kontakta gärna styrelsen på{" "}
                  <NavLink link={LINKS.mail.styrelsen}>
                    styrelsen@isflemingsberg.se
                  </NavLink>{" "}
                  eller välj en passande kontaktperson nedan.
                </Typography>
              </Stack>
            </CardContent>
          </Card>

          {/* Main grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.35fr 0.65fr" },
              gap: { xs: 2.5, md: 4 },
              alignItems: "start",
            }}
          >
            <Box>
              <Stack spacing={1.5} sx={{ mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 900 }}>
                  Kontaktpersoner
                </Typography>
              </Stack>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "repeat(2, minmax(0, 1fr))",
                  },
                  gap: 2,
                }}
              >
                {roleCards.length ? (
                  roleCards.map((r) => (
                    <RoleContactCard
                      key={r.id}
                      roleName={r.name}
                      members={r.members.map((p) => p.full_name)}
                      contact={r.contact}
                    />
                  ))
                ) : (
                  <Card
                    variant="outlined"
                    sx={{ borderRadius: 3, gridColumn: "1 / -1" }}
                  >
                    <CardContent sx={{ p: { xs: 2, md: 2.5 } }}>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Inga kontaktpersoner är konfigurerade ännu.
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </Box>
            </Box>

            {/* Right: info */}
            <Stack spacing={2}>
              <InfoCard title="Hitta hit">
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  Ingenjörssektionen Flemingsberg
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mt: 0.5 }}
                >
                  Hälsovägen 11C
                  <br />
                  141 57 Huddinge
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography
                  variant="subtitle1"
                  sx={{ color: "text.secondary" }}
                >
                  Organisationsnummer
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 800 }}>
                  802500-5110
                </Typography>
              </InfoCard>

              <InfoCard title="Klagomål & feedback">
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Om du vill lämna klagomål eller feedback kan du kontakta:
                </Typography>

                <Stack spacing={1} sx={{ mt: 1.5 }}>
                  <NavLink link={LINKS.internal.jml}>JML</NavLink>
                  <NavLink link={LINKS.internal.studienamnden}>
                    Studienämnden
                  </NavLink>
                </Stack>
              </InfoCard>

              <InfoCard title="Socialt">
                <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                  <Chip
                    size="small"
                    label="Facebook"
                    component="a"
                    clickable
                    href={LINKS.social.facebook.href}
                    target="_blank"
                  />
                  <Chip
                    size="small"
                    label="Instagram"
                    component="a"
                    clickable
                    href={LINKS.social.instagram.href}
                    target="_blank"
                  />
                  <Chip
                    size="small"
                    label="LinkedIn"
                    component="a"
                    clickable
                    href={LINKS.social.linkedin.href}
                    target="_blank"
                  />
                  <Chip
                    size="small"
                    label="Discord"
                    component="a"
                    clickable
                    href={LINKS.social.discord.href}
                    target="_blank"
                  />
                  <Chip
                    size="small"
                    label="TikTok"
                    component="a"
                    clickable
                    href={LINKS.social.tiktok.href}
                    target="_blank"
                  />
                </Stack>
              </InfoCard>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

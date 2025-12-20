export interface NavSubLink {
  label: string;
  path: string;
}

export interface NavItem {
  label: string;
  path: string; // default link when button is clicked
  subLinks?: NavSubLink[];

  remote?: boolean;
  superButton?: boolean;
}

export const navItems: NavItem[] = [
  {
    label: "Hem",
    path: "/",
  },
  {
    label: "Nyheter",
    path: "/nyheter",
  },
  {
    label: "Event",
    path: "/event",
  },
  {
    label: "Sektionen",
    path: "/sektionen",
    subLinks: [
      { label: "Sektionen", path: "/sektionen" },
      { label: "Sektionslokalen Rudan", path: "/rudan" },
      { label: "Sektionsmöten", path: "/sektionsmoten" },
      { label: "Styrelsemöten", path: "/styrelsemoten" },
      { label: "Styrdokument", path: "/styrdokument" },
      { label: "Skåp", path: "/skap" },
      { label: "Ovve", path: "/ovve" },
      { label: "Sångbok", path: "/sangbok" },
    ],
  },
  {
    label: "Organ och Nämnder",
    path: "/qm",
    subLinks: [
      // Organ
      { label: "Qlubbmästeriet", path: "/qm" },
      { label: "Mottagningsgruppen", path: "/mottagningsgruppen" },
      { label: "Företagsgruppen", path: "/foretagsgruppen" },

      // Nämnder
      { label: "Studienämnden", path: "/studienamnden" },
      { label: "JML-nämnden", path: "/jml-namnden" },
      { label: "Valberedningen", path: "/valberedningen" },
      { label: "Lokalnämnden", path: "/lokalnamnden" },
      { label: "Utbytesnämnden", path: "/utbytesnamnden" },
      { label: "Idrottsgruppen", path: "/idrottsgruppen" },
      { label: "Spelgruppen", path: "/spelgruppen" },
      { label: "Infogruppen", path: "/infogruppen" },
      { label: "Slurpen", path: "/slurpen" },
    ],
  },
  {
    label: "Nyantagen",
    path: "/mottagningen",
    subLinks: [
      { label: "Mottagningen", path: "/mottagningen" },
      {
        label: "Info om du blivit antagen",
        path: "/info-antagen",
      },
      { label: "Hitta hit", path: "/hitta-hit" },
      { label: "Info om KTH Flemingsberg", path: "/info-om-kth-flemingsberg" },
      { label: "Vad gör sektionen", path: "/vad-gor-sektionen" },
      {
        label: "Så blir du en del av sektionen",
        path: "/bli-del-av-sektionen",
      },
    ],
  },
  {
    label: "Discord",
    path: "https://discord.gg/qTj7QBJcU4",
    remote: true,
  },
  {
    label: "Kontakt",
    path: "/kontakt",
    superButton: true,
  },
];

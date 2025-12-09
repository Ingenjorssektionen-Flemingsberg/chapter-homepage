export interface NavSubLink {
  label: string;
  path: string;
}

export interface NavItem {
  label: string;
  path: string; // default link when button is clicked
  subLinks?: NavSubLink[];
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
    path: "/organ-och-nämnder",
    subLinks: [
      { label: "Qlubbmästeriet", path: "/qm" },
      { label: "Företagsgruppen", path: "/foretagsgruppen" },
      { label: "Mottagningsgruppen", path: "/mottagningsgruppen" },
      { label: "Idrottsgruppen", path: "/idrottsgruppen" },
      { label: "Spelgruppen", path: "/spelgruppen" },
      { label: "Studienämnden", path: "/studienamnden" },
      { label: "JML-nämnden", path: "/jml-namnden" },
      { label: "Lokalnämnden", path: "/lokalnamnden" },
      { label: "Slurpen", path: "/slurpen" },
    ],
  },
  {
    label: "Nyantagen",
    path: "/nyantagen",
    subLinks: [
      { label: "Mottagningen", path: "/mottagningen" },
      {
        label: "Info om du blivit antagen",
        path: "/info-antagen",
      },
      { label: "Hitta hit", path: "/hitta-hit-forsta-dagen" },
      { label: "Info om KTH Flemingsberg", path: "/info-om-kth-flemingsberg" },
      { label: "Vad gör sektionen", path: "/vad-gor-sektionen" },
      {
        label: "Så blir du en del av sektionen",
        path: "/bli-del-av-sektionen",
      },
    ],
  },
  {
    label: "Kontakt",
    path: "/kontakt",
    superButton: true,
  },
];

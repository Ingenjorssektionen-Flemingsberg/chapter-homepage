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
      { label: "Styrdokument", path: "/styrdokument" },
      { label: "Sektionsmöten", path: "/sektionsmaten" },
      { label: "Styrelsemöten", path: "/styrelsemoten" },
      { label: "Skåp", path: "/skåp" },
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
    ],
  },
  {
    label: "Nyantagen",
    path: "/nyantagen",
  },
  {
    label: "Kontakt",
    path: "/kontakt",
    superButton: true,
  },
];

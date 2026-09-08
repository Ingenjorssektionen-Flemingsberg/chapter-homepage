// links.ts

export type LinkTo = {
  href: string;
  remote?: boolean;
};

export const LINKS = {
  // -----------------
  // Internal pages
  // -----------------
  internal: {
    sektionen: {
      href: "/sektionen",
    },
    rudan: {
      href: "/rudan",
    },
    qm: {
      href: "/qm",
    },
    mottagningsgruppen: {
      href: "/mottagningsgruppen",
    },
    foretagsgruppen: {
      href: "/foretagsgruppen",
    },
    studienamnden: {
      href: "/studienamnden",
    },
    jml: {
      href: "/jml-namnden",
    },
    valberedningen: {
      href: "/valberedningen",
    },
    lokalnamnden: {
      href: "/lokalnamnden",
    },
    utbytesnamnden: {
      href: "/utbytesnamnden",
    },
    idrottsgruppen: {
      href: "/idrottsgruppen",
    },
    spelgruppen: {
      href: "/spelgruppen",
    },
    infogruppen: {
      href: "/infogruppen",
    },
    slurpen: {
      href: "/slurpen",
    },
    kontakt: {
      href: "/kontakt",
    },
    styrdokument: {
      href: "/styrdokument",
    },
    organOchNamnder: {
      href: "/organ-och-nämnder",
    },
    fam: {
      href: "https://famkth.se",
      remote: true,
    },
  },

  // -----------------
  // Social media
  // -----------------
  social: {
    // Sektionen
    discord: {
      href: "https://discord.gg/4NCHnFf3tk",
      remote: true,
    },
    instagram: {
      href: "https://instagram.com/isflemingsberg",
      remote: true,
    },
    facebook: {
      href: "https://www.facebook.com/isflemingsberg/",
      remote: true,
    },
    linkedin: {
      href: "https://www.linkedin.com/company/ingsekt",
      remote: true,
    },
    linktree: {
      href: "https://linktr.ee/isflemingsberg",
      remote: true,
    },
    tiktok: {
      href: "https://www.tiktok.com/@isflemingsberg",
      remote: true,
    },

    // Organ & Nämnder
    qmFacebook: {
      href: "http://facebook.com/FISQlubbmasteri/",
      remote: true,
    },
    qmInstagram: {
      href: "https://www.instagram.com/fisqeri/",
      remote: true,
    },
    famInstagram: {
      href: "https://www.instagram.com/isf_fam/",
      remote: true,
    },
    mottagningInstagram: {
      href: "https://www.instagram.com/isfmottagningen/",
      remote: true,
    },
    slurpenInstagram: {
      href: "https://www.instagram.com/slurpenredaktionen/",
      remote: true,
    },
    spelDiscord: {
      href: "https://discord.gg/vPWAkFauh6",
      remote: true,
    },
    idrottDiscord: {
      href: "https://discord.gg/2EJ9YZp9Yp",
      remote: true,
    },
    sektionDiscrod: {
      href: "https://discord.gg/qTj7QBJcU4",
      remote: true,
    },
  },

  kth: {
    nypakth: {
      href: "https://www.kth.se/student/studier/nypakth",
      remote: true,
    },

    dispens: {
      href: "https://www.kth.se/student/studier/nypakth/dispens",
      remote: true,
    },

    kthFlemingsberg: {
      href: "https://www.kth.se/om/kontakt/campus/kth-flemingsberg-1.640319",
      remote: true,
    },
  },

  ths: {
    root: {
      href: "https://thskth.se",
      remote: true,
    },
    membership: {
      href: "https://thskth.se/en/membership",
      remote: true,
    },
  },

  rkh: {
    root: {
      href: "https://www.rkh.se/",
      remote: true,
    },
  },

  mit: {
    root: {
      href: "https://mit-kth.se/",
      remote: true,
    },
  },

  // -----------------
  // Maps
  // -----------------
  maps: {
    kthFlemingsberg: {
      href: "https://maps.app.goo.gl/sUKCHSNANoSyEVV56",
      remote: true,
    },
  },

  // -----------------
  // Email
  // -----------------
  mail: {
    styrelsen: {
      href: "mailto:styrelsen@isflemingsberg.se",
    },
    ovve: {
      href: "mailto:ovve@isflemingsberg.se",
    },
    skap: {
      href: "mailto:skap@isflemingsberg.se",
    },
  },

  // -----------------
  // Documents
  // -----------------
  docs: {
    // Länk till sektionens stadgar
    stadgar: {
      href: "https://drive.google.com/file/d/1dCNJUAjUpPN6JdgPEi1cr0jzOldno6Yv/view?usp=drive_link",
      remote: true,
    },
    // Länk till dokument med alla våra varumärken och logotyper
    varumarkenOchLogotyper: {
      href: "https://drive.google.com/file/d/1-FPaCAIfSOJH2OBfAiyh4ZLt6o20Dy8V/view?usp=sharing",
      remote: true,
    },
    // Länk till sektionens reglemente
    reglemente: {
      href: "https://drive.google.com/open?id=1tQb1PrAbHCoUohqXTYzpSwjNS0pfX-DW&usp=drive_copy",
      remote: true,
    },

    // Detta årets SM mapp
    currentYearSm: {
      href: "https://drive.google.com/drive/folders/1C1LXggSB7IkzmDQqAJ8fNUziiQKdfW9P?usp=drive_link",
      remote: true,
    },
    // Länk till SM Guiden
    smGuide: {
      href: "https://drive.google.com/file/d/1TKy9drsz5bDNmcQ6FFEeMReiOyF9bJEr/view?usp=sharing",
      remote: true,
    },
    // Länk till drive mappen med alla föregående års sm protokoll
    smArkiv: {
      href: "https://drive.google.com/drive/folders/1l8p312qmFeGSdyALApIMq8zu9lzA-5ij?usp=sharing",
      remote: true,
    },

    // Länk till årets styrelse möte mapp
    currentYearStyrelseMote: {
      href: "https://drive.google.com/drive/folders/1pl9MKsvH3aMOVB0eoxdZzGfoZ6goMax5?usp=sharing",
      remote: true,
    },
    // Länk till drive mappen med alla föregående års styrelse möte protokoll
    styrelseMoteArkiv: {
      href: "https://drive.google.com/drive/folders/1SpILAQLOzgPQUcjVNjmRCQK9MSLVnObL?usp=sharing",
      remote: true,
    },

    motionMall: {
      href: "https://docs.google.com/document/d/1BwPKzr5vW68r-h-gB_r4SCVGKqhw5zQ3FCeaBBfdldo/edit?usp=drive_link",
      remote: true,
    },

    // QM
    qmReglemente: {
      href: "404",
      remote: false,
    },
    qmProtokoll: {
      href: "404",
      remote: false,
    },

    // OVVE
    ovveguide: {
      href: "https://drive.google.com/file/d/1boqsE3wHHwmx1qMnINyEggJADNJ0hK3l/view?usp=sharing",
      remote: true,
    },
  },
} as const;

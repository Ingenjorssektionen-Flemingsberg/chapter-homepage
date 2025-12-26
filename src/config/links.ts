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
      href: "https://isf-fam.se",
      remote: true,
    },
  },

  // -----------------
  // Social media
  // -----------------
  social: {
    // Sektionen
    discord: {
      href: "https://discord.gg/qTj7QBJcU4",
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
  },

  kth: {
    bas: {
      href: "https://www.kth.se/student/studier/nypakth/tekniskt-basar-kthflemingsberg-1.553271",
      remote: true,
    },
    titeh: {
      href: "https://www.kth.se/student/studier/nypakth/antagen-till-teknik-och-ekonomi-180-hp-1.358413",
      remote: true,
    },
    tidaa: {
      href: "https://www.kth.se/student/studier/nypakth/datateknik-flemingsberg-180-1.20533",
      remote: true,
    },
    tiela: {
      href: "https://www.kth.se/student/studier/nypakth/elektroteknik-180-1.62763",
      remote: true,
    },
    timel: {
      href: "https://www.kth.se/student/studier/nypakth/medicinsk-teknik-180-1.553000",
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
    stadgar: {
      href: "https://drive.google.com/file/d/1dCNJUAjUpPN6JdgPEi1cr0jzOldno6Yv/view?usp=drive_link",
      remote: true,
    },
    varumarkenOchLogotyper: {
      href: "https://drive.google.com/file/d/1-FPaCAIfSOJH2OBfAiyh4ZLt6o20Dy8V/view?usp=sharing",
      remote: true,
    },
    reglemente: {
      href: "https://drive.google.com/open?id=1tQb1PrAbHCoUohqXTYzpSwjNS0pfX-DW&usp=drive_copy",
      remote: true,
    },

    smGuide: {
      href: "https://drive.google.com/file/d/1TKy9drsz5bDNmcQ6FFEeMReiOyF9bJEr/view?usp=sharing",
      remote: true,
    },
    currentYearSm: {
      href: "https://drive.google.com/drive/folders/1wH3vGqSDEsM4Yn9tagDljv5k_4G1fsaB?usp=sharing",
      remote: true,
    },
    smArkiv: {
      href: "https://drive.google.com/drive/folders/1l8p312qmFeGSdyALApIMq8zu9lzA-5ij?usp=sharing",
      remote: true,
    },

    currentYearStyrelseMote: {
      href: "https://drive.google.com/drive/folders/17Nk7sRkxYubnYrozTd-H54FuAnCVWYhm?usp=drive_link",
      remote: true,
    },
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
      href: "",
      remote: true,
    },
    qmProtokoll: {
      href: "",
      remote: true,
    },

    // OVVE

    ovveguide: {
      href: "",
      remote: true,
    },
  },
} as const;

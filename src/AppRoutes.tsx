import type { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Event from "./pages/Event";
import Ovve from "./pages/sektionen/Ovve";
import Sangbok from "./pages/sektionen/Sangbok";
import Skap from "./pages/sektionen/Skap";
import Styrdokument from "./pages/sektionen/Styrdokument";
import Sektionsmoten from "./pages/sektionen/Sektionsmoten";
import Styrelsemoten from "./pages/sektionen/Styrelsemoten";
import Rudan from "./pages/sektionen/Rudan";
import Sektionen from "./pages/sektionen/Sektionen";
import Mottagningsgruppen from "./pages/organ-och-namnder/Mottagningsgruppen";
import Foretagsgruppen from "./pages/organ-och-namnder/Foretagsgruppen";
import Qm from "./pages/organ-och-namnder/QM";
import Idrottsgruppen from "./pages/organ-och-namnder/Idrottsgruppen";
import Spelgruppen from "./pages/organ-och-namnder/Spelgruppen";
import Studienamnden from "./pages/organ-och-namnder/Studienamnden";
import Jml from "./pages/organ-och-namnder/JML";
import Lokalnamnden from "./pages/organ-och-namnder/Lokalnamnden";
import Slurpen from "./pages/organ-och-namnder/Slurpen";
import Valberedningen from "./pages/organ-och-namnder/Valberedningen";
import Utbytesnamnden from "./pages/organ-och-namnder/Utbytesnamnden";
import Infogruppen from "./pages/organ-och-namnder/Infogruppen";
import Mottagningen from "./pages/nyantagen/Mottagningen";
import HittaHit from "./pages/nyantagen/HittaHit";
import InfoAntagen from "./pages/nyantagen/InfoAntagen";
import InfoFlemingsberg from "./pages/nyantagen/InfoFlemingsberg";
import JoinSektionen from "./pages/nyantagen/JoinSektionen";
import SektionenVerksamhet from "./pages/nyantagen/SektionenVerksamhet";
import News from "./pages/News";
import AdminNews from "./pages/AdminNews";
import Contact from "./pages/Contact";

const isAdmin = true; // TODO: replace with real auth logic

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      ...(isAdmin ? [{ path: "/admin", element: <AdminNews /> }] : []),

      { path: "/event", element: <Event /> },
      { path: "/nyheter", element: <News /> },
      { path: "/kontakt", element: <Contact /> },

      // Sektionen
      { path: "/sektionen", element: <Sektionen /> },
      { path: "/rudan", element: <Rudan /> },
      { path: "/sektionsmoten", element: <Sektionsmoten /> },
      { path: "/styrelsemoten", element: <Styrelsemoten /> },
      { path: "/styrdokument", element: <Styrdokument /> },
      { path: "/skap", element: <Skap /> },
      { path: "/ovve", element: <Ovve /> },
      { path: "/sangbok", element: <Sangbok /> },
      // Organ och Nämnder
      { path: "/qm", element: <Qm /> },
      { path: "/foretagsgruppen", element: <Foretagsgruppen /> },
      { path: "/mottagningsgruppen", element: <Mottagningsgruppen /> },
      { path: "/idrottsgruppen", element: <Idrottsgruppen /> },
      { path: "/spelgruppen", element: <Spelgruppen /> },
      { path: "/studienamnden", element: <Studienamnden /> },
      { path: "/jml-namnden", element: <Jml /> },
      { path: "/valberedningen", element: <Valberedningen /> },
      { path: "/utbytesnamnden", element: <Utbytesnamnden /> },
      { path: "/lokalnamnden", element: <Lokalnamnden /> },
      { path: "/infogruppen", element: <Infogruppen /> },
      { path: "/slurpen", element: <Slurpen /> },
      // Nyantagen
      { path: "/mottagningen", element: <Mottagningen /> },
      { path: "/info-antagen", element: <InfoAntagen /> },
      { path: "/hitta-hit", element: <HittaHit /> },
      { path: "/info-om-kth-flemingsberg", element: <InfoFlemingsberg /> },
      { path: "/vad-gor-sektionen", element: <SektionenVerksamhet /> },
      { path: "/bli-del-av-sektionen", element: <JoinSektionen /> },

      { path: "*", element: <NotFound /> },
    ],
  },
];

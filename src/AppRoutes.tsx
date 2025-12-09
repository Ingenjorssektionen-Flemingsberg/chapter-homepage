import type { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Event from "./pages/Event";
import Ovve from "./pages/Ovve";
import Sangbok from "./pages/Sangbok";
import Skap from "./pages/Skap";
import Styrdokument from "./pages/Styrdokument";
import Sektionsmoten from "./pages/Sektionsmoten";
import Styrelsemoten from "./pages/Styrelsemoten";
import Rudan from "./pages/Rudan";
import Sektionen from "./pages/Sektionen";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/event", element: <Event /> },
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

      // Nyantagen

      { path: "*", element: <NotFound /> },
    ],
  },
];

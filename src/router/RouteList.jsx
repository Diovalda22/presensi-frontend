import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashadmin from "../pages/adminPages/Dashadmin";
import Dashsiswa from "../pages/siswaPages/Dashsiswa";
import { Riwayat } from "../pages/siswaPages/Riwayat";
import Absensimin from "../pages/adminPages/Absensimin";
import Siswaadmin from "../pages/adminPages/Siswaadmin";
import SiswaGuardSkin from "../Skins/SiswaGuardSkin";
import AdminGuardSkin from "../Skins/AdminGuardSkin";
import GuestSkin from "../Skins/GuestSkin";
import Izin from "../layout/Izin/Izin";
import Dispen from "../layout/Izin/Dispen";
import { DataSiswa } from "../layout/SiswaAdmin/DataSiswa";
import { Page } from "../layout/About/Page";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <GuestSkin />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminGuardSkin />,
    children: [
      { path: "", element: <Dashadmin /> },
      { path: "dashboard", element: <Dashadmin /> },
      { path: "siswa", element: <Siswaadmin /> },
      { path: "data-siswa", element: <DataSiswa /> },
      { path: "absensi", element: <Absensimin /> },
    ],
  },
  {
    path: "/siswa",
    element: <SiswaGuardSkin />,
    children: [
      { path: "", element: <Dashsiswa /> },
      { path: "dashboard", element: <Dashsiswa /> },
      { path: "izin", element: <Izin /> },
      { path: "dispen", element: <Dispen /> },
      { path: "riwayat", element: <Riwayat /> },
      { path: "about", element: <Page /> },
    ],
  },
]);

export default routes;

import { Navigate, Outlet } from "react-router-dom";

const SiswaGuestSkin = () => {
  if (localStorage.getItem("token") != null) {
    return <Navigate to={"/siswa"} />;
  }

  return <Outlet />;
};

export default SiswaGuestSkin;

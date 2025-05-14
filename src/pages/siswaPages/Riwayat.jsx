import Layout from "../../layout/RiwayatSiswa/Layout";
import LayoutMobile from "../../layout/RiwayatSiswa/LayoutMobile";
import { TanggalProvider } from "../../layout/RiwayatSiswa/TanggalPIlih";
import { useMediaQuery } from "react-responsive";

export const Riwayat = () => {
  // Pindahkan useMediaQuery ke dalam fungsi komponen
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <TanggalProvider>
      {isMobile ? <LayoutMobile /> : <Layout />}
    </TanggalProvider>
  );
};

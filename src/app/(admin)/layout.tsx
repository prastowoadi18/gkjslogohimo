import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ModalProvider } from "@/components/providers/modal-providers";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <ModalProvider />
      <div className="flex-1 flex-grow">{children}</div>
      <Footer />
    </main>
  );
};

export default AdminLayout;

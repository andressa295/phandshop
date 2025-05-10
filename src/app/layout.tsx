import './globals.css';
import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "../../components/ui/button"; 
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Sua Plataforma de Lojas Online",
  description: "Crie sua loja virtual com facilidade e a menor taxa do mercado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col text-gray-800 font-sans">
        {/* Topo */}
        <header className="flex flex-wrap items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
          <nav className="space-x-4 flex items-center mt-2 md:mt-0 text-sm">
            <a href="#planos" className="hover:text-purple-700 font-medium">Planos</a>
            <a href="#contato" className="hover:text-purple-700 font-medium">Contato</a>
            <Button variant="ghost" className="text-xs md:text-sm">Login</Button>
            <Button className="bg-purple-700 hover:bg-purple-800 text-white text-xs md:text-sm">
              Cadastro
            </Button>
          </nav>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
        </header>

        {/* Conteúdo das páginas */}
        <main className="flex-grow">{children}</main>

        {/* Letreiro animado */}
        <div className="w-full bg-gradient-to-r from-purple-800 to-purple-400 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap py-2 flex gap-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="flex items-center text-white font-medium text-sm md:text-base">
                Criar loja <FiShoppingBag className="mx-2" />
              </span>
            ))}
          </div>
        </div>

        {/* Rodapé */}
        <footer
          id="contato"
          className="bg-purple-800 text-white px-6 py-12 grid gap-10 md:grid-cols-3 text-sm"
        >
          <div>
            <Image src="/logo.png" alt="Logo" width={120} height={40} className="mb-4" />
            <p>
              © {new Date().getFullYear()} Sua Plataforma. Todos os direitos reservados.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Menu</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Loja online</a></li>
              <li><a href="#" className="hover:underline">Funcionalidades</a></li>
              <li><a href="#" className="hover:underline">Dropship</a></li>
              <li><a href="#" className="hover:underline">Loja de temas</a></li>
              <li><a href="#" className="hover:underline">Comparar plataforma</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Atendimento</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Central de ajuda</a></li>
              <li><a href="#" className="hover:underline">Fale conosco</a></li>
              <li>
                <a
                  href="https://wa.me/seunumero"
                  className="hover:underline block text-center md:text-left"
                >
                  Whatsapp
                </a>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#"><FaInstagram size={20} className="hover:text-purple-300" /></a>
              <a href="#"><FaFacebook size={20} className="hover:text-purple-300" /></a>
              <a href="#"><FaWhatsapp size={20} className="hover:text-purple-300" /></a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

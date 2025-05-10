import React, { useState } from "react";
import { CheckCircle, ShoppingCart, Users, BarChart2, DollarSign, Globe } from "lucide-react";
import { Button } from "../components/ui/button";

// Definir a interface do tipo de plano
interface Plano {
  nome: string;
  precoMensal: string | null;
  precoAnual: string | null;
  destaque: boolean;
  beneficios: string[];
}

const planos: Plano[] = [
  {
    nome: "Básico",
    precoMensal: "R$ 49,00",
    precoAnual: "R$ 29,00 / Mês",
    destaque: false,
    beneficios: [
      "Produtos, visitas e usuários ilimitados",
      "Marketplace gratuitos e zero taxas",
      "Mentoria ao vivo",
      "Tarifa por venda com 1%",
      "Atendimento humanizado via chat",
      "Integração com Mercado Pago",
      "Integração com Melhor Envio"
    ]
  },
  {
    nome: "Essencial",
    precoMensal: "R$ 119,00 / Mês",
    precoAnual: "R$ 99,00 / Mês",
    destaque: false,
    beneficios: [
      "Produtos, visitas e usuários ilimitados",
      "Marketplace gratuitos e zero taxas",
      "Mentoria ao vivo",
      "Tarifa por venda com 1%",
      "Atendimento via chat e WhatsApp",
      "+50 integrações com a plataforma",
      "ERPs",
      "Intermediadores de pagamento",
      "Gestão de fretes e blog"
    ]
  },
  {
    nome: "Premium",
    precoMensal: "R$ 149,00",
    precoAnual: "R$ 129,00 / Mês",
    destaque: true,
    beneficios: [
      "Produtos, visitas e usuários ilimitados",
      "Marketplace gratuitos e zero taxas",
      "Mentoria ao vivo",
      "Tarifa por venda com 1%",
      "Acesso ao código-fonte HTML e CSS",
      "Criador de landing pages",
      "Brindes no carrinho",
      "Relatórios complexos",
      "Aviso-me",
      "Personalizador de produtos",
      "Guias de tamanho",
      "Captura de e-mail",
      "Criar selos customizados",
      "Aplicativos grátis",
      "Sacolinha do Instagram"
    ]
  },
  {
    nome: "Master",
    precoMensal: "R$ 249,00",
    precoAnual: "R$ 3299,00 / Mês",
    destaque: true,
    beneficios: [
      "Produtos, visitas e usuários ilimitados",
      "Marketplace gratuitos e zero taxas",
      "Mentoria ao vivo",
      "Tarifa por venda com 1%",
      "Implantação da loja online pronta em até 15 dias úteis",
      "Design e layout exclusivo",
      "Configurações de pagamento, ERP e transporte",
      "Garantia de 30 dias",
      "Underbook no checkout",
      "Kit de produto",
      "Importação por tornilha",
      "Aplicativo grátis",
      "Personalizador de produtos grátis",
      "Sacolinha do Instagram",
      "Todas as funcionalidades do Impulso"
    ]
  }
];

const Planos = () => {
  const [tipoPlano, setTipoPlano] = useState("mensal");

  const renderPreco = (plano: Plano) => {
    const preco = tipoPlano === "mensal" ? plano.precoMensal : plano.precoAnual;
    if (!preco) return "";
    const isMaster = plano.nome === "Master";
    return (
      <div className={`text-2xl font-bold ${isMaster ? "text-white" : "text-purple-600"}`}>
        {preco}
        <span className={`text-xs ml-1 ${isMaster ? "text-white" : "text-gray-500"}`}>/mês</span>
      </div>
    );
  };

  const renderIcon = (beneficio: string, index: number, isMaster: boolean) => {
    const iconClass = `w-4 h-4 ${isMaster && index < 4 ? "text-white" : "text-purple-600"}`;
    if (beneficio.includes("Produtos")) return <ShoppingCart className={iconClass} />;
    if (beneficio.includes("Marketplace")) return <Globe className={iconClass} />;
    if (beneficio.includes("Mentoria")) return <BarChart2 className={iconClass} />;
    if (beneficio.includes("Tarifa")) return <DollarSign className={iconClass} />;
    return <CheckCircle className={isMaster ? "text-white w-4 h-4" : "text-green-500 w-4 h-4"} />;
  };

  return (
    <div className="p-4 relative">
      <div className="flex justify-center gap-8 mb-6">
        {["mensal", "anual"].map((tipo) => (
          <div
            key={tipo}
            className="cursor-pointer text-lg font-medium relative"
            onClick={() => setTipoPlano(tipo)}
          >
            <span className={tipoPlano === tipo ? "text-purple-600" : "text-gray-700"}>
              {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
            </span>
            <div className={`absolute ${tipoPlano === tipo ? "border-b-2 border-purple-600" : ""}`} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {planos.map((plano) => {
          const isMaster = plano.nome === "Master";

          return (
            <div key={plano.nome} className="relative">
              {isMaster && (
                <div className="absolute -top-4 -left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-md z-10 shadow-md">
                  OFERTA ESPECIAL
                </div>
              )}

              <div
                className={`border rounded-2xl p-5 shadow-sm flex flex-col justify-between h-full ${
                  isMaster ? "bg-[#4b0082] text-white" : ""
                }`}
              >
                <div>
                  <h2 className={`text-xl font-bold mb-1 ${isMaster ? "text-white" : ""}`}>
                    {plano.nome}
                  </h2>
                  {isMaster && (
                    <p className="text-sm font-semibold mb-1">Profissional + Loja Pronta</p>
                  )}

                  {renderPreco(plano)}

                  {isMaster && (
                    <div className="text-xs mt-1 text-gray-200">
                      No plano anual você tem o seu site pronto
                    </div>
                  )}

                  <Button
                    className={`mt-4 rounded-full w-full py-2 ${
                      isMaster
                        ? "bg-white text-purple-700 hover:bg-gray-100"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                  >
                    CRIAR LOJA VIRTUAL GRÁTIS
                  </Button>

                  <hr className={`my-4 ${isMaster ? "border-white/30" : "border-gray-300 opacity-30"}`} />

                  <ul className="space-y-2">
                    {plano.beneficios.slice(0, 4).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        {renderIcon(b, i, isMaster)} <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <hr className={`my-4 ${isMaster ? "border-white/30" : "border-gray-300 opacity-30"}`} />

                  <ul className="space-y-2">
                    {plano.beneficios.slice(4).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        {renderIcon(b, i + 4, isMaster)} <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Planos;
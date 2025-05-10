// components/PlanosSection.tsx

import { useState } from "react";
import { FaCheck, FaTimes, FaBoxOpen, FaUsers, FaChartLine, FaShoppingCart } from "react-icons/fa";

const planos = {
  mensal: [
    {
      nome: "Impulso",
      preco: "R$ 49,90",
      beneficios: [
        { nome: "Produtos ilimitados", icone: <FaBoxOpen />, incluso: true },
        { nome: "Visitas ilimitadas", icone: <FaUsers />, incluso: true },
        { nome: "Usuários ilimitados", icone: <FaUsers />, incluso: true },
        { nome: "Marketplaces gratuitos e zero taxas", icone: <FaShoppingCart />, incluido: true },
        { nome: "Live de primeiros passos", icone: <FaChartLine />, incluso: true },
        { nome: "Tarifas por venda 1,5%", icone: null, incluso: true },
        { nome: "Atendimento via chat", icone: null, incluso: true },
        { nome: "Integração com meios de pagamento e envios", icone: null, incluso: true },
        { nome: "Sacolinha do Instagram", icone: null, incluso: false },
        { nome: "Instalação gratuita", icone: null, incluso: false },
        { nome: "Suporte via WhatsApp", icone: null, incluso: false },
        { nome: "Relatórios completos", icone: null, incluso: false },
        { nome: "Aplicativos grátis", icone: null, incluso: false },
      ],
    },
    {
      nome: "Avançado",
      preco: "R$ 99,90",
      beneficios: [
        { nome: "Produtos ilimitados", icone: <FaBoxOpen />, incluso: true },
        { nome: "Visitas ilimitadas", icone: <FaUsers />, incluso: true },
        { nome: "Usuários ilimitados", icone: <FaUsers />, incluso: true },
        { nome: "Marketplaces gratuitos e zero taxas", icone: <FaShoppingCart />, incluso: true },
        { nome: "Live de primeiros passos", icone: <FaChartLine />, incluso: true },
        { nome: "Tarifas por venda 1%", icone: null, incluso: true },
        { nome: "Atendimento via chat e WhatsApp", icone: null, incluso: true },
        { nome: "Mais de 50 integrações com plataformas e ERPs", icone: null, incluso: true },
        { nome: "Diversos intermediadores de pagamento, fretes e gestão de blog", icone: null, incluso: true },
        { nome: "Acesso ao código fonte HTML/CSS", icone: null, incluso: true },
        { nome: "Criador de Landing Pages", icone: null, incluso: true },
        { nome: "Brinde no carrinho", icone: null, incluso: true },
        { nome: "Relatórios completos", icone: null, incluso: true },
        { nome: "Avise-me brindes", icone: null, incluso: true },
        { nome: "Personalizador de produtos", icone: null, incluso: true },
        { nome: "Guia de tamanhos", icone: null, incluso: true },
        { nome: "Captura de e-mail", icone: null, incluso: true },
        { nome: "Criar selos customizados", icone: null, incluso: true },
        { nome: "Aplicativos grátis", icone: null, incluso: true },
        { nome: "Sacolinha do Instagram", icone: null, incluso: true },
        { nome: "Instalação gratuita", icone: null, incluso: false },
      ],
    },
    {
      nome: "Profissional Premium",
      preco: "R$ 299,99",
      beneficios: [
        { nome: "Produtos ilimitados", icone: <FaBoxOpen />, incluso: true },
        { nome: "Visitas ilimitadas", icone: <FaUsers />, incluso: true },
        { nome: "Usuários ilimitados", icone: <FaUsers />, incluso: true },
        { nome: "Marketplaces gratuitos e zero taxas", icone: <FaShoppingCart />, incluso: true },
        { nome: "Live de primeiros passos", icone: <FaChartLine />, incluso: true },
        { nome: "Tarifas por venda 0%", icone: null, incluso: true },
        { nome: "Atendimento via chat e WhatsApp", icone: null, incluso: true },
        { nome: "Implantação de produtos por planilha", icone: null, incluso: true },
        { nome: "Order Bump no checkout", icone: null, incluso: true },
        { nome: "Kit de produtos", icone: null, incluso: true },
        { nome: "Menores taxas do mercado", icone: null, incluso: true },
        // Inclui todos os benefícios do plano Avançado
      ],
    },
  ],
  anual: [
    // Estrutura similar aos planos mensais, com preços ajustados para o plano anual
  ],
};

export default function PlanosSection() {
  const [tipoPlano, setTipoPlano] = useState<"mensal" | "anual">("mensal");

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 mr-2 ${tipoPlano === "mensal" ? "bg-purple-700 text-white" : "bg-white text-purple-700"} rounded`}
            onClick={() => setTipoPlano("mensal")}
          >
            Mensal
          </button>
          <button
            className={`px-4 py-2 ${tipoPlano === "anual" ? "bg-purple-700 text-white" : "bg-white text-purple-700"} rounded`}
            onClick={() => setTipoPlano("anual")}
          >
            Anual
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {planos[tipoPlano].map((plano) => (
            <div key={plano.nome} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">{plano.nome}</h3>
              <p className="text-2xl font-bold mb-6">{plano.preco}</p>
              <ul className="space-y-2">
                {plano.beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-center">
                    {beneficio.icone && <span className="mr-2">{beneficio.icone}</span>}
                    {!beneficio.icone && (
                      <span className="mr-2">
                        {beneficio.incluso ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
                      </span>
                    )}
                    <span>{beneficio.nome}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

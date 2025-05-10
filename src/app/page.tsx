'use client';

import Image from 'next/image';
import Planos from '../../components/Planos';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800 font-sans">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-8 px-4 md:px-6 py-12 md:py-16 items-center bg-purple-50">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-800 mb-4 sm:mb-6 leading-tight">
            Ter sua loja online é mais simples do que você imagina.
          </h1>
          <p className="text-base sm:text-lg mb-6 text-gray-700">
            Venda 24 horas por dia com a cara da sua marca, temas personalizados e tudo o que você precisa para começar.
            Cobramos apenas <span className="font-bold text-purple-700">1% por venda</span>, a menor taxa do mercado.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Ilustração" width={260} height={260} className="w-auto h-auto max-w-[220px] sm:max-w-[260px]" />
        </div>
      </section>

      {/* Suporte */}
      <section className="w-full py-12 px-4 md:px-6">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-start justify-between">
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-purple-600">Suporte e Mentoria Phandshop</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Na Phandshop, você conta com suporte rápido, mentorias ao vivo e acompanhamento especializado em cada etapa. 
              Nosso sucesso é o seu sucesso — estamos prontos para te orientar e garantir que você tenha segurança para focar apenas em vender. 
              Com 97% de avaliações positivas, nosso suporte responde em até 1 minuto e nossas mentorias te ajudam a dominar sua loja virtual.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="border border-purple-600 rounded-lg p-6 w-full max-w-xs bg-transparent">
              <h3 className="text-lg font-semibold text-purple-600 mb-4">Horário de Atendimento</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Segunda à Sexta</span>
                  <span className="text-purple-700 font-semibold">09h às 20h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Finais de Semana e Feriados</span>
                  <span className="text-purple-700 font-semibold">10h às 15h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="px-4 md:px-6 py-12 md:py-16 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 max-w-3xl mx-auto">
          Na Phand você tem tudo que precisa pra vender mais online em um único lugar.
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Otimização", color: "from-purple-700 to-purple-500" },
            { label: "Gestão", color: "from-purple-600 to-purple-400" },
            { label: "Marketing", color: "from-purple-500 to-purple-300" },
            { label: "Logística", color: "from-purple-400 to-purple-200" },
          ].map((item, index) => (
            <div
              key={index}
              className={`w-full h-32 sm:h-40 rounded-xl bg-gradient-to-br ${item.color} text-white flex flex-col items-center justify-center shadow-md`}
            >
              <span className="text-3xl sm:text-4xl font-bold">25%</span>
              <span className="mt-2 text-sm sm:text-base font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Planos */}
      <Planos />
    </div>
  );
}

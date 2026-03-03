import React from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    {
      q: "¿Necesito instalar algo?",
      a: "No, datte.me funciona 100% en la nube desde el navegador de tu celular, tablet o computadora."
    },
    {
      q: "¿Funciona con MercadoPago?",
      a: "Sí, cuenta con integración nativa. Podés exigir el pago de una seña parcial o del monto total del turno al momento de reservar."
    },
    {
      q: "¿Qué pasa si cancelo?",
      a: "No tenés contratos de permanencia. Podés cancelar tu plan en cualquier momento desde tu panel de control, sin preguntas ni letras chicas."
    },
    {
      q: "¿Mis clientes necesitan crear una cuenta para reservar?",
      a: "No. Solo hacen clic en tu link, eligen el servicio, seleccionan la fecha y dejan su nombre y WhatsApp. Es el proceso más rápido del mercado."
    },
    {
      q: "¿Es difícil configurar?",
      a: "Para nada. El panel es súper intuitivo y la mayoría de los negocios dejan su agenda configurada y lista en menos de 10 minutos."
    }
  ];

  return (
    <>
      <div className="bg-slate-900 py-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-300 font-medium md:text-lg flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 lg:gap-8">
            <span>Sin contrato de permanencia</span>
            <span className="hidden md:block text-slate-600">•</span>
            <span>Tu dinero es tuyo, no cobramos comisión por turno</span>
            <span className="hidden md:block text-slate-600">•</span>
            <span>Soporte en español</span>
          </p>
        </div>
      </div>
      <section id="faq" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Preguntas <span className="font-serif italic font-normal text-indigo-600">frecuentes</span>
            </h2>
            <p className="text-lg text-slate-600">Si tenés más preguntas, no dudes en contactarnos.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 shadow-sm [&_summary::-webkit-details-marker]:hidden overflow-hidden transition-all duration-300 hover:shadow-md">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900 text-lg">
                  {faq.q}
                  <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center group-open:bg-indigo-50 transition-colors">
                    <ChevronDown className="w-5 h-5 text-slate-500 group-open:text-indigo-600 group-open:rotate-180 transition-transform" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed bg-slate-50/50 pt-2 border-t border-slate-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

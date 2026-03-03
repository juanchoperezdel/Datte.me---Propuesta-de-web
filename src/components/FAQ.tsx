import React from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    {
      q: "¿Cómo pueden los clientes reservar un turno?",
      a: "Los clientes pueden buscar doctores por especialidad, ubicación o disponibilidad y ver horarios en tiempo real. Luego pueden seleccionar un horario conveniente, confirmar la reserva y realizar pagos online si es necesario. Una vez reservado, reciben confirmación instantánea y recordatorios automáticos."
    },
    {
      q: "¿Pueden los doctores manejar múltiples clínicas u hospitales?",
      a: "Sí, la plataforma permite a los profesionales gestionar agendas y disponibilidades a través de múltiples ubicaciones desde un solo panel de control."
    },
    {
      q: "¿La consulta es solo presencial?",
      a: "No, ofrecemos soporte tanto para consultas presenciales como para videollamadas seguras integradas directamente en la plataforma."
    },
    {
      q: "¿Cómo se guardan los registros de los pacientes?",
      a: "Todos los registros se almacenan de forma segura en la nube con encriptación de extremo a extremo, cumpliendo con las normativas de privacidad de datos de salud."
    },
    {
      q: "¿Qué beneficios obtienen los pacientes?",
      a: "Acceso 24/7 para reservas, recordatorios automáticos, historial médico digitalizado y la posibilidad de tener consultas virtuales sin salir de casa."
    },
    {
      q: "¿Qué beneficios obtienen los doctores/hospitales?",
      a: "Reducción drástica de ausencias, automatización de tareas administrativas, gestión centralizada de pagos y una mejor experiencia para sus pacientes."
    },
    {
      q: "¿Qué tan seguros son los datos?",
      a: "Utilizamos los más altos estándares de seguridad de la industria, incluyendo encriptación AES-256 y cumplimiento con normativas HIPAA y GDPR."
    }
  ];

  return (
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
  );
};

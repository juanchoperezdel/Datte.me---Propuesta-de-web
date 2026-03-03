import React from 'react';

export const LogosBand = () => {
    return (
        <div className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-bold text-slate-400 mb-8 uppercase tracking-widest">
                    Se integra con las herramientas que ya usás
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {/* Mock MercadoPago Logo */}
                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">mp</span>
                        </div>
                        <span className="font-bold text-slate-800 text-lg tracking-tight">mercado<span className="text-blue-500">pago</span></span>
                    </div>

                    {/* Mock WhatsApp Logo */}
                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937s-3.113 6.938-6.938 6.938z" /></svg>
                        </div>
                        <span className="font-bold text-slate-800 text-lg tracking-tight">WhatsApp</span>
                    </div>

                    {/* Mock Google Calendar Logo */}
                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center p-1 shadow-sm">
                            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                                <path d="M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4Z" fill="#fff" />
                                <path d="M16 2V6M8 2V6M3 10H21" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <rect x="7" y="14" width="3" height="3" rx="0.5" fill="#34A853" />
                                <rect x="14" y="14" width="3" height="3" rx="0.5" fill="#FBBC04" />
                                <rect x="10.5" y="14" width="3" height="3" rx="0.5" fill="#EA4335" />
                            </svg>
                        </div>
                        <span className="font-bold text-slate-800 text-lg tracking-tight">Google Calendar</span>
                    </div>

                    {/* Mock Instagram Logo */}
                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center p-[2px]">
                            <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center">
                                <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" ry="5" strokeWidth="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2"></line></svg>
                            </div>
                        </div>
                        <span className="font-bold text-slate-800 text-lg tracking-tight">Instagram</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

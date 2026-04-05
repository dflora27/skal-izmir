'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AnimatedContainer = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number; }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export function Footer() {
	const pathname = usePathname();
	const langMatch = pathname.match(/^\/(tr|en|es)(\/|$)/);
	const lang = langMatch ? langMatch[1] : 'tr';
	
	const dict = {
		tr: {
			corp: 'Kurumsal',
			links: {
				board: 'Yönetim Kurulu', president: 'Başkanın Mesajı', what: 'Skål Nedir?', izmir: 'Skål International İzmir', usdf: 'USDF',
				events: 'Etkinlikler', members: 'Üye Ağı', young: 'Young Skål', florimond: 'Florimond Fund', contact: 'İletişim'
			},
			quick: 'Hızlı Erişim',
			news: 'Güncel Haberler',
			newsDesc: 'E-bültenimize abone olarak etkinliklerimizden ilk siz haberdar olun.',
			email: 'E-posta adresiniz',
			subscribe: 'Abone Ol',
			rights: 'Tüm hakları saklıdır.',
			privacy: 'Gizlilik Politikası',
			terms: 'Kullanım Şartları'
		},
		en: {
			corp: 'Corporate',
			links: {
				board: 'Board of Directors', president: 'President\'s Message', what: 'What is Skål?', izmir: 'Skål International Izmir', usdf: 'USDF',
				events: 'Events', members: 'Member Network', young: 'Young Skål', florimond: 'Florimond Fund', contact: 'Contact'
			},
			quick: 'Quick Access',
			news: 'Latest News',
			newsDesc: 'Subscribe to our newsletter to be the first to know about our events.',
			email: 'Email address',
			subscribe: 'Subscribe',
			rights: 'All rights reserved.',
			privacy: 'Privacy Policy',
			terms: 'Terms of Use'
		},
		es: {
			corp: 'Corporativo',
			links: {
				board: 'Junta Directiva', president: 'Mensaje del Presidente', what: '¿Qué es Skål?', izmir: 'Skål Esmirna', usdf: 'USDF',
				events: 'Eventos', members: 'Red de Miembros', young: 'Young Skål', florimond: 'Fondo Florimond', contact: 'Contacto'
			},
			quick: 'Acceso Rápido',
			news: 'Noticias Recientes',
			newsDesc: 'Suscríbase a nuestro boletín para ser el primero en enterarse de nuestros eventos.',
			email: 'Correo electrónico',
			subscribe: 'Suscribirse',
			rights: 'Todos los derechos reservados.',
			privacy: 'Política de Privacidad',
			terms: 'Términos de Uso'
		}
	};
	const t = dict[lang as keyof typeof dict] || dict.en;

	return (
		<footer className="w-full relative bg-[#FDFDFD] border-t border-slate-200 px-6 py-20 lg:py-32">
			<div className="container mx-auto px-6 md:px-12">
				
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
					<AnimatedContainer className="flex flex-col gap-6">
						<img src="/logo-60.png" alt="Skål International İzmir Logo" className="w-[280px] md:w-[320px] object-contain drop-shadow-sm mb-4 -ml-4 lg:-ml-6" />
						<p className="text-[#0A192F] text-sm leading-relaxed font-medium">
							İsmet Kaptan Mahallesi<br/>
							Çankaya İş Merkezi No.90 Kat:5 D: 507<br/>
							Konak / İZMİR
						</p>
						<div className="flex gap-4 mt-6">
							<a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#0A192F] hover:bg-blue-50 hover:text-pink-600 transition-colors duration-300">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
							</a>
							<a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#0A192F] hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
							</a>
						</div>
					</AnimatedContainer>

					<AnimatedContainer delay={0.1} className="flex flex-col gap-6">
						<h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#0A192F]">{t.corp}</h3>
						<ul className="text-slate-500 font-medium text-sm space-y-4">
							<li><Link href={`/${lang}/board`} className="hover:text-blue-600 transition-colors">{t.links.board}</Link></li>
							<li><Link href={`/${lang}/president-message`} className="hover:text-blue-600 transition-colors">{t.links.president}</Link></li>
							<li><Link href={`/${lang}/what-is-skal`} className="hover:text-blue-600 transition-colors">{t.links.what}</Link></li>
							<li><Link href={`/${lang}/skal-izmir`} className="hover:text-blue-600 transition-colors">{t.links.izmir}</Link></li>
							<li><Link href={`/${lang}/usdf`} className="hover:text-blue-600 transition-colors">{t.links.usdf}</Link></li>
						</ul>
					</AnimatedContainer>

					<AnimatedContainer delay={0.2} className="flex flex-col gap-6">
						<h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#0A192F]">{t.quick}</h3>
						<ul className="text-slate-500 font-medium text-sm space-y-4">
							<li><Link href={`/${lang}/events`} className="hover:text-blue-600 transition-colors">{t.links.events}</Link></li>
							<li><Link href={`/${lang}/members`} className="hover:text-blue-600 transition-colors">{t.links.members}</Link></li>
							<li><Link href={`/${lang}/young-skal`} className="hover:text-blue-600 transition-colors">{t.links.young}</Link></li>
							<li><Link href={`/${lang}/florimond-volckaert-fund`} className="hover:text-blue-600 transition-colors">{t.links.florimond}</Link></li>
							<li><Link href={`/${lang}/contact`} className="hover:text-blue-600 transition-colors">{t.links.contact}</Link></li>
						</ul>
					</AnimatedContainer>

					<AnimatedContainer delay={0.3} className="flex flex-col gap-6">
						<h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#0A192F]">{t.news}</h3>
						<p className="text-slate-500 text-sm leading-relaxed max-w-xs">{t.newsDesc}</p>
						<div className="flex w-full mt-2">
							<input type="email" placeholder={t.email} className="flex-1 border-b border-l border-t border-slate-200 rounded-l-lg px-4 py-3 text-sm outline-none focus:border-blue-300" />
							<button className="bg-[#0A192F] text-white px-4 py-3 rounded-r-lg text-xs uppercase tracking-widest font-bold hover:bg-blue-600 transition-colors">{t.subscribe}</button>
						</div>
					</AnimatedContainer>
				</div>

				<div className="w-full border-t border-slate-200 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-slate-400 text-xs">
						{new Date().getFullYear()} © Skål International İzmir. {t.rights}
					</p>
					<div className="flex gap-6 text-slate-400 text-xs font-semibold">
						<Link href={`/${lang}`} className="hover:text-[#0A192F] transition-colors">{t.privacy}</Link>
						<Link href={`/${lang}`} className="hover:text-[#0A192F] transition-colors">{t.terms}</Link>
					</div>
				</div>

			</div>
		</footer>
	);
};
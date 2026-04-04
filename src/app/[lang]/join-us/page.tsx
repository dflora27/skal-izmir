import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, ShieldCheck, Globe2, Target, Users, Plane, CreditCard, ChevronRight } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';

type Props = {
  params: Promise<{ lang: string }>;
};

export const metadata: Metadata = {
  title: 'Bize Katılın | Skål International İzmir',
  description: 'Skål International üyesi olmanın ayrıcalıklarını keşfedin. Turizmde güvenilir bir ses: "A trusted Voice in Travel and Tourism"',
};

export default async function JoinUsPage({ params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang as 'tr' | 'en' | 'es');

  // Currently we render the hardcoded Turkish content explicitly as requested by the user.
  // In the future this can be moved to dictionaries for full i18n support.
  if (lang !== 'tr') {
     // Optional: You could redirect to 'tr' or display in english.
  }

  const principles = [
    "Friendship (Dostluk, Arkadaşlık)",
    "Contribution and Participation (Katkı ve katılım)",
    "International (Uluslararası)",
    "Non-discriminatory (Irkçılığa karşı)",
    "Non-profit making (Kâr gütmez)",
    "Administration (Yönetim)",
    "Democratic and Autonomous (Demokratik ve özerk)",
    "Not-inward looking (Sadece kendini düşünen değil)",
    "Universal (Evrensel)"
  ];

  const whoCanJoin = [
    "Seyahat Acenteleri",
    "Otel, Motel, Tatil köyü vb. konaklama tesisleri",
    "Havayolu, Denizyolu, Demiryolu ulaştırması,",
    "Turist rehberleri,",
    "Turizm Eğitimi veren akademisyenler,",
    "Turizm Danışmanları ,",
    "Rent a Car firmaları,",
    "Resmi Turizm Kuruluşları,",
    "Özel şartlarla Restaurantlar,",
    "Turizm yazarları, Seyahat blog yazarları,",
    "Agro, eko turizmciler,",
    "Cruise firmaları,",
    "E - Turizm firmaları,",
    "Turizm firmaları ve tesislerine hizmet ve mal veren tedarikçiler,",
    "Müze, Turizm Ofisi, Tematik Park Yöneticileri,",
    "Sağlık Turizmi İle uğraşan yöneticiler",
    "Turizm ile ilgili pek çok daldaki profesyoneller…"
  ];

  const privileges = [
    "Skål 83 yıllık köklü bir kuruluş,",
    "Turizm endüstrisinin en global sivil toplum kuruluşu,",
    "Bir dostluk kulübü,",
    "İş imkânları,",
    "Yiyelim, içelim, eğlenelim, gezelim …",
    "Skål Prestijli…",
    "Skål Uluslararası bir kuruluş, bu nedenle fayda sağlayabilir,",
    "14.000 üye ile network…"
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#4E3F84] selection:text-white">
      <Header dict={dict} lang={lang} />

      {/* Hero Header - Deep Parallax & Elegance */}
      <section className="relative h-[65vh] lg:h-[75vh] w-full flex flex-col justify-end overflow-hidden pt-32">
        <div className="absolute inset-0 z-0 bg-[#0A192F]">
          <Image
            src="/anasayfa-2.jpg" 
            alt="Skal Membership Background"
            fill
            className="object-cover object-center transform scale-105 animate-[pulse_10s_ease-in-out_infinite] opacity-50 mix-blend-luminosity filter grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#128FD9]/30 to-[#F87498]/30 mix-blend-multiply z-10"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12 pb-24 text-center lg:text-left flex flex-col items-center lg:items-start group">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 max-w-fit rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white/90 text-[10px] lg:text-xs font-bold tracking-[0.3em] uppercase mb-8 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#128FD9] animate-pulse"></span>
            A trusted Voice in Travel and Tourism
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold text-white leading-[1.05] tracking-tight drop-shadow-2xl">
            Skål International
          </h1>
          <p className="text-xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-[#F87498] font-medium italic mt-6 lg:mt-8 tracking-wide drop-shadow-lg max-w-4xl">
            Turizmde Güvenilir Bir Ses
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative z-20 w-full max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* About Skal Section */}
        <div className="prose prose-lg lg:prose-xl max-w-none text-slate-600 font-light leading-relaxed mb-32 drop-shadow-sm">
          <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-[#4E3F84] first-letter:mr-3 first-letter:float-left">
            <strong className="text-[#0A192F] font-semibold">Skål</strong>, küresel turizm ve arkadaşlığı uluslararası boyutta destekleyen turizm liderlerinden oluşan uluslararası profesyonel bir örgüttür.
          </p>
          <p>
            SKAL, dünya turizm profesyonellerinin küresel turizmi ve arkadaşlığı yaymaya çalıştığı uluslararası en yaygın ve en eski turizm sivil toplum örgütüdür. Bünyesinde, uluslararası seyahat ve turizm endüstrisindeki tüm sektörleri toplaması bakımından da dünyada tektir. Turizmin üst düzey yöneticileri olan üyeleri, yerel, ulusal ve uluslararası platformlarda buluşurlar ve turizmin gündeminde bulunan belli başlı konuları tartışırlar. Skal, turizm profesyonelliğini geliştirmek ve bu alanda üyelerine yarar sağlamak amacındadır. 
            <strong className="text-[#0A192F] italic"> ‘’Doing Business Among Friends’’</strong> sloganını benimseyerek uluslararası dostluk ve iş bağlantısını pekiştirmek, Turizm endüstrisinde profesyonelliği kuvvetlendirmek amacı ile düzenlenen seminer, konferans ve benzeri organizasyonların yapılmasını teşvik eder.
          </p>
          <p>
            İlk kulüp, İskandinavya’da yapılan bir eğitim gezisi sonucunda Florimond Volckaert ve birkaç turizmci arkadaşı tarafından <strong className="text-[#128FD9]">1932 yılında Paris’te kurulmuştur.</strong> 2 yıl sonra, 1934 yılında, bu oluşum, dostluk ve uluslararası bazda gelişmiş, ‘’Association Internationale des Skal Clubs’’ formasyonunda ve Paris Skal Başkanı olan ‘’Father of Skal’’ olarak da bilinen Florimond Volckaert öncülüğünde Skal, uluslararası kimliğine kavuşmuştur.
          </p>
          <p>
            Uluslararası Skal, bugün yaklaşık <strong className="text-[#F87498]">102 ülkede, 343 kulüp ve 13.424 üye</strong> ile temsil edilmektedir. Tüm kulüpler ve Ulusal Komiteler <strong className="text-[#4E3F84]">İspanya/Torremolinos’da SKAL INTERNATIONAL</strong> şemsiyesi altında birleşmiştir ve bu merkezden idare edilir.
          </p>
          <p>
            Skal International, her yıl değişik bir ülkede yapılan Dünya kongresinde, genel kurulda seçilen 7 kişilik bir yönetim kadrosu ile yönetilir. Bu kongreler, üyelere dünyada turizm sektöründeki gelişmeleri birinci ağızdan dinleme ve izleme fırsatı verir.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-[#0A192F] to-[#1B123A] rounded-[3rem] p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden mb-32 -mx-6 lg:mx-0 transform hover:-translate-y-2 transition-transform duration-700">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#128FD9]/20 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
          <Target className="w-16 h-16 text-[#F87498] mb-8" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Misyonumuz</h2>
          <p className="text-xl lg:text-3xl leading-relaxed font-light text-blue-100">
            Profesyonelliğimiz, dostluklarımız ve liderliğimizle vizyonumuzu geliştirmek ve bu özelliklerimizi azami kullanarak <strong className="text-white">‘’Güvenilir ve sorumlu bir Turizm Endüstrisi’’</strong> için çok çalışmak!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
           {/* Principles */}
           <div>
              <div className="flex items-center gap-4 mb-10">
                 <Globe2 className="w-10 h-10 text-[#128FD9]" />
                 <h2 className="text-3xl lg:text-4xl font-bold text-[#0A192F] tracking-tight">SKAL Evrensel Prensipleri</h2>
              </div>
              <ul className="space-y-4">
                 {principles.map((p, idx) => (
                   <li key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4E3F84] font-bold shadow-sm group-hover:bg-[#128FD9] group-hover:text-white transition-colors">{idx + 1}</div>
                      <span className="font-medium text-slate-700">{p}</span>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Privileges */}
           <div>
              <div className="flex items-center gap-4 mb-10">
                 <ShieldCheck className="w-10 h-10 text-[#F87498]" />
                 <h2 className="text-3xl lg:text-4xl font-bold text-[#0A192F] tracking-tight">Üyesi Olmanın Ayrıcalıkları</h2>
              </div>
              <ul className="space-y-4">
                 {privileges.map((p, idx) => (
                   <li key={idx} className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-[#F87498] flex-shrink-0 mt-1" />
                      <span className="font-medium text-lg text-slate-700 leading-relaxed">{p}</span>
                   </li>
                 ))}
              </ul>
           </div>
        </div>

        {/* Categories & Who Can Join Grid */}
        <div className="mb-32">
           <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold text-[#0A192F] tracking-tight mb-6">Kimler SKAL Üyesi Olabilir?</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">Turizm endüstrisine profesyonel olarak emek veren ve çeşitli kategorilerde faaliyet gösteren yöneticiler Skål ailesine katılabilir.</p>
           </div>
           
           <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {whoCanJoin.map((w, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#128FD9] hover:shadow-xl transition-all duration-300 break-inside-avoid flex items-center gap-4">
                     <span className="w-2 h-2 rounded-full bg-[#128FD9] flex-shrink-0"></span>
                     <span className="text-slate-700 font-medium">{w}</span>
                  </div>
              ))}
           </div>
        </div>

        {/* Membership Categories Detailed */}
        <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-20 border border-slate-200/60 shadow-inner mb-32">
           <h2 className="text-4xl lg:text-5xl font-bold text-[#0A192F] mb-16 text-center tracking-tight">Üyelik Kategorileri</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
                 <h3 className="text-2xl font-bold text-[#128FD9] mb-4">Aktif Üye (Active Member)</h3>
                 <p className="text-slate-600 font-light leading-relaxed">Hali hazırda turizmde aktif, en az 3 yıl turizm ve seyahat sektöründe çalışmış yönetici veya yönetici yardımcısı pozisyonuna haiz kişiler "AKTİF" üye olabilir.</p>
              </div>

              <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
                 <h3 className="text-2xl font-bold text-[#F87498] mb-4">Aktif Münferit Üye (Active Individual Member)</h3>
                 <p className="text-slate-600 font-light leading-relaxed">Yönetici kapasitesinde olup turizm ve seyahat sektöründe çalışan, ancak bulunduğu ülkede Skål Kulübü olmayan veya ülke kanunları gereği Skål Kulübü kurulamayan yerlerde veya en yakın Skål Kulübü’nün 160 km’den fazla mesafede bulunduğu durumlardaki profesyonel turizmciler üye olabilirler.</p>
              </div>

              <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
                 <h3 className="text-2xl font-bold text-[#4E3F84] mb-4">Emekli Üye (Retired Member)</h3>
                 <p className="text-slate-600 font-light leading-relaxed">55 yaşına gelmiş, turizmden emekli olmuş ve emeklilik öncesi en az 3 yıl aktif üyeliği olanlar Emekli Üye sayılır.</p>
              </div>

              <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
                 <h3 className="text-2xl font-bold text-[#0A192F] mb-4">Fahri Üye (Associate Member)</h3>
                 <p className="text-slate-600 font-light leading-relaxed">Daha önce en az 5 yıl aktif üye olan ama sonrasında görev değişikliği ile aktif üye sınıflandırmasında sayılamayıp yine turizmle ilintili yerlerde çalışanlar.</p>
              </div>
              
              <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-500 md:col-span-2">
                 <h3 className="text-2xl font-bold text-[#128FD9] mb-6 flex items-center gap-3"><Plane className="w-8 h-8"/> Young Skål (Student, Professional, Associate)</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                       <h4 className="font-bold text-[#0A192F] mb-2 uppercase tracking-wider text-sm">Öğrenci</h4>
                       <p className="text-slate-600 font-light">Minimum 18 yaş, maksimum 27 yaş.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                       <h4 className="font-bold text-[#0A192F] mb-2 uppercase tracking-wider text-sm">Profesyonel</h4>
                       <p className="text-slate-600 font-light">Minimum 20 yaş, maksimum 29 yaş.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                       <h4 className="font-bold text-[#0A192F] mb-2 uppercase tracking-wider text-sm">Associate</h4>
                       <p className="text-slate-600 font-light text-sm">27 yaşını geçmiş ama hala okuyor veya 29 yaşını geçmiş hala eğitim alıyor veya çalışıyor, fakat Aktif Skål Üyelik kimliğine haiz değil. Bu durumda Associate Member olarak 35 yaşına kadar devam edebilir.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* CTA Banner */}
        <div className="w-full bg-[#1B123A] rounded-[4rem] p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl group">
           <div className="absolute inset-0 bg-gradient-to-tr from-[#F87498]/20 to-[#128FD9]/20 mix-blend-screen z-0"></div>
           <div className="absolute inset-0 bg-[url('/swc/swc-4.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-1000 z-0"></div>
           
           <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center mb-8">
                 <CreditCard className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Kariyerinizi ve Ağınızı Genişletin</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                 Turizm endüstrisinin en global ve prestijli sivil toplum kuruluşuna katılın. Hemen üyelik formunu doldurun ve 14.000 üyeli global ağımıza dahil olun.
              </p>
              <a 
                 href="https://www.skal.org/MembershipForm" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-4 bg-[#F87498] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#0A192F] shadow-[0_0_40px_rgba(248,116,152,0.4)] transition-all duration-500 hover:scale-105"
              >
                 Üyelik Formunu Doldur
                 <ChevronRight className="w-5 h-5" />
              </a>
           </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}

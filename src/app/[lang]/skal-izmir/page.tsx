import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer-section';
import { getDictionary } from '@/lib/dictionaries';


export async function generateMetadata({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t: Record<string, { title: string, description: string }> = {
    tr: { title: "Skål International İzmir | Skål International İzmir", description: "Skål International İzmir Skål International İzmir sayfası." },
    en: { title: "Skål International Izmir | Skål International Izmir", description: "Skål International Izmir Skål International Izmir page." },
    es: { title: "Skål International Esmirna | Skål International Esmirna", description: "Página de Skål International Esmirna de Skål International Esmirna." }
  };
  return { title: t[lang]?.title, description: t[lang]?.description };
}

export default async function SkalIzmirPage({ params }: { params: Promise<{ lang: 'tr' | 'en' | 'es' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  const historyPillars = [
    { year: "1956", desc: "Türkiye’nin halen devam eden ilk Uluslararası Fuarı." },
    { year: "1960", desc: "İstanbul’dan sonra direkt uluslararası uçuşlara hizmet veren ilk nokta: Çiğli Havalimanı." },
    { year: "1962", desc: "İlk Türk otel zincirinin öncülerinden Bergama Tusan Motel." },
    { year: "1964", desc: "Uluslararası standartlardaki ilk 5 yıldızlı otellerden Büyük Efes Oteli." },
    { year: "1967", desc: "Türkiye’nin ilk yabancı tatil köyü Foça Tatil Köyü (Türkiye’deki ilk Club Med)." },
    { year: "1969", desc: "İlk Türk tatil köyü Nebioğlu Tatil Köyü." },
    { year: "1972", desc: "Akdeniz Olimpiyatları’na ev sahipliği yaparak uluslararası turizm kimliğini pekiştirmesi." }
  ];

  const milestones = [
    { period: "1974 - 2002", president: "Josef Keşişyan", desc: "28 yıl aralıksız sürdürdüğü başkanlığı boyunca Skål’un ülkemizde yaygınlaşmasına devasa katkılar sunmuş, ardından Skål International tarafından Onur Üyeliği unvanına layık görülmüştür." },
    { period: "2002", president: "Ali Acundaş", desc: "Bayrağı devralan Ali Acundaş, kulübümüzün Onur Üyesi olarak Skål değerlerini ileriye taşımıştır." },
    { period: "2008", president: "Faik Alsaç", desc: "Kulübümüz, farklı üye profillerinin katılımıyla büyüme trendine girmiş ve USDF’nin kuruluşuna paralel olarak kurumsal kimliğini pekiştirmiştir." },
    { period: "2012", president: "Nihat Levent", desc: "Skål Dünya Kongresi adaylığı ve uluslararası yoğun katılım sayesinde İzmir, küresel ölçekte tanıtılmıştır." },
    { period: "2016", president: "Berrin Uşkay", desc: "Kulübümüzün ilk kadın başkanı olarak sektörel krizlere rağmen 50. Yıl kutlamaları ve uluslararası kardeş kulüp anlaşmalarıyla başarı dolu bir dönem yönetmiştir." },
    { period: "2018 - 2021", president: "Emre Gezgin", desc: "STK liderlerinin katılımıyla oluşan sinerji sonucunda kulübümüz, İzmir İl Kültür ve Turizm Müdürlüğü’nden “Farkındalık Ödülü” almış ve 2020’de “Dünyanın En İyi 2. Kulübü” seçilmiştir." },
    { period: "2021 - 2023", president: "Güner Güney", desc: "Dünya Kongresi ev sahipliği sürecini yöneterek İzmir'e eşsiz bir global prestij kazandırmıştır." },
    { period: "2024 - Günümüz", president: "Aydın Tokbaş", desc: "Sürdürülebilirlik ilkeleri çerçevesinde kulübün vizyoner projelerini başarıyla yürütmektedir." }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0A192F] font-sans selection:bg-[#0A192F] selection:text-white pb-0">
      <Header dict={dict} lang={lang} />

      {/* Hero / Title Section */}
      <section className="pt-40 pb-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <img src="/logo.png" alt="Skål International İzmir Logo" className="w-[300px] md:w-[400px] object-contain mb-8 mix-blend-multiply drop-shadow-sm" />
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
             Medeniyetlerin ve Turizmin Öncü Kenti
          </p>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-24 bg-[#FDFDFD]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8 font-light text-xl text-slate-600 leading-relaxed">
            <p>
              Farklı medeniyetlerin kuruluşuna ve gelişimine ön ayak olan tarihi, kültürel ve ekonomik dokusuyla İzmir; ülkemizin çok kültürlülüğünü yüzyıllar boyu temsil ederek Türkiye turizminin gelişimine her açıdan önderlik etmiştir.
            </p>
            <p>
              Tarihe meydan okuyan ihracat limanıyla yarı endüstriyel ürünlerini dünya limanlarına taşıma hüviyetine sahip olan kentimiz, kuruluşu 19. yüzyıla dayanan yabancı dilde eğitim veren kurumları sayesinde turizmden önce <strong>“dünya vatandaşı”</strong> kavramıyla tanışma şansına sahip olmuştur.
            </p>
            <p>
              <span className="text-[#0A192F] font-medium border-b-2 border-blue-600 pb-1">“Levanten”</span> kelimesinin dünyaya yayılmasına vesile olan şehrimiz; çok kültürlülüğü sosyal, kültürel ve ekonomik bağlamda dünya ile paylaşmış, farklı kültürlerle olan iletişim dostluğunu yüzyılları aşan bir birikimle sürdürmüştür.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-[#0A192F] text-white">
        <div className="container mx-auto px-6 md:px-12">
           <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center">Köklü Birikimin Sonuçları</h2>
           <div className="max-w-5xl mx-auto grid xl:grid-cols-2 gap-x-16 gap-y-12">
              {historyPillars.map((item, idx) => (
                 <div key={idx} className="flex gap-6 items-start group">
                    <div className="font-serif text-3xl font-bold text-blue-400 group-hover:text-white transition-colors duration-300 w-24 shrink-0">{item.year}</div>
                    <div className="text-blue-100/80 font-light leading-relaxed border-l border-blue-800 pl-6 group-hover:border-blue-400 transition-colors duration-300">
                       {item.desc}
                    </div>
                 </div>
              ))}
           </div>
           <p className="mt-20 max-w-3xl mx-auto text-center text-xl text-blue-200/60 font-light italic">
              "Dünyanın yedi harikasından birine ve UNESCO Dünya Miraslarına ev sahipliği yapan İzmir’de, Skål ruhunun bu denli kabul görmesi bir tesadüf değildir."
           </p>

           <div className="mt-16 max-w-4xl mx-auto">
             <p className="text-lg text-blue-100 font-light leading-relaxed mb-10">
               İzmir'in Efes gibi UNESCO miraslarına sahip zengin tarihi, kentin "Tarihi Liman Kenti" unvanıyla 2020'de geçici listeye girmesi ve Green Destinations gibi sürdürülebilir turizm hedefleri 2025-2028 sürecinde kentin kültürel ve tarihi kimliğini uluslararası arenada pekiştirecektir.
             </p>
             <h3 className="text-2xl font-serif text-white mb-6">İzmir'in UNESCO ve Turizm Gelişim Süreci</h3>
             <div className="space-y-6">
               <div className="bg-blue-900/40 p-6 md:p-8 rounded-2xl border border-blue-800">
                  <h4 className="text-xl font-bold text-yellow-400 mb-3">İzmir Tarihi Liman Kenti</h4>
                  <p className="text-blue-100/90 font-light leading-relaxed">Kemeraltı, Basmane ve çevresini kapsayan bölge, 2020 yılında UNESCO Dünya Mirası Geçici Listesi'ne girmiştir. Bu proje, Helenistik dönemden günümüze uzanan ticari mirası korumayı amaçlar.</p>
               </div>
               <div className="bg-blue-900/40 p-6 md:p-8 rounded-2xl border border-blue-800">
                  <h4 className="text-xl font-bold text-yellow-400 mb-3">UNESCO Mirasları</h4>
                  <p className="text-blue-100/90 font-light leading-relaxed">2015 yılında Efes Antik Kenti, Çukuriçi Höyük, Ayasuluk Tepesi ve Meryem Ana Evi UNESCO Dünya Mirası listesine girmiştir.</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* History & Founders */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
           <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3">
                 <h2 className="text-4xl font-serif text-[#0A192F] mb-6">Tarihçemiz</h2>
                 <p className="text-lg font-light text-slate-500 leading-relaxed">
                    Skål International İzmir Kulübü, 16 Mart 1966’da İzmir Kilim Hotel’de gerçekleşen Genel Kurul sonrası, vizyoner profesyonel turizmci tarafından kurulmuştur.
                 </p>
              </div>
              <div className="lg:w-2/3 bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center">
                 <h4 className="uppercase tracking-[0.2em] font-bold text-xs text-slate-400 mb-6">Kurucu Üyelerimiz</h4>
                 <div className="flex flex-wrap gap-4 text-xl font-serif text-[#0A192F]">
                    {["Josef Keşişyan", "Jean Zacharie", "Haluk Kilimci", "Erol Doktoroğlu", "Ergun Göksan", "Halis Temel", "Hüseyin Avni Sezer"].map((name, i) => (
                       <span key={i} className="bg-slate-50 px-5 py-2 rounded-full border border-slate-100">{name}</span>
                    ))}
                 </div>
                 <p className="mt-8 text-slate-500 font-light leading-relaxed">
                   Türkiye’de İstanbul ve Ankara’dan sonra kurulan <strong className="text-[#0A192F] font-medium">üçüncü Skål kulübü</strong> olma özelliğini taşıyan kulübümüzün ilk başkanı, dönemin İzmir İl Kültür ve Turizm Müdürü Hüseyin Avni Sezer’dir.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Milestones / Presidents */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
           <h2 className="text-4xl font-serif text-[#0A192F] mb-16 text-center">Kilometre Taşları ve Başkanlarımız</h2>
           <div className="max-w-4xl mx-auto space-y-12">
              {milestones.map((stone, idx) => (
                 <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 relative group">
                    <div className="md:w-1/4 pt-1">
                       <span className="font-bold tracking-widest text-slate-400 uppercase text-sm block mb-1">{stone.period}</span>
                       <span className="font-serif text-2xl text-[#0A192F]">{stone.president}</span>
                    </div>
                    <div className="md:w-3/4 relative">
                       {/* Line connector */}
                       <div className="absolute -left-6 top-2 bottom-0 w-px bg-slate-200 hidden md:block group-last:bg-transparent"></div>
                       {/* Dot */}
                       <div className="absolute -left-[27px] top-3 w-2 h-2 rounded-full bg-[#0A192F] hidden md:block shadow-[0_0_0_4px_white]"></div>
                       
                       <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-slate-600 font-light leading-relaxed shadow-sm transition-shadow group-hover:shadow-md">
                          {stone.desc}
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Current State & Awards */}
      <section className="py-24 bg-[#F3F6F8]">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
           
           <div className="space-y-12">
              <div>
                 <h3 className="text-3xl font-serif text-[#0A192F] mb-6">Bugünü ve Gücü</h3>
                 <p className="text-lg text-slate-600 font-light leading-relaxed">
                    Günümüzde 75 üyeden oluşan Skål International İzmir Kulübü, evrensel prensipleri yerel değerlerle buluşturarak kent turizmine yön veren güçlü bir aile ve iletişim ağı yaratmaya devam etmektedir.
                 </p>
              </div>

              <div>
                 <h3 className="text-2xl font-serif text-[#0A192F] mb-6">Çok Kültürlü Yapı</h3>
                 <p className="text-lg text-slate-600 font-light leading-relaxed mb-4 border-l-2 border-blue-600 pl-4">
                    Üyelerimiz arasında konuşulan diller;
                 </p>
                 <div className="flex flex-wrap gap-2">
                    {["İngilizce", "Fransızca", "Almanca", "İtalyanca", "İspanyolca", "Portekizce", "Yunanca", "İbranice", "Arapça"].map(lang => (
                       <span key={lang} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-semibold tracking-wider text-slate-600">{lang}</span>
                    ))}
                 </div>
              </div>
           </div>

           <div className="space-y-12">
              <div>
                 <h3 className="text-2xl font-serif text-[#0A192F] mb-6">Faaliyet Alanları</h3>
                 <ul className="space-y-4">
                    {[
                      "Şehir, Resort ve Butik Otelcilik",
                      "Incoming, Outgoing ve Ingoing Seyahat Acentaları",
                      "Sağlık Turizmi, Agro-Turizm ve Eko-Turizm",
                      "Müzecilik, Ulaşım, Rent a Car ve Catering",
                      "Turizm Yazarlığı, Blog Yazarlığı ve Danışmanlık"
                    ].map((area, i) => (
                       <li key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                          <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                          <span className="text-slate-600 font-medium">{area}</span>
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="bg-[#0A192F] p-10 rounded-3xl shadow-xl text-white">
                 <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                   Ödüllerimiz ve Etkimiz
                 </h3>
                 <ul className="space-y-6">
                    <li className="flex gap-4 items-start">
                       <span className="font-bold text-yellow-400 mt-1 shrink-0 px-2 border border-yellow-400/30 rounded">1995</span>
                       <span className="text-blue-100/90 font-light">İzmir Kulübü 1991’de Bodrum, 1995 yılında da Kuşadası kulüplerinin kurucu sponsoru olmuştur.</span>
                    </li>
                    <li className="flex gap-4 items-start">
                       <span className="font-bold text-yellow-400 mt-1 shrink-0 px-2 border border-yellow-400/30 rounded">2019</span>
                       <span className="text-blue-100/90 font-light">İzmir turizmine katkılarımızdan dolayı Artemis Farkındalık Onur Ödülü'nü alan ilk STK olduk.</span>
                    </li>
                    <li className="flex gap-4 items-start">
                       <span className="font-bold text-yellow-400 mt-1 shrink-0 px-2 border border-yellow-400/30 rounded">2020</span>
                       <span className="text-blue-100/90 font-light">7 kıta ve 103 ülkeden 19 rakip kulübü geride bırakarak <strong className="text-white">“Dünyanın En İyi 2. Skal Kulübü”</strong> seçildik.</span>
                    </li>
                 </ul>
              </div>
            </div>
        </div>

        {/* Added sections (moved out of grid to span full width layout correctly) */}
        <div className="container mx-auto px-6 md:px-12 mt-20 pb-12">
           <div className="pt-8 space-y-16 max-w-5xl mx-auto">
              <div>
                 <h3 className="text-3xl font-serif text-[#0A192F] mb-6">Skål International İzmir'in Turizm Vizyonu</h3>
                 <p className="text-lg text-slate-600 font-light leading-relaxed">
                    Sahip olduğu derin tarihsel doku, kültürel mirası ve sürdürülebilir turizm çalışmaları sayesinde bünyesinde barındırdığı tüm paydaş STK temsilcileri ile birlikte yarattığı sinerji ile İzmir'i uluslararası turizmin odak noktası haline getirmek.
                 </p>
              </div>
              
              <div>
                 <h3 className="text-3xl font-serif text-[#0A192F] mb-6">Dünya Kongresi</h3>
                 <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                    <p>Skål International Dünya Kongresi her sene dünyanın farklı bir destinasyonunda bir kulübün ev sahipliğinde, birliğe üye turizm profesyonellerinin katılımıyla gerçekleşmektedir. Bu üst segment etkinliğin ev sahibi şehir üzerindeki etkisi, klasik bir kongrenin çok ötesine geçer.</p>
                    <p>Özellikle MICE ve destinasyon markalaşması açısından “katalizör” rolü oynayan organizasyon, ev sahibi şehre kısa vadede yüksek harcama yapan uluslararası turizm profesyonelleri sayesinde ekonomik katkı ve güçlü bir global tanıtım sağlar. Uzun vadede ise şehir MICE, gastronomi, kültür ve deneyim turizmi alanları başta olmak üzere tüm segmentler için yeni iş birlikleri, tur paketleri ve sürdürülebilir turizm talebi yaratır.</p>
                    <p>Skål International İzmir Kulübü, ilk önce 2017 yılında bu prestijli organizasyonun ev sahipliği için Berrin Uşkay liderliğinde aday olmuş, ancak yarışı Hindistan'ın Haydarabad kazanmıştır, bu tecrübe ile çalışmalarına azim ile devam eden İzmir, 2022'de hayalini gerçekleştirerek, Güner Güney başkanlığındaki yönetim kurulunun özverili çalışmalarıyla Bükreş (Romanya), St. Petersburg (Rusya) ve Kalküta (Hindistan) şehirlerini geçip, büyük bir başarı göstererek bu prestijli kongreyi 1993 İstanbul ve 2007 Antalya kongrelerinden sonra Türkiye'de üçüncü kez, İzmir'de ise ilk kez 2024 yılında düzenlemiştir. Bu etkinliğin yaratmış olduğu etkileşim, kentin tanıtımı ve turizmi için önemli bir atağı tetiklemiştir.</p>
                 </div>
              </div>

              <div>
                 <h3 className="text-3xl font-serif text-[#0A192F] mb-6">Twinning Clubs</h3>
                 <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                    <p>Skål International Twinning Clubs (Kardeş Kulüp) uygulaması, farklı ülkelerdeki Skål kulüplerinin resmi olarak eşleşerek uzun vadeli iş birliği kurmasıdır. Bu eşleşmeler sayesinde kulüpler; bilgi paylaşımı, ortak etkinlikler, karşılıklı ziyaretler ve ticari fırsatlar geliştirir.</p>
                    <p>Bu sayede kardeş kulüpler arasında uluslararası network ve iş geliştirme hızlanır, destinasyonlar arasında turizm akışı ve tanıtım artar, üyeler için somut iş fırsatlarına dönüşen ilişkiler oluşur. Kısaca Twinning, Skål hareketinin “Doing Business Among Friendship” yaklaşımını en somut hale getiren araçlardan biridir.</p>
                    <p className="font-medium text-[#0A192F]">Skål International İzmir kulübü, şu ana kadar Skål International Atlanta, Skål International Roma ve Skål International Cape Town kulüpleri ile twinning (kardeş kulüp) anlaşması imzalamıştır.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

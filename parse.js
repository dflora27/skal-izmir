const fs = require('fs');

const data = `AHMET GÜNER GÜNEY

guner.guney@ramadaencoreizmir.com / guner.guney@gcghm.com

0 530 966 93 62

AHMET KİLİMCİ

akilimci@izmirpalas.com.tr

0 541 484 53 42

AHMET OĞUZ ÖZKARDEŞ

oguz.ozkardes@viltur.com

0 532 314 88 75

AKIN YORULMAZ

akin.yorulmaz@bta.com.tr

0 530 555 91 79

ALARA CANPOLAT

alaracanpolat@icloud.com

0 546 265 61 90

ALİ ACUNDAŞ

alicunda@hotmail.com

0 532 213 78 97

ALİ İHSAN PAÇACI

alipacaci@ortyhotels.com

0 555 593 53 79

ALİ RIZA ÇANDARLI

ali@clarostour.com

0 532 412 77 19

ALİ YARAMIŞLI

info@roverturizm.com.tr

0 532 385 28 78

ARZU MÜMTAZ BASTIYALI

arzu.mumtaz@bastiyali.com

0 532 235 12 44

AYÇA KESİCİ

aycahansen@yahoo.uk

0 532 244 12 54

AYDIN TOKBAŞ

aydntokbas@gmail.com

0 505 862 07 85

BERRİN ÖZÜTÜRK ŞENLİ

berrin.ozuturk@aryumturizm.com.tr

0 533 295 10 09

BERRİN UŞKAY

berusk@gmail.com

0 532 363 75 38

BİLGE DURDU

bilgedurdu@hotelphokaia.com

0 533 583 24 38

CEM ÇANDARLI

cem@claros.com.tr

0 532 601 02 64

CEYLIN KİLİMCİ

Info@izmirpalas.com.tr

0 531 610 32 23

ÇETİN YANIKSAZ

cetin@redandmore.org

0 533 059 32 35

DAMLA ÜNGÜN

damlaungun@outlook.com

0 505 996 35 55

DENİZ TAFTAF

deniztaftaf@dennisstour.com.tr

0 533 494 01 46

DENİZ TOKGUN

gm@mitteporthotel.com.tr

0 532 725 09 80

DERIN KİLİMCİ

Info@izmirpalas.com.tr

0 531 610 32 22

DİDEM ERSOY

didem.ersoy@accor.com

0 536 725 21 74

DURSUN BÜLENT TERCAN

bulent@terbay.com.tr

0 532 316 63 56

EBRU TUĞGAN

ebru.tuggan@ilicahotel.com

0 530 553 33 33

EGE MERİÇ

egem@interpointdmc.com

0 534 213 26 76

ELİF AKŞAHİN

elif.aksahin@izmirfair.com.tr

0 531 250 64 27

EMRE GEZGİN

egezgin@vispotravel.com

0 532 397 97 03

ENGİN CEYLAN

enginceylan@cesatur.com

0 535 727 96 85

ERAY ŞOHOĞLU

eraysohoglu@hotmail.com

0 532 457 11 00

ERDEN DUYGU

erdenduygu@yahoo.com

0 532 231 16 05

EVREN MERİH BOZOĞLAN

merih.bozpglan@swissotel.com

0 530 609 13 86

FARUK GÜNLÜ

faruk.gunlu@teosmarina.com

0 549 795 59 56

GAMZE GÜLÇAĞ YENİ ÖZMERMER

gulcag.ozmermer@gcghm.com

0 532 571 41 84

GÖKÇE YAY

gokceyay@hotmail.com

0 539 652 06 57

GÖZDE ÇEVİKER ÇINAR

gozdeceviker@gmail.com

0 532 468 55 90

GÖZDE KAYDIRAK

Gozde.kaydirak@arkas.com

0 532 341 30 21

GÜLPER ERGUN

gulperergun35@gmail.com

0 532 169 14 49

HALİSE GÜNEY LEVİ

glevi@gpctravel.com

0 532 273 09 05

HASAN ONUR TÜRKAY

onur@redandmore.org

0 505 671 16 45

HÜSNÜ RIZA ELİBOL

riza.elibol@swissotel.com

0 530 609 13 00

İBRAHIM MERTAN KÖLE

mertan@gmail.com

0 532 294 21 15

İBRAHİM DEMİRALP

info@demiralptur.com

0 537 485 47 93

İSMAİL CENK ERONAT

cenk@tutkutours.com

0 532 356 09 66

KEMAL BİNİCİ

info@huzurlaotel.com

0 554 617 95 74

KIVANÇ MERİÇ

kivancm@izmirtours.com

0 532 262 38 65

LEVENT KÖSTEM

drkostem@gmail.com

0 532 487 09 50

LEVENT ORAL

info@tutkutours.com

0 532 296 69 21

MACİT ŞAŞZADE

macit.saszade@gmail.com

0 532 262 50 72

MAKBULE BEYENC

info@grandcornerhotel.com

0 533 730 59 46

MEHMET KALAY

mehmet.kalay@conradhotels.com

00 973 3361 9376

MEHMET TANJU İŞLER

mehmetisler@hotelphokaia.com

0 532 690 53 18

MEHTAP İŞSEVER (ZEYBEK)

mehtap@hotelzeybek.com

0 532 331 99 07

MİNE GÜNEŞ KAYA

mine.gguness@gmail.com

0 533 567 34 00

MUHAMMET AKİF ALSHARO

akif.alsharo@akahukuk.org

0 532 174 69 04

MURAT CAN SAKARYA

muratcan.sakarya@spiloshotel.com

0 554 142 40 35

MURAT TOLGA AKIN

murattolgaakin@yahoo.com

0 532 709 00 10

MUSTAFA ERYAMAN

eryaman@cesmealbanohotel.com

0 532 311 64 29

MUZAFFER TAĞIL

muzaffertagil@gmail.com

0 533 489 04 17

ORHAN BELGE

orhan.belge@boyalikbeachcesme.com

0 533 514 56 90

OSMAN TOLGA GENCER

tolga@etctur.com

0 532 294 99 84

OZANCAN YILDIRIM

ozancanyildirim@gmail.com

0 533 167 99 97

PELİN OMUROĞLU BALCIOĞLU

p.omuroglu@gmail.com

0 532 337 84 24

RABİA BAKKAL YANIK

rabia.bakkal@talyabilisim.net

0 543 238 18 07

SELİN AVŞAR İNANLI

selin.avsar@radissonblu.com

0 533 139 49 52

SİNEM KURTURAL KARAKUNDAKOĞLU

snmkurtural@gmail.com

0 542 217 03 75

ŞENSAL BİÇER

sensalbicer@hotmail.com

0 532 355 71 85

TAYLAN ÖZCAN

taylan.ozcan@hotmail.com

0 532 524 88 05

TEZCAN ÜNAL

unal@tonwelt.com

0 507 133 37 01

VELİ TOLGA KAHRAMAN

velitolgakahraman@gmail.com

0 534 925 25 72

YILMAZ ŞENLİ

yilmaz.senli@primecar.com.tr

0 533 295 10 08

YUSUF CAN DEMİR

can.demir@ramadaencoreizmir.com / can.demir@gcghm.com

0 530 781 12 42

ZALİHA YASEMİN ULUKARTAL

yasemin@yasossuites.com

0 532 292 25 55

ZEKERİYA YILDIRIM

zkryyildirim@gmail.com

0 532 517 45 45

ZÜLKÜF MERMUT

zmermut@yahoo.com

0 532 411 40 17`

const rawLines = data.split('\n').map(l => l.trim()).filter(l => l.length > 0);
let membersArray = [];
for (let i = 0; i < rawLines.length; i += 3) {
  let name = rawLines[i];
  let email = rawLines[i + 1] || '';
  let phone = rawLines[i + 2] || '';
  if (name) {
    membersArray.push({
      name,
      id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Placeholder_image.svg/800px-Placeholder_image.svg.png',
      email,
      phone
    });
  }
}

// Sort alphabetically by name using Turkish locale
membersArray.sort((a, b) => a.name.localeCompare(b.name, 'tr'));

const tsFileContent = `export interface Member {
  id: string;
  name: string;
  photo: string;
  company?: string;
  role?: string;
  categories: string[];
  contact: {
    email: string;
    phone: string;
    address?: string;
    businessPhone?: string;
    businessFax?: string;
    website?: string;
  };
  desc?: string;
  gallery?: string[];
}

export const members: Member[] = ${JSON.stringify(membersArray.map(m => ({
  id: m.id,
  name: m.name,
  photo: m.photo,
  company: "Skål International İzmir",
  role: "Üye",
  categories: ["Seyahat", "Turizm"],
  contact: {
    email: m.email,
    phone: m.phone,
    address: "-",
    businessPhone: "-",
    businessFax: "-",
    website: "-"
  },
  desc: "Skål International İzmir üyesi.",
  gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Placeholder_image.svg/800px-Placeholder_image.svg.png"]
})), null, 2)};
`;

fs.writeFileSync('src/data/members.ts', tsFileContent);
console.log('Generated src/data/members.ts successfully with ' + membersArray.length + ' members.');

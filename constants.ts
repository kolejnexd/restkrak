import { Colors, MenuItem, DeliveryPlatform, GalleryItem } from './types';

export const COLORS: Colors = {
  bg: '#F6F3EE',
  altBg: '#EEE9E2',
  surface: '#FFFFFF',
  borderSoft: '#E2DBD2',
  borderStrong: '#C9C1B6',
  ink: '#141312',
  muted: '#5F5B55',
  primaryRed: '#C61F2D',
  secondaryBlue: '#1E5BB8',
  gold: '#D6A61D',
  green: '#2C6A45',
  cyanGlow: '#00CED1',
  frameBlack: '#0F1011',
  footerDark: '#2A1D1B',
};

export const MENU_ITEMS: MenuItem[] = [
  // Zupy
  { id: 'z1', category: 'Zupy', name: 'Żurek na zakwasie', description: 'Tradycyjny żurek z jajkiem i kiełbasą', price: '22 zł', tags: ['klasyk'] },
  { id: 'z2', category: 'Zupy', name: 'Domowy Rosół', description: 'Z makaronem domowym', price: '18 zł' },
  { id: 'z3', category: 'Zupy', name: 'Zupa Pomidorowa', description: 'Z ryżem lub makaronem', price: '18 zł' },
  { id: 'z4', category: 'Zupy', name: 'Krupnik', description: 'Gęsty, na żeberkach', price: '19 zł' },
  { id: 'z5', category: 'Zupy', name: 'Zupa Ogórkowa', description: 'Na wędzoneczce', price: '19 zł' },

  // Dania Główne
  { id: 'd1', category: 'Dania główne', name: 'Kotlet Schabowy', description: 'Z ziemniakami i kapustą zasmażaną', price: '36 zł', tags: ['polecane'] },
  { id: 'd2', category: 'Dania główne', name: 'De Volaille', description: 'Z masełkiem i pietruszką, frytki, surówka', price: '38 zł' },
  { id: 'd3', category: 'Dania główne', name: 'Kotlet z Kurczaka', description: 'Panierowany, ziemniaki, zestaw surówek', price: '34 zł' },
  { id: 'd4', category: 'Dania główne', name: 'Kotlet Mielony', description: 'Z buraczkami i puree', price: '32 zł' },
  { id: 'd5', category: 'Dania główne', name: 'Golonko Pieczone', description: 'Podawane z chrzanem i musztardą (wg wagi)', price: 'wg wagi', tags: ['klasyk'] },
  { id: 'd6', category: 'Dania główne', name: 'Sztuka Mięsa w Sosie Chrzanowym', description: 'Gotowana wołowina, ziemniaki', price: '39 zł' },
  { id: 'd7', category: 'Dania główne', name: 'Indyk w Sosie Grzybowym', description: 'Delikatne fileciki w sosie śmietanowym', price: '38 zł' },
  { id: 'd8', category: 'Dania główne', name: 'Gulasz', description: 'Wieprzowy, podawany z kaszą lub plackami', price: '34 zł' },
  { id: 'd9', category: 'Dania główne', name: 'Placek po Węgiersku', description: 'Chrupiący placek ziemniaczany z gulaszem', price: '42 zł', tags: ['polecane'] },
  { id: 'd10', category: 'Dania główne', name: 'Gołąbki', description: 'W sosie pomidorowym (2 szt.)', price: '30 zł' },
  { id: 'd11', category: 'Dania główne', name: 'Kiełbasa Smażona', description: 'Z cebulką', price: '26 zł' },
  { id: 'd12', category: 'Dania główne', name: 'Czulent', description: 'Tradycyjne danie żydowskie z fasoli i wołowiny', price: '44 zł', tags: ['klasyk'] },

  // Pierogi
  { id: 'p1', category: 'Pierogi i Naleśniki', name: 'Pierogi z Mięsem', description: 'Okraszone cebulką (10 szt.)', price: '28 zł', tags: ['polecane'] },
  { id: 'p2', category: 'Pierogi i Naleśniki', name: 'Pierogi Ruskie', description: 'Z twarogiem i ziemniakami (10 szt.)', price: '26 zł', tags: ['wegetariańskie'] },
  { id: 'p3', category: 'Pierogi i Naleśniki', name: 'Pierogi z Borówkami', description: 'Ze śmietaną i cukrem (sezonowo)', price: '30 zł' },
  { id: 'p4', category: 'Pierogi i Naleśniki', name: 'Naleśniki z Serem', description: 'Na słodko z twarogiem (2 szt.)', price: '24 zł' },
  { id: 'p5', category: 'Pierogi i Naleśniki', name: 'Naleśniki ze Szpinakiem', description: 'Z sosem czosnkowym (2 szt.)', price: '26 zł', tags: ['wegetariańskie'] },

  // Dodatki
  { id: 's1', category: 'Dodatki i Surówki', name: 'Zestaw Surówek', description: 'Świeże surówki sezonowe', price: '12 zł' },
  { id: 's2', category: 'Dodatki i Surówki', name: 'Dodatki na Ciepło', description: 'Kapusta zasmażana, buraczki, marchewka z groszkiem', price: '12 zł' },
];

export const DELIVERY_PLATFORMS: DeliveryPlatform[] = [
  { name: 'Pyszne.pl', url: 'https://www.pyszne.pl/menu/krakoski', color: '#FF8000', textColor: '#FFFFFF' },
  { name: 'Uber Eats', url: 'https://www.ubereats.com/pl/store/krakoski/6LMz3hfKTeKnuf34HI0Q9Q', color: '#06C167', textColor: '#FFFFFF' },
  { name: 'Wolt', url: 'https://wolt.com/pl/pol/krakow/restaurant/krakoski-krk', color: '#009DE0', textColor: '#FFFFFF' },
  { name: 'Glovo', url: 'https://glovoapp.com/en/pl/krakow/stores/krakoski-kra', color: '#FFC244', textColor: '#141312' },
];

export const TGTG_LINK = 'https://www.toogoodtogo.com/pl/find/krakow/restauracjakrakoski/meal/paczkaniespodzianka40-133009396041498304';
export const MAP_LINK = 'https://maps.app.goo.gl/eG1PMJyCHuw9bYFb8';
export const FACEBOOK_LINK = 'https://www.facebook.com/p/Restauracja-Krakoski-61564021922040/';
export const INSTAGRAM_LINK = 'https://www.instagram.com/restauracja_krakoski/';
export const PHONE_DISPLAY = '732 924 034';
export const PHONE_HREF = 'tel:732924034';
export const EMAIL_DISPLAY = 'kontakt@kazimierz-krakoski.pl';
export const EMAIL_HREF = 'mailto:kontakt@kazimierz-krakoski.pl';

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 'g1', src: 'https://picsum.photos/id/431/800/600', alt: 'Wnętrze restauracji z drewnianymi stołami', category: 'interior', span: true },
  { id: 'g2', src: 'https://picsum.photos/id/292/600/800', alt: 'Pierogi na talerzu', category: 'food' },
  { id: 'g3', src: 'https://picsum.photos/id/225/600/800', alt: 'Detale strojów ludowych w ramach', category: 'detail' },
  { id: 'g4', src: 'https://picsum.photos/id/493/800/600', alt: 'Kotlet schabowy z ziemniakami', category: 'food' },
  { id: 'g5', src: 'https://picsum.photos/id/1060/600/800', alt: 'Bar i obsługa', category: 'interior' },
  { id: 'g6', src: 'https://picsum.photos/id/365/800/600', alt: 'Kolorowe wstążki dekoracyjne', category: 'detail', span: true },
];
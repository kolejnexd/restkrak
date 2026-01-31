export const CATEGORIES = ["Wszystkie", "Śniadania", "Zupy", "Dania Główne", "Pierogi i Naleśniki", "Dodatki", "Desery", "Napoje", "Alkohole"];

export const MENU_ITEMS = [
    // Śniadania
    { id: 101, name: "Jajecznica z 2 składnikami", description: "Na maśle (15 zł), z bekonem (17 zł) lub szynką (17 zł). Opcja: cebula/pomidor (+1 zł).", price: "od 15 zł", category: "Śniadania", tags: ["Klasyk"] },
    { id: 102, name: "Jajka sadzone z 2 składnikami", description: "Na maśle (15 zł), z bekonem (17 zł) lub szynką (17 zł). Opcja: cebula/pomidor (+1 zł).", price: "od 15 zł", category: "Śniadania", tags: [] },
    { id: 103, name: "Omlet na słono z 2 dodatkami", description: "Z bekonem (21 zł) lub szynką (21 zł). Opcja: cebula/pomidor (+1 zł).", price: "21 zł", category: "Śniadania", tags: [] },
    { id: 104, name: "Talerz śniadaniowy", description: "Boczek/szynka, ser, frankfurterka, pomidor, ogórek, pieczywo, masło, jajko sadzone, twarożek ze szczypiorkiem.", price: "29 zł", category: "Śniadania", tags: ["Polecane", "Duża Porcja"] },
    { id: 105, name: "Szakszuka", description: "Jajka w aromatycznym sosie pomidorowym.", price: "27 zł", category: "Śniadania", tags: ["Na ciepło"] },
    { id: 106, name: "Tosty z szynką i serem", description: "Ciepłe, chrupiące tosty.", price: "25 zł", category: "Śniadania", tags: [] },

    // Zupy
    { id: 201, name: "Żurek Staropolski", description: "Na zakwasie. Warianty: z jajkiem (20 zł), z ziemniakami (20 zł), w chlebie (26 zł).", price: "od 17 zł", category: "Zupy", tags: ["Bestseller"] },
    { id: 202, name: "Barszcz Czerwony", description: "Czysty (13 zł), z jajkiem (16 zł).", price: "od 13 zł", category: "Zupy", tags: ["Wege opcja"] },
    { id: 203, name: "Barszcz z Uszkami / Kołdunami", description: "Z uszkami (grzybowy) lub kołdunami (mięsny) - 22 zł.", price: "22 zł", category: "Zupy", tags: ["Klasyk"] },
    { id: 204, name: "Pomidorowa z lanym ciastem", description: "Tradycyjna zupa pomidorowa.", price: "16 zł", category: "Zupy", tags: [] },
    { id: 205, name: "Ogórkowa z ziemniakami", description: "Kwaśna, aromatyczna zupa.", price: "16 zł", category: "Zupy", tags: [] },
    { id: 206, name: "Rosół", description: "Klasyczny rosół drobiowy.", price: "18 zł", category: "Zupy", tags: ["Lekkostrawne"] },

    // Dania Główne
    { id: 301, name: "Kotlet schabowy", description: "Na smalcu (27 zł) lub z czosnkiem (28 zł).", price: "od 27 zł", category: "Dania Główne", tags: ["Klasyk"] },
    { id: 302, name: "Kotlet z kurczaka", description: "Panierowana pierś z kurczaka.", price: "28 zł", category: "Dania Główne", tags: [] },
    { id: 303, name: "Kotlet mielony", description: "Klasyczny, domowy kotlet.", price: "26 zł", category: "Dania Główne", tags: [] },
    { id: 304, name: "Devolay", description: "Kotlet drobiowy z masłem w środku.", price: "30 zł", category: "Dania Główne", tags: ["Polecane"] },
    { id: 305, name: "Gołąbki z mięsem i ryżem", description: "W sosie pomidorowym.", price: "35 zł", category: "Dania Główne", tags: [] },
    { id: 306, name: "Filet z ryby", description: "Delikatny filet rybny w panierce.", price: "27 zł", category: "Dania Główne", tags: [] },
    { id: 307, name: "Bigos z pieczywem", description: "Kapusta z mięsem i boczkiem.", price: "28 zł", category: "Dania Główne", tags: ["Polskie Smaki"] },
    { id: 308, name: "Placki ziemniaczane", description: "Klasyczne (19 zł), ze śmietaną (21 zł), z gulaszem (32 zł).", price: "od 19 zł", category: "Dania Główne", tags: ["Wege opcja"] },
    { id: 309, name: "Czulent z pieczywem", description: "Gulasz wołowy z warzywami w stylu żydowskim.", price: "32 zł", category: "Dania Główne", tags: ["Specjalność"] },
    { id: 310, name: "Kiełbasa z cebulką i pieczywem", description: "Smażona kiełbasa.", price: "25 zł", category: "Dania Główne", tags: [] },
    { id: 311, name: "Indyk z borowikami", description: "W sosie grzybowym.", price: "31 zł", category: "Dania Główne", tags: ["Polecane"] },
    { id: 312, name: "Gulasz", description: "Klasyczny gulasz wieprzowy.", price: "29 zł", category: "Dania Główne", tags: [] },
    { id: 313, name: "Pasztet z kaczki (Szef Poleca)", description: "Z sosem żurawinowym i chrzanowym.", price: "22 zł", category: "Dania Główne", tags: ["Szef Poleca"] },
    { id: 314, name: "Rolada wieprzowa (Szef Poleca)", description: "Z nadzieniem pieczarkowo-serowym.", price: "30 zł", category: "Dania Główne", tags: ["Szef Poleca"] },
    { id: 315, name: "Żeberka wieprzowe BBQ (Szef Poleca)", description: "W sosie BBQ i miodzie, z frytkami.", price: "49 zł", category: "Dania Główne", tags: ["Szef Poleca", "Premium"] },

    // Pierogi i Naleśniki
    { id: 401, name: "Pierogi z mięsem", description: "Wyrazisty farsz mięsny.", price: "30 zł", category: "Pierogi i Naleśniki", tags: [] },
    { id: 402, name: "Pierogi z kapustą i grzybami", description: "Tradycyjny farsz.", price: "29 zł", category: "Pierogi i Naleśniki", tags: ["Wege"] },
    { id: 403, name: "Pierogi ruskie", description: "Ziemniaki i twaróg.", price: "28 zł", category: "Pierogi i Naleśniki", tags: ["Bestseller", "Wege"] },
    { id: 404, name: "Pierogi z serem na słodko", description: "Z twarogiem na słodko.", price: "28 zł", category: "Pierogi i Naleśniki", tags: ["Słodkie"] },
    { id: 405, name: "Pierogi z owocami", description: "Truskawka lub borówka.", price: "29 zł", category: "Pierogi i Naleśniki", tags: ["Słodkie"] },
    { id: 406, name: "Naleśniki z serem na słodko", description: "Z twarogiem.", price: "25 zł", category: "Pierogi i Naleśniki", tags: ["Słodkie"] },
    { id: 407, name: "Naleśniki ze szpinakiem", description: "Wytrawne.", price: "25 zł", category: "Pierogi i Naleśniki", tags: ["Wege"] },

    // Dodatki
    { id: 501, name: "Frytki", description: "Porcja frytek.", price: "13 zł", category: "Dodatki", tags: [] },
    { id: 502, name: "Ziemniaki / Ryż / Kasza gryczana", description: "Do wyboru.", price: "8 zł", category: "Dodatki", tags: [] },
    { id: 503, name: "Kopytka", description: "Domowe.", price: "12 zł", category: "Dodatki", tags: [] },
    { id: 504, name: "Bufet sałatkowy", description: "Zestaw surówek.", price: "13 zł", category: "Dodatki", tags: ["Zdrowe"] },
    { id: 505, name: "Buraki zasmażane", description: "Na ciepło.", price: "10 zł", category: "Dodatki", tags: [] },
    { id: 506, name: "Marchewka z groszkiem", description: "Gotowana.", price: "10 zł", category: "Dodatki", tags: [] },
    { id: 507, name: "Kapusta zasmażana", description: "Na ciepło.", price: "10 zł", category: "Dodatki", tags: [] },
    { id: 508, name: "Szpinak", description: "Na ciepło.", price: "11 zł", category: "Dodatki", tags: [] },
    { id: 509, name: "Ogórek kiszony", description: "2 sztuki.", price: "10 zł", category: "Dodatki", tags: [] },
    { id: 510, name: "Sosy", description: "Pomidorowy, Grzybowy (8 zł). Ketchup, Musztarda, Majonez itp. (5 zł).", price: "od 5 zł", category: "Dodatki", tags: [] },

    // Desery
    { id: 601, name: "Pascha sernik", description: "Kremowy sernik.", price: "30 zł", category: "Desery", tags: ["Polecane"] },
    { id: 602, name: "Orzechowe ciasto", description: "Intensywne.", price: "22 zł", category: "Desery", tags: [] },
    { id: 603, name: "Szarlotka na ciepło", description: "Z gałką lodów i bitą śmietaną.", price: "21 zł", category: "Desery", tags: ["Bestseller"] },
    { id: 604, name: "Lody waniliowe z owocami", description: "Z bitą śmietaną.", price: "18 zł", category: "Desery", tags: [] },

    // Napoje
    { id: 701, name: "Kawa", description: "Espresso (10), Cappuccino (15), Latte (15), Flat White (14).", price: "od 10 zł", category: "Napoje", tags: [] },
    { id: 702, name: "Herbata", description: "Czarna, Zielona, Owocowa, Miętowa (10 zł). Zimowa (15 zł).", price: "od 10 zł", category: "Napoje", tags: [] },
    { id: 703, name: "Napoje zimne", description: "Pepsi, Mirinda, 7up, Soki (10 zł).", price: "10 zł", category: "Napoje", tags: [] },
    { id: 704, name: "Kompot domowy", description: "Szklanka.", price: "10 zł", category: "Napoje", tags: ["Domowe"] },
    { id: 705, name: "Lemoniada", description: "Szklanka (10 zł), Karafka 1L (30 zł).", price: "od 10 zł", category: "Napoje", tags: [] },
    { id: 706, name: "Woda", description: "Szklanka (10 zł), Karafka (20 zł).", price: "od 10 zł", category: "Napoje", tags: [] },

    // Alkohole
    { id: 801, name: "Piwo Żywiec", description: "0.5L (15 zł), Białe 0.5L (16 zł), Porter (16 zł), Free (13 zł).", price: "od 13 zł", category: "Alkohole", tags: [] },
    { id: 802, name: "Wino", description: "Białe / Czerwone.", price: "20 zł", category: "Alkohole", tags: [] },
    { id: 803, name: "Grzaniec Galicyjski", description: "Na ciepło.", price: "15 zł", category: "Alkohole", tags: ["Sezonowe"] },
    { id: 804, name: "Prossecco", description: "Kieliszek.", price: "22 zł", category: "Alkohole", tags: [] },
];

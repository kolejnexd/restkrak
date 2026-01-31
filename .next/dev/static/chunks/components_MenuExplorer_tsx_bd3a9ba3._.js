(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/MenuExplorer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuExplorer",
    ()=>MenuExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const CATEGORIES = [
    "Wszystkie",
    "Śniadania",
    "Zupy",
    "Dania Główne",
    "Pierogi i Naleśniki",
    "Dodatki",
    "Desery",
    "Napoje",
    "Alkohole"
];
const MENU_ITEMS = [
    // Śniadania
    {
        id: 101,
        name: "Jajecznica z 2 składnikami",
        description: "Na maśle (15 zł), z bekonem (17 zł) lub szynką (17 zł). Opcja: cebula/pomidor (+1 zł).",
        price: "od 15 zł",
        category: "Śniadania",
        tags: [
            "Klasyk"
        ]
    },
    {
        id: 102,
        name: "Jajka sadzone z 2 składnikami",
        description: "Na maśle (15 zł), z bekonem (17 zł) lub szynką (17 zł). Opcja: cebula/pomidor (+1 zł).",
        price: "od 15 zł",
        category: "Śniadania",
        tags: []
    },
    {
        id: 103,
        name: "Omlet na słono z 2 dodatkami",
        description: "Z bekonem (21 zł) lub szynką (21 zł). Opcja: cebula/pomidor (+1 zł).",
        price: "21 zł",
        category: "Śniadania",
        tags: []
    },
    {
        id: 104,
        name: "Talerz śniadaniowy",
        description: "Boczek/szynka, ser, frankfurterka, pomidor, ogórek, pieczywo, masło, jajko sadzone, twarożek ze szczypiorkiem.",
        price: "29 zł",
        category: "Śniadania",
        tags: [
            "Polecane",
            "Duża Porcja"
        ]
    },
    {
        id: 105,
        name: "Szakszuka",
        description: "Jajka w aromatycznym sosie pomidorowym.",
        price: "27 zł",
        category: "Śniadania",
        tags: [
            "Na ciepło"
        ]
    },
    {
        id: 106,
        name: "Tosty z szynką i serem",
        description: "Ciepłe, chrupiące tosty.",
        price: "25 zł",
        category: "Śniadania",
        tags: []
    },
    // Zupy
    {
        id: 201,
        name: "Żurek Staropolski",
        description: "Na zakwasie. Warianty: z jajkiem (20 zł), z ziemniakami (20 zł), w chlebie (26 zł).",
        price: "od 17 zł",
        category: "Zupy",
        tags: [
            "Bestseller"
        ]
    },
    {
        id: 202,
        name: "Barszcz Czerwony",
        description: "Czysty (13 zł), z jajkiem (16 zł).",
        price: "od 13 zł",
        category: "Zupy",
        tags: [
            "Wege opcja"
        ]
    },
    {
        id: 203,
        name: "Barszcz z Uszkami / Kołdunami",
        description: "Z uszkami (grzybowy) lub kołdunami (mięsny) - 22 zł.",
        price: "22 zł",
        category: "Zupy",
        tags: [
            "Klasyk"
        ]
    },
    {
        id: 204,
        name: "Pomidorowa z lanym ciastem",
        description: "Tradycyjna zupa pomidorowa.",
        price: "16 zł",
        category: "Zupy",
        tags: []
    },
    {
        id: 205,
        name: "Ogórkowa z ziemniakami",
        description: "Kwaśna, aromatyczna zupa.",
        price: "16 zł",
        category: "Zupy",
        tags: []
    },
    {
        id: 206,
        name: "Rosół",
        description: "Klasyczny rosół drobiowy.",
        price: "18 zł",
        category: "Zupy",
        tags: [
            "Lekkostrawne"
        ]
    },
    // Dania Główne
    {
        id: 301,
        name: "Kotlet schabowy",
        description: "Na smalcu (27 zł) lub z czosnkiem (28 zł).",
        price: "od 27 zł",
        category: "Dania Główne",
        tags: [
            "Klasyk"
        ]
    },
    {
        id: 302,
        name: "Kotlet z kurczaka",
        description: "Panierowana pierś z kurczaka.",
        price: "28 zł",
        category: "Dania Główne",
        tags: []
    },
    {
        id: 303,
        name: "Kotlet mielony",
        description: "Klasyczny, domowy kotlet.",
        price: "26 zł",
        category: "Dania Główne",
        tags: []
    },
    {
        id: 304,
        name: "Devolay",
        description: "Kotlet drobiowy z masłem w środku.",
        price: "30 zł",
        category: "Dania Główne",
        tags: [
            "Polecane"
        ]
    },
    {
        id: 305,
        name: "Gołąbki z mięsem i ryżem",
        description: "W sosie pomidorowym.",
        price: "35 zł",
        category: "Dania Główne",
        tags: []
    },
    {
        id: 306,
        name: "Filet z ryby",
        description: "Delikatny filet rybny w panierce.",
        price: "27 zł",
        category: "Dania Główne",
        tags: []
    },
    {
        id: 307,
        name: "Bigos z pieczywem",
        description: "Kapusta z mięsem i boczkiem.",
        price: "28 zł",
        category: "Dania Główne",
        tags: [
            "Polskie Smaki"
        ]
    },
    {
        id: 308,
        name: "Placki ziemniaczane",
        description: "Klasyczne (19 zł), ze śmietaną (21 zł), z gulaszem (32 zł).",
        price: "od 19 zł",
        category: "Dania Główne",
        tags: [
            "Wege opcja"
        ]
    },
    {
        id: 309,
        name: "Czulent z pieczywem",
        description: "Gulasz wołowy z warzywami w stylu żydowskim.",
        price: "32 zł",
        category: "Dania Główne",
        tags: [
            "Specjalność"
        ]
    },
    {
        id: 310,
        name: "Kiełbasa z cebulką i pieczywem",
        description: "Smażona kiełbasa.",
        price: "25 zł",
        category: "Dania Główne",
        tags: []
    },
    {
        id: 311,
        name: "Indyk z borowikami",
        description: "W sosie grzybowym.",
        price: "31 zł",
        category: "Dania Główne",
        tags: [
            "Polecane"
        ]
    },
    {
        id: 312,
        name: "Gulasz",
        description: "Klasyczny gulasz wieprzowy.",
        price: "29 zł",
        category: "Dania Główne",
        tags: []
    },
    {
        id: 313,
        name: "Pasztet z kaczki (Szef Poleca)",
        description: "Z sosem żurawinowym i chrzanowym.",
        price: "22 zł",
        category: "Dania Główne",
        tags: [
            "Szef Poleca"
        ]
    },
    {
        id: 314,
        name: "Rolada wieprzowa (Szef Poleca)",
        description: "Z nadzieniem pieczarkowo-serowym.",
        price: "30 zł",
        category: "Dania Główne",
        tags: [
            "Szef Poleca"
        ]
    },
    {
        id: 315,
        name: "Żeberka wieprzowe BBQ (Szef Poleca)",
        description: "W sosie BBQ i miodzie, z frytkami.",
        price: "49 zł",
        category: "Dania Główne",
        tags: [
            "Szef Poleca",
            "Premium"
        ]
    },
    // Pierogi i Naleśniki
    {
        id: 401,
        name: "Pierogi z mięsem",
        description: "Wyrazisty farsz mięsny.",
        price: "30 zł",
        category: "Pierogi i Naleśniki",
        tags: []
    },
    {
        id: 402,
        name: "Pierogi z kapustą i grzybami",
        description: "Tradycyjny farsz.",
        price: "29 zł",
        category: "Pierogi i Naleśniki",
        tags: [
            "Wege"
        ]
    },
    {
        id: 403,
        name: "Pierogi ruskie",
        description: "Ziemniaki i twaróg.",
        price: "28 zł",
        category: "Pierogi i Naleśniki",
        tags: [
            "Bestseller",
            "Wege"
        ]
    },
    {
        id: 404,
        name: "Pierogi z serem na słodko",
        description: "Z twarogiem na słodko.",
        price: "28 zł",
        category: "Pierogi i Naleśniki",
        tags: [
            "Słodkie"
        ]
    },
    {
        id: 405,
        name: "Pierogi z owocami",
        description: "Truskawka lub borówka.",
        price: "29 zł",
        category: "Pierogi i Naleśniki",
        tags: [
            "Słodkie"
        ]
    },
    {
        id: 406,
        name: "Naleśniki z serem na słodko",
        description: "Z twarogiem.",
        price: "25 zł",
        category: "Pierogi i Naleśniki",
        tags: [
            "Słodkie"
        ]
    },
    {
        id: 407,
        name: "Naleśniki ze szpinakiem",
        description: "Wytrawne.",
        price: "25 zł",
        category: "Pierogi i Naleśniki",
        tags: [
            "Wege"
        ]
    },
    // Dodatki
    {
        id: 501,
        name: "Frytki",
        description: "Porcja frytek.",
        price: "13 zł",
        category: "Dodatki",
        tags: []
    },
    {
        id: 502,
        name: "Ziemniaki / Ryż / Kasza gryczana",
        description: "Do wyboru.",
        price: "8 zł",
        category: "Dodatki",
        tags: []
    },
    {
        id: 503,
        name: "Kopytka",
        description: "Domowe.",
        price: "12 zł",
        category: "Dodatki",
        tags: []
    },
    {
        id: 504,
        name: "Bufet sałatkowy",
        description: "Zestaw surówek.",
        price: "13 zł",
        category: "Dodatki",
        tags: [
            "Zdrowe"
        ]
    },
    {
        id: 505,
        name: "Buraki zasmażane",
        description: "Na ciepło.",
        price: "10 zł",
        category: "Dodatki",
        tags: []
    },
    {
        id: 506,
        name: "Marchewka z groszkiem",
        description: "Gotowana.",
        price: "10 zł",
        category: "Dodatki",
        tags: []
    },
    {
        id: 507,
        name: "Kapusta zasmażana",
        description: "Na ciepło.",
        price: "10 zł",
        category: "Dodatki",
        tags: []
    },
    {
        id: 508,
        name: "Szpinak",
        description: "Na ciepło.",
        price: "11 zł",
        category: "Dodatki",
        tags: []
    },
    {
        id: 509,
        name: "Ogórek kiszony",
        description: "2 sztuki.",
        price: "10 zł",
        category: "Dodatki",
        tags: []
    },
    {
        id: 510,
        name: "Sosy",
        description: "Pomidorowy, Grzybowy (8 zł). Ketchup, Musztarda, Majonez itp. (5 zł).",
        price: "od 5 zł",
        category: "Dodatki",
        tags: []
    },
    // Desery
    {
        id: 601,
        name: "Pascha sernik",
        description: "Kremowy sernik.",
        price: "30 zł",
        category: "Desery",
        tags: [
            "Polecane"
        ]
    },
    {
        id: 602,
        name: "Orzechowe ciasto",
        description: "Intensywne.",
        price: "22 zł",
        category: "Desery",
        tags: []
    },
    {
        id: 603,
        name: "Szarlotka na ciepło",
        description: "Z gałką lodów i bitą śmietaną.",
        price: "21 zł",
        category: "Desery",
        tags: [
            "Bestseller"
        ]
    },
    {
        id: 604,
        name: "Lody waniliowe z owocami",
        description: "Z bitą śmietaną.",
        price: "18 zł",
        category: "Desery",
        tags: []
    },
    // Napoje
    {
        id: 701,
        name: "Kawa",
        description: "Espresso (10), Cappuccino (15), Latte (15), Flat White (14).",
        price: "od 10 zł",
        category: "Napoje",
        tags: []
    },
    {
        id: 702,
        name: "Herbata",
        description: "Czarna, Zielona, Owocowa, Miętowa (10 zł). Zimowa (15 zł).",
        price: "od 10 zł",
        category: "Napoje",
        tags: []
    },
    {
        id: 703,
        name: "Napoje zimne",
        description: "Pepsi, Mirinda, 7up, Soki (10 zł).",
        price: "10 zł",
        category: "Napoje",
        tags: []
    },
    {
        id: 704,
        name: "Kompot domowy",
        description: "Szklanka.",
        price: "10 zł",
        category: "Napoje",
        tags: [
            "Domowe"
        ]
    },
    {
        id: 705,
        name: "Lemoniada",
        description: "Szklanka (10 zł), Karafka 1L (30 zł).",
        price: "od 10 zł",
        category: "Napoje",
        tags: []
    },
    {
        id: 706,
        name: "Woda",
        description: "Szklanka (10 zł), Karafka (20 zł).",
        price: "od 10 zł",
        category: "Napoje",
        tags: []
    },
    // Alkohole
    {
        id: 801,
        name: "Piwo Żywiec",
        description: "0.5L (15 zł), Białe 0.5L (16 zł), Porter (16 zł), Free (13 zł).",
        price: "od 13 zł",
        category: "Alkohole",
        tags: []
    },
    {
        id: 802,
        name: "Wino",
        description: "Białe / Czerwone.",
        price: "20 zł",
        category: "Alkohole",
        tags: []
    },
    {
        id: 803,
        name: "Grzaniec Galicyjski",
        description: "Na ciepło.",
        price: "15 zł",
        category: "Alkohole",
        tags: [
            "Sezonowe"
        ]
    },
    {
        id: 804,
        name: "Prossecco",
        description: "Kieliszek.",
        price: "22 zł",
        category: "Alkohole",
        tags: []
    }
];
const MenuExplorer = ()=>{
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Wszystkie");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const filteredItems = MENU_ITEMS.filter((item)=>(activeCategory === "Wszystkie" || item.category === activeCategory) && item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 max-w-6xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-serif font-bold text-ink mb-4",
                                children: "Nasze Menu"
                            }, void 0, false, {
                                fileName: "[project]/components/MenuExplorer.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted max-w-2xl mx-auto",
                                children: "Tradycyjne receptury, świeże składniki i domowy smak. Sprawdź, co dziś serwujemy."
                            }, void 0, false, {
                                fileName: "[project]/components/MenuExplorer.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MenuExplorer.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-20 z-30 bg-background/95 backdrop-blur py-4 mb-8 border-b border-border-soft",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-4 items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 no-scrollbar",
                                    children: CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveCategory(cat),
                                            className: `px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat ? "bg-primary text-white" : "bg-background-alt text-muted hover:bg-border-soft"}`,
                                            children: cat
                                        }, cat, false, {
                                            fileName: "[project]/components/MenuExplorer.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/MenuExplorer.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full md:w-64",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/MenuExplorer.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Szukaj dania...",
                                            "aria-label": "Szukaj dania w menu",
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value),
                                            className: "w-full pl-9 pr-4 py-2 rounded-full border border-border-soft bg-background-alt focus:outline-none focus:border-primary text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/components/MenuExplorer.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/MenuExplorer.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/MenuExplorer.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/MenuExplorer.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layoutId: `card-${item.id}`,
                                onClick: ()=>setSelectedItem(item),
                                className: "group bg-surface border border-border-soft p-6 rounded-sm cursor-pointer hover:border-primary/50 hover:shadow-md transition-all relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-serif font-bold text-lg text-ink group-hover:text-primary transition-colors",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/MenuExplorer.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            item.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-gold",
                                                children: item.price
                                            }, void 0, false, {
                                                fileName: "[project]/components/MenuExplorer.tsx",
                                                lineNumber: 154,
                                                columnNumber: 32
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MenuExplorer.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted mb-4 line-clamp-2",
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/MenuExplorer.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 flex-wrap",
                                        children: item.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase tracking-wider bg-background-alt text-muted px-2 py-1 rounded-sm",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/components/MenuExplorer.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/MenuExplorer.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.id, true, {
                                fileName: "[project]/components/MenuExplorer.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/MenuExplorer.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROUTES"].menu,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "lg",
                                className: "group",
                                children: [
                                    "Pełne Menu ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MenuExplorer.tsx",
                                        lineNumber: 169,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MenuExplorer.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/MenuExplorer.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/MenuExplorer.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/MenuExplorer.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setSelectedItem(null),
                            className: "fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
                        }, void 0, false, {
                            fileName: "[project]/components/MenuExplorer.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layoutId: `card-${selectedItem.id}`,
                            className: "fixed inset-x-0 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-surface md:rounded-lg rounded-t-xl z-50 w-full md:w-[500px] p-6 md:p-8 shadow-2xl overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedItem(null),
                                    className: "absolute top-4 right-4 p-2 hover:bg-background-alt rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5 text-muted"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MenuExplorer.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/MenuExplorer.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-primary tracking-widest uppercase mb-2 block",
                                            children: selectedItem.category
                                        }, void 0, false, {
                                            fileName: "[project]/components/MenuExplorer.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif font-bold text-3xl text-ink mb-2",
                                            children: selectedItem.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/MenuExplorer.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl font-medium text-gold mb-6",
                                            children: selectedItem.price
                                        }, void 0, false, {
                                            fileName: "[project]/components/MenuExplorer.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted leading-relaxed mb-8",
                                            children: selectedItem.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/MenuExplorer.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROUTES"].delivery,
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        className: "w-full justify-center",
                                                        children: "Zamów Online"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MenuExplorer.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/MenuExplorer.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_DATA"].contact.phone}`,
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        className: "w-full justify-center",
                                                        children: "Zadzwoń"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MenuExplorer.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/MenuExplorer.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/MenuExplorer.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/MenuExplorer.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/MenuExplorer.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/MenuExplorer.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/MenuExplorer.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MenuExplorer, "5myOnPeihBrsK4Kw98MI82IpLeU=");
_c = MenuExplorer;
var _c;
__turbopack_context__.k.register(_c, "MenuExplorer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_MenuExplorer_tsx_bd3a9ba3._.js.map
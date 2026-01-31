export const COMPANY_DATA = {
    name: "Restauracja Krakoski",
    location: {
        address: "ul. Miodowa 39",
        city: "Kraków",
        zip: "31-052",
        district: "Kazimierz",
        googleMapsLink: "https://maps.app.goo.gl/Sc8Edr9BdvY5PGLg8"
    },
    contact: {
        phone: "+48 732 924 034",
        mobile: "+48 732 924 034", // Using primary as mobile since it looks like a mobile number
        email: "kontakt@krakoski-kazimierz.pl",
    },
    hours: {
        standard: "11:00 - 22:00",
        full: {
            "Poniedziałek": "11:00 - 22:00",
            "Wtorek": "11:00 - 22:00",
            "Środa": "11:00 - 22:00",
            "Czwartek": "11:00 - 22:00",
            "Piątek": "11:00 - 22:00",
            "Sobota": "11:00 - 22:00",
            "Niedziela": "11:00 - 22:00"
        }
    },
    delivery: {
        pyszne: "https://www.pyszne.pl/menu/krakoski",
        uber: "https://www.ubereats.com/", // User note: Link to be verified manually
        wolt: "https://wolt.com/pl/pol/krakow/restaurant/krakoski-krk",
        glovo: "https://glovoapp.com/pl/pl/krakow/stores/krakoski-kra"
    },
    social: {
        facebook: "https://www.facebook.com/p/Restauracja-Krakoski-61564021922040/",
        instagram: "https://www.instagram.com/restauracja_krakoski/"
    }
};

export const ROUTES = {
    home: "/",
    menu: "/menu",
    delivery: "/dostawa",
    contact: "/kontakt",
    privacy: "/polityka-prywatnosci",
    terms: "/regulamin"
};

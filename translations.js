// LUXWAY Travel Agency — i18n translations (UZ default)
// Keys are referenced via data-i18n attributes and in app.js (packages, FAQ, etc.)

const TRANSLATIONS = {
  uz: {
    meta: {
      localeName: "O‘zbek",
    },
    brand: {
      name: "LUXWAY Travel Agency",
      tagline: "Xalqaro sayohatlar va visa yordami — premium xizmat",
    },
    common: {
      openMenu: "Menyuni ochish",
      closeMenu: "Menyuni yopish",
      close: "Yopish",
      details: "Batafsil",
      from: "dan boshlab",
      perPerson: "kishi boshiga",
      days: "kun",
      nights: "tun",
      rating: "Reyting",
      startingPrice: "Boshlang‘ich narx",
      select: "Tanlang",
      all: "Barchasi",
      featured: "Tavsiya etiladi",
      visaRequired: "Visa talab qilinadi",
      visaSupport: "Visa yordami",
      availableNow: "Mavjud",
      reset: "Tozalash",
      learnMore: "Ko‘proq",
      send: "Yuborish",
      optional: "ixtiyoriy",
      required: "majburiy",
      starsA11y: "{stars} yulduz",
      skipToContent: "Asosiy kontentga o‘tish",
      copied: "Nusxa olindi",
      international: "Xalqaro",
    },

    nav: {
      packages: "Paketlar",
      destinations: "Yo‘nalishlar",
      visa: "Visa",
      whyUs: "Nega biz",
      reviews: "Sharhlar",
      faq: "FAQ",
      contact: "Aloqa",
      getQuote: "Hisob-kitob olish",
      langLabel: "Til",
    },

    hero: {
      eyebrow: "XALQARO TURIZM + VISA XIZMATI",
      title: "Osiyo sayohatlari va visa yordami — bitta joyda, premium darajada",
      subtitle:
        "Parvozlar, mehmonxonalar, transferlar, sug‘urta va visa bo‘yicha yo‘l-yo‘riq — hammasi aniq reja va shaffof narx bilan.",
      ctaPackages: "Paketlarni ko‘rish",
      ctaVisa: "Visa konsultatsiyasi",
      chipsTitle: "Mashhur yo‘nalishlar",
      chips: {
        turkey: "Turkiya",
        uae: "BAA",
        thailand: "Tailand",
        malaysia: "Malayziya",
        bali: "Indoneziya (Bali)",
        singapore: "Singapur",
        korea: "Koreya",
        japan: "Yaponiya",
        europeVisa: "Yevropa (visa bilan)",
      },
      stats: {
        title: "Luxway ko‘rsatkichlari",
        years: "Yillik tajriba",
        yearsValue: "8+",
        rating: "O‘rtacha baho",
        ratingValue: "4.9/5",
        packages: "Tayyor paketlar",
        packagesValue: "40+",
        note: "Individual marshrutlar ham tayyorlaymiz.",
      },
    },

    filters: {
      title: "Qidiruv va filtrlar",
      hint: "Filtrlarni tanlang — mos paketlar darhol yangilanadi.",
      region: "Mintaqa",
      destination: "Manzil",
      packageType: "Tur turi",
      visaType: "Visa turi",
      duration: "Davomiyligi",
      budget: "Byudjet",
      results: "{count} ta paket topildi",
      noResults:
        "Mos paket topilmadi. Filtrlarni yengillashtiring yoki bizdan individual taklif so‘rang.",
    },

    region: {
      asia: "Osiyo",
      europe: "Yevropa",
    },

    packageType: {
      beach: "Dengiz",
      city: "Shahar",
      family: "Oila",
      honeymoon: "Asal oy",
      adventure: "Sarguzasht",
      business: "Biznes",
    },

    visaType: {
      any: "Har qanday",
      tourist: "Turistik visa",
      schengen: "Shengen",
      uk: "Buyuk Britaniya",
      japanKorea: "Yaponiya/Koreya",
      other: "Boshqa",
      included: "Visa paketi",
      notNeeded: "Visa shart emas",
    },

    duration: {
      any: "Har qanday",
      d3_5: "3–5 kun",
      d6_8: "6–8 kun",
      d9_12: "9–12 kun",
      d13p: "13+ kun",
    },

    budget: {
      any: "Har qanday",
      b_lt_500: "< 500$",
      b_500_999: "500–999$",
      b_1000_1499: "1000–1499$",
      b_1500p: "1500$+",
    },

    tags: {
      visaIncluded: "Visa paketi",
      visaSupport: "Visa yordami",
      flightIncluded: "Parvoz kiritilgan",
      hotelIncluded: "Mehmonxona kiritilgan",
      family: "Oila uchun",
      bestSeller: "Best seller",
      premium: "Premium",
      flexible: "Moslashuvchan",
      honeymoon: "Asal oy",
    },

    packages: {
      title: "Tavsiya etilgan paketlar",
      subtitle:
        "Osiyo yo‘nalishlari — birinchi o‘rinda. Yevropa paketlarida esa visa jarayoni to‘liq yo‘lga qo‘yilgan.",
      badgeFeatured: "TOP tanlov",
      card: {
        duration: "{days} kun / {nights} tun",
        startingAt: "{price}$ {from}",
      },
      modal: {
        title: "Paket tafsilotlari",
        includedTitle: "Nimalar kiradi",
        visaTitle: "Visa bo‘yicha eslatma",
        itineraryTitle: "Namunaviy marshrut",
        priceNote:
          "Narxlar mavsum, mehmonxona darajasi va parvoz mavjudligiga qarab o‘zgaradi.",
        actionPrimary: "Aloqa bo‘limiga o‘tish",
        actionSecondary: "Visa konsultatsiyasi",
      },
    },

    destinations: {
      title: "Yo‘nalishlar",
      subtitle:
        "Manzilni bosing — filtrlar avtomatik to‘ldiriladi va paketlar bo‘limiga olib boradi.",
      tabAsia: "Osiyo",
      tabEurope: "Yevropa",
      tileHint: "Paketlarni ko‘rish",
    },

    visa: {
      title: "Visa xizmatlari",
      subtitle:
        "Hujjatlar ro‘yxatidan boshlab uchrashuvgacha — har qadamda aniq ko‘rsatma va qo‘llab-quvvatlash.",
      stepsTitle: "Biz qanday yordam beramiz",
      step1Title: "Bepul hujjatlar checklist",
      step1Text:
        "Sizning mamlakatingiz va sayohat maqsadingizga mos ro‘yxatni tayyorlab beramiz.",
      step2Title: "Ariza va anketa tayyorlash",
      step2Text:
        "Formalar, izohlar va to‘plamni standartlarga mos qilib tayyorlaymiz.",
      step3Title: "Uchrashuv bo‘yicha yo‘riqnoma",
      step3Text:
        "Konsullik/markaz talablari, vaqt va ketma-ketlikni tushunarli qilib beramiz.",
      step4Title: "Sug‘urta va bron qo‘llab-quvvatlash",
      step4Text:
        "Sug‘urta, mehmonxona va parvoz bronlari — visa paketiga mos konfiguratsiya.",
      typesTitle: "Visa turlari",
      typeTouristTitle: "Turistik / e-visa yordami",
      typeTouristText:
        "BAA, Turkiya, Tailand kabi yo‘nalishlarda e-visa va hujjatlar bo‘yicha yordam.",
      typeSchengenTitle: "Shengen visa",
      typeSchengenText:
        "Hujjatlar, marshrut, bronlar va ariza topshirish bo‘yicha to‘liq yo‘riqnoma.",
      typeUkTitle: "Buyuk Britaniya visa",
      typeUkText:
        "Anketa, to‘lovlar va qo‘shimcha hujjatlar bo‘yicha sinchkov tayyorlov.",
      typeJapanKoreaTitle: "Yaponiya / Koreya visa yordami",
      typeJapanKoreaText:
        "Talablar bo‘yicha aniq ro‘yxat va tajribaga asoslangan tayyorlov.",
      checklistTitle: "Visa Checklist",
      checklistText:
        "Quyidagi “Checklist ko‘rish” tugmasi — yuklab olinadigan fayl emas, lekin sizga kerakli punktlarni ko‘rsatadi.",
      checklistBtn: "Checklist ko‘rish",
      checklistModalTitle: "Tezkor hujjatlar checklist",
      checklistItems: {
        passport: "Pasport (kamida 6 oy amal qiladi)",
        photo: "Biometrik foto",
        form: "Anketa / ariza",
        booking: "Parvoz va mehmonxona bronlari (kerak bo‘lsa)",
        insurance: "Sayohat sug‘urtasi",
        finance: "Moliyaviy tasdiq (bank/maosh)",
        ties: "Qaytish niyati (ish/o‘qish/ko‘chmas mulk)",
      },
      requestBtn: "Konsultatsiya so‘rash",
      noteGreen: "Visa support mavjud",
    },

    whyUs: {
      title: "Nega Luxway?",
      subtitle:
        "Xalqaro sayohatlar bo‘yicha tajriba, premium servis va hujjatlar bilan ishonchli yondashuv.",
      items: {
        flights: {
          title: "Parvozlar va chipta",
          text:
            "Mos variantlar, qulay vaqtlar, minimal tranzit — byudjet va komfort balansida.",
        },
        hotels: {
          title: "Tekshirilgan mehmonxonalar",
          text:
            "Joylashuv, tozalik va servis bo‘yicha saralangan variantlar — xotirjam dam olish uchun.",
        },
        visa: {
          title: "Visa yordami",
          text:
            "Ariza tayyorlash, bronlar, sug‘urta va jarayon bo‘yicha aniq yo‘riqnoma.",
        },
        insurance: {
          title: "Sug‘urta",
          text:
            "Sayohat ehtiyojiga mos sug‘urta — xavfsizlik va ishonch uchun.",
        },
        support: {
          title: "24/7 qo‘llab-quvvatlash",
          text:
            "Safar davomida savollar bo‘lsa — tezkor aloqa va yordam.",
        },
        pricing: {
          title: "Shaffof narx",
          text:
            "Nimalar kirishi aniq ko‘rsatiladi. Yashirin to‘lovlar yo‘q.",
        },
        payment: {
          title: "Moslashuvchan to‘lov",
          text:
            "Paketga qarab bosqichma-bosqich yoki oldindan kelishilgan rejalar.",
        },
        private: {
          title: "Guruh va individual",
          text:
            "Oilaviy, honeymoon, biznes yoki VIP — maqsadingizga mos marshrut.",
        },
      },
    },

    reviews: {
      title: "Mijozlar fikri",
      subtitle:
        "Xalqaro safarlar va visa jarayonida bizning yondashuvimiz haqida real taassurotlar.",
      a11yStars: "{stars} yulduzli baho",
      items: {
        r1: {
          name: "Dilshod A.",
          text:
            "Dubai safarimiz mukammal tashkil qilindi: parvoz, transfer va mehmonxona juda mos tushdi. Visa bo‘yicha ham hammasi aniq yo‘lga qo‘yildi.",
        },
        r2: {
          name: "Madina K.",
          text:
            "Tailand (Phuket + Bangkok) paketini oldik. Itinerary juda qulay, vaqtimiz tejaldi. Hujjatlar bo‘yicha maslahatlar ham foydali bo‘ldi.",
        },
        r3: {
          name: "Rustam S.",
          text:
            "Shengen uchun hujjatlarimizni tartibga keltirishdi, bron va sug‘urtani moslab berishdi. Jarayon stresssiz o‘tdi.",
        },
        r4: {
          name: "Sabina N.",
          text:
            "Yaponiya bo‘yicha konsultatsiya oldik. Talablar, reja va byudjetni to‘g‘ri tushuntirishdi — premium servis hissi bor.",
        },
      },
    },

    faq: {
      title: "Ko‘p so‘raladigan savollar",
      subtitle:
        "Visa, to‘lov va safar bo‘yicha eng ko‘p uchraydigan savollarga qisqa javoblar.",
      items: {
        q1: {
          q: "Visa jarayoni necha kunda tayyor bo‘ladi?",
          a:
            "Muddat mamlakat va mavsumga bog‘liq. Konsultatsiyada sizning holatingizga mos taxminiy vaqtni aytamiz va tezlashtirish variantlarini tushuntiramiz.",
        },
        q2: {
          q: "Qaysi hujjatlar eng ko‘p kerak bo‘ladi?",
          a:
            "Odatda pasport, foto, anketa, moliyaviy tasdiq va sayohat rejasi. Ba’zi vizalarda bronlar va sug‘urta ham talab qilinadi.",
        },
        q3: {
          q: "To‘lovni qanday amalga oshiramiz?",
          a:
            "Paketga qarab to‘liq yoki bosqichma-bosqich to‘lov bo‘lishi mumkin. Hamma shartlar oldindan yozma tarzda kelishiladi.",
        },
        q4: {
          q: "Bekor qilish va qaytarish siyosati qanday?",
          a:
            "Qaytarish shartlari aviakompaniya va mehmonxona qoidalariga bog‘liq. Biz oldindan xavflarni tushuntiramiz va eng mos variantni tanlashga yordam beramiz.",
        },
        q5: {
          q: "Eng yaxshi mavsum qachon?",
          a:
            "Osiyoda mavsumlar yo‘nalish bo‘yicha farq qiladi. Siz istagan ob-havo va byudjetga mos eng yaxshi oynalarni tavsiya qilamiz.",
        },
        q6: {
          q: "Paketni o‘zimga moslab o‘zgartira olamanmi?",
          a:
            "Ha. Mehmonxona darajasi, parvoz va marshrutni sizning istagingiz bo‘yicha moslab beramiz. Shunchaki maqsadingizni ayting.",
        },
        q7: {
          q: "Visa rad etilsa nima bo‘ladi?",
          a:
            "Har bir holat individual. Biz hujjatlarni maksimal to‘g‘ri tayyorlaymiz. Rad bo‘lsa, sababini tahlil qilib, keyingi qadam bo‘yicha maslahat beramiz.",
        },
      },
    },

    contact: {
      title: "Aloqa va so‘rov",
      subtitle:
        "Tezkor taklif olish uchun formani to‘ldiring. Biz yo‘nalish, byudjet va visa bo‘yicha aniq variantlarni tayyorlaymiz.",
      formTitle: "So‘rov yuborish",
      nameLabel: "Ism",
      namePlaceholder: "Ismingizni kiriting",
      contactLabel: "Telefon yoki email",
      contactPlaceholder: "+998 … yoki email",
      interestLabel: "Qiziqqan yo‘nalish",
      interestPlaceholder: "Masalan: Dubai, Bali, Seoul…",
      messageLabel: "Xabar",
      messagePlaceholder:
        "Sana, odam soni, byudjet va visa kerakmi — qisqacha yozing",
      consent:
        "Yuborish orqali siz aloqa uchun ma’lumotlaringizdan foydalanishimizga rozilik bildirasiz.",
      quickTitle: "Tezkor aloqa",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      officeTitle: "Ofis",
      officeText:
        "Toshkent, O‘zbekiston. Xizmatlarimiz — xalqaro sayohatlar va visa yordami.",
      emailTitle: "Email",
      phoneTitle: "Telefon",
      successTitle: "So‘rovingiz qabul qilindi",
      successText:
        "Rahmat! Tez orada siz bilan bog‘lanamiz va eng mos taklifni tayyorlaymiz.",
      errors: {
        requiredName: "Ismni kiriting.",
        requiredContact: "Telefon yoki emailni kiriting.",
        invalidContact:
          "Telefon yoki email formati noto‘g‘ri ko‘rinadi. Qayta tekshiring.",
        requiredMessage: "Xabar yozing.",
      },
    },

    footer: {
      about:
        "Luxway — Osiyo yo‘nalishlari, Yevropa safarlari va visa xizmatlarini premium darajada tashkil qiladigan xalqaro agentlik.",
      links: "Tezkor havolalar",
      socials: "Ijtimoiy tarmoqlar",
      rights: "Barcha huquqlar himoyalangan.",
    },

    a11y: {
      modalLabel: "Paket tafsilotlari oynasi",
      modalClose: "Modalni yopish",
      accordionExpand: "Javobni ochish",
      accordionCollapse: "Javobni yopish",
    },

    // Data dictionaries used by filters/destination tiles
    dict: {
      destinations: {
        turkey_istanbul: "Turkiya — Istanbul",
        turkey_antalya: "Turkiya — Antalya",
        uae_dubai: "BAA — Dubai",
        uae_abudhabi: "BAA — Abu-Dabi",
        thailand_phuket_bkk: "Tailand — Phuket + Bangkok",
        malaysia_kl_langkawi: "Malayziya — KL + Langkawi",
        indonesia_bali: "Indoneziya — Bali",
        singapore: "Singapur",
        korea_seoul: "Koreya — Seoul",
        japan_tokyo: "Yaponiya — Tokyo",
        vietnam_danang_hanoi: "Vyetnam — Da Nang + Hanoi",
        italy_rome_venice: "Italiya — Rim + Venetsiya",
        france_paris: "Fransiya — Parij",
        spain_barcelona: "Ispaniya — Barselona",
        europe_highlights: "Yevropa — Highlights",
        paris_amsterdam: "Parij + Amsterdam",
      },
    },

    // Package content (titles, itineraries, visa notes)
    pkg: {
      p1: {
        title: "Istanbul city break",
        subtitle: "Tarix, gastronomiya va Bosfor manzaralari",
        visaNote: "E-visa / hujjatlar bo‘yicha yordam paketga kiritiladi.",
        itinerary: [
          "1-kun: Yetib kelish, mehmonxonaga joylashish, kechki sayr",
          "2-kun: Eski shahar — Ayasofiya, Sultonahmad, Grand Bazaar",
          "3-kun: Bosfor kruizi, shahar panoramalari",
          "4-kun: Erkin vaqt, sovg‘alar, qaytish",
        ],
      },
      p2: {
        title: "Antalya beach escape",
        subtitle: "Dengiz, all-inclusive va qulay dam olish",
        visaNote: "Visa masalalari bo‘yicha konsultatsiya va hujjatlar yo‘riqnomasi mavjud.",
        itinerary: [
          "1-kun: Parvoz, transfer, check-in",
          "2-kun: Dam olish va resort xizmatlari",
          "3-kun: Ixtiyoriy ekskursiya / spa",
          "4-kun: Plyaj, kechki dastur",
          "5-kun: Qaytish",
        ],
      },
      p3: {
        title: "Dubai premium getaway",
        subtitle: "Zamonaviy shahar, shopping va sahro tajribasi",
        visaNote: "BAA turistik visa yordami paketga kiritiladi.",
        itinerary: [
          "1-kun: Yetib kelish, marina bo‘ylab sayr",
          "2-kun: Burj Khalifa, Dubai Mall, fontanlar",
          "3-kun: Desert safari va kechki shou",
          "4-kun: Erkin kun / Abu-Dabi ixtiyoriy",
          "5-kun: Qaytish",
        ],
      },
      p4: {
        title: "Abu-Dabi + Dubai combo",
        subtitle: "Ikki shahar — bitta sayohatda",
        visaNote: "Visa bo‘yicha to‘liq yo‘riqnoma va sug‘urta qo‘llab-quvvatlash mavjud.",
        itinerary: [
          "1-kun: Dubai, check-in",
          "2-kun: Dubai city tour",
          "3-kun: Abu-Dabi — masjid va muzeylar",
          "4-kun: Beach time / shopping",
          "5-kun: Qaytish",
        ],
      },
      p5: {
        title: "Thailand: Phuket + Bangkok",
        subtitle: "Plyaj va shahar energiyasi uyg‘unligi",
        visaNote: "Tailand hujjatlari bo‘yicha konsultatsiya va sayohat sug‘urtasi tavsiya etiladi.",
        itinerary: [
          "1-kun: Phuket, check-in",
          "2-kun: Orol ekskursiyasi (ixtiyoriy)",
          "3-kun: Parvoz/transfer Bangkok",
          "4-kun: Temples + street food",
          "5-kun: Shopping va qaytish",
        ],
      },
      p6: {
        title: "Malaysia: KL + Langkawi",
        subtitle: "Megapolis va tropik orol",
        visaNote: "Hujjatlar va marshrut bo‘yicha qo‘llab-quvvatlash mavjud.",
        itinerary: [
          "1-kun: Kuala Lumpur, shahar markazi",
          "2-kun: Petronas, Batu Caves",
          "3-kun: Langkawi transfer",
          "4-kun: Plyaj va dam olish",
          "5-kun: Qaytish",
        ],
      },
      p7: {
        title: "Bali honeymoon",
        subtitle: "Romantik villalar va tropik kayfiyat",
        visaNote: "Indoneziya bo‘yicha e-visa konsultatsiyasi mavjud.",
        itinerary: [
          "1-kun: Yetib kelish, villa check-in",
          "2-kun: Ubud va guruch maydonlari",
          "3-kun: Beach club / spa",
          "4-kun: Nusa Penida (ixtiyoriy)",
          "5-kun: Qaytish",
        ],
      },
      p8: {
        title: "Singapore city luxe",
        subtitle: "Arxitektura, tozalik va premium servis",
        visaNote: "Visa talablariga mos hujjatlar bo‘yicha yo‘riqnoma taqdim etiladi.",
        itinerary: [
          "1-kun: Marina Bay, kechki shahar",
          "2-kun: Gardens by the Bay, Sky views",
          "3-kun: Sentosa (ixtiyoriy)",
          "4-kun: Erkin vaqt, qaytish",
        ],
      },
      p9: {
        title: "Seoul + culture highlights",
        subtitle: "K-pop shahri va an’anaviy mahallalar",
        visaNote: "Koreya visa yordami mavjud (hujjatlar, marshrut, tavsiyalar).",
        itinerary: [
          "1-kun: Yetib kelish, Hongdae",
          "2-kun: Palace + old town",
          "3-kun: Nami Island (ixtiyoriy)",
          "4-kun: Shopping va qaytish",
        ],
      },
      p10: {
        title: "Tokyo essentials",
        subtitle: "Shahar ritmi, texnologiya va gastronomiya",
        visaNote: "Yaponiya visa bo‘yicha tajribaga asoslangan tayyorlov.",
        itinerary: [
          "1-kun: Shibuya / Shinjuku",
          "2-kun: Asakusa + skyline",
          "3-kun: Disney/Day trip (ixtiyoriy)",
          "4-kun: Erkin kun, qaytish",
        ],
      },
      p11: {
        title: "Vietnam: Da Nang + Hanoi",
        subtitle: "Tabiat, dengiz va tarixiy shaharlar",
        visaNote: "Visa talablari bo‘yicha konsultatsiya va sug‘urta qo‘llovi mavjud.",
        itinerary: [
          "1-kun: Da Nang, check-in",
          "2-kun: Ba Na Hills (ixtiyoriy)",
          "3-kun: Hanoi transfer",
          "4-kun: Old Quarter + food tour",
          "5-kun: Qaytish",
        ],
      },
      p12: {
        title: "Italy: Rome + Venice",
        subtitle: "Klassika, san’at va kanallar",
        visaNote: "Shengen visa talab qilinadi. Hujjatlar, bronlar va sug‘urta bo‘yicha to‘liq yo‘riqnoma beriladi.",
        itinerary: [
          "1-kun: Rim, tarixiy markaz",
          "2-kun: Vatikan va muzeylar",
          "3-kun: Venetsiya, gondola (ixtiyoriy)",
          "4-kun: Erkin vaqt, qaytish",
        ],
      },
      p13: {
        title: "Paris signature",
        subtitle: "Madaniyat, moda va romantika",
        visaNote: "Shengen visa talab qilinadi. Konsultatsiya va tayyorlov xizmatlari mavjud.",
        itinerary: [
          "1-kun: Eiffel area",
          "2-kun: Louvre + Seine walk",
          "3-kun: Day trip (ixtiyoriy)",
          "4-kun: Qaytish",
        ],
      },
      p14: {
        title: "Spain: Barcelona vibes",
        subtitle: "Dengiz, arxitektura va shahar ruhi",
        visaNote: "Shengen visa talab qilinadi. Hujjatlar bo‘yicha yordam paketga kiritiladi.",
        itinerary: [
          "1-kun: Gothic Quarter",
          "2-kun: Sagrada Familia + Gaudi",
          "3-kun: Beach time",
          "4-kun: Qaytish",
        ],
      },
      p15: {
        title: "Paris + Amsterdam duo",
        subtitle: "Ikki poytaxt — bitta sayohatda",
        visaNote: "Shengen visa talab qilinadi. Uchrashuv va hujjatlar bo‘yicha yo‘riqnoma beriladi.",
        itinerary: [
          "1-kun: Parij, city walk",
          "2-kun: Parij muzeylar",
          "3-kun: Amsterdam transfer",
          "4-kun: Kanallar va shahar",
          "5-kun: Qaytish",
        ],
      },
    },
  },

  ru: {
    meta: {
      localeName: "Русский",
    },
    brand: {
      name: "LUXWAY Travel Agency",
      tagline: "Международные туры и визовая поддержка — премиальный сервис",
    },
    common: {
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      close: "Закрыть",
      details: "Подробнее",
      from: "от",
      perPerson: "за человека",
      days: "дней",
      nights: "ночей",
      rating: "Рейтинг",
      startingPrice: "Цена от",
      select: "Выбрать",
      all: "Все",
      featured: "Рекомендуем",
      visaRequired: "Нужна виза",
      visaSupport: "Визовая поддержка",
      availableNow: "Доступно",
      reset: "Сброс",
      learnMore: "Узнать больше",
      send: "Отправить",
      optional: "необязательно",
      required: "обязательно",
      starsA11y: "{stars} звёзд",
      skipToContent: "Перейти к содержимому",
      copied: "Скопировано",
      international: "Международно",
    },

    nav: {
      packages: "Пакеты",
      destinations: "Направления",
      visa: "Визы",
      whyUs: "Почему мы",
      reviews: "Отзывы",
      faq: "FAQ",
      contact: "Контакты",
      getQuote: "Рассчитать поездку",
      langLabel: "Язык",
    },

    hero: {
      eyebrow: "МЕЖДУНАРОДНЫЙ ТУРИЗМ + ВИЗОВЫЕ УСЛУГИ",
      title: "Туры по Азии и визовая поддержка — в одном месте, премиально",
      subtitle:
        "Перелёты, отели, трансферы, страховка и помощь по визам — с чётким планом и прозрачной ценой.",
      ctaPackages: "Смотреть пакеты",
      ctaVisa: "Визовая консультация",
      chipsTitle: "Популярные направления",
      chips: {
        turkey: "Турция",
        uae: "ОАЭ",
        thailand: "Таиланд",
        malaysia: "Малайзия",
        bali: "Индонезия (Бали)",
        singapore: "Сингапур",
        korea: "Корея",
        japan: "Япония",
        europeVisa: "Европа (с визой)",
      },
      stats: {
        title: "Показатели Luxway",
        years: "Опыт работы",
        yearsValue: "8+",
        rating: "Средняя оценка",
        ratingValue: "4.9/5",
        packages: "Готовые пакеты",
        packagesValue: "40+",
        note: "Собираем и индивидуальные маршруты.",
      },
    },

    filters: {
      title: "Поиск и фильтры",
      hint: "Выберите фильтры — карточки обновятся мгновенно.",
      region: "Регион",
      destination: "Направление",
      packageType: "Тип тура",
      visaType: "Тип визы",
      duration: "Длительность",
      budget: "Бюджет",
      results: "Найдено пакетов: {count}",
      noResults:
        "Подходящих пакетов не найдено. Ослабьте фильтры или запросите индивидуальное предложение.",
    },

    region: {
      asia: "Азия",
      europe: "Европа",
    },

    packageType: {
      beach: "Пляж",
      city: "Город",
      family: "Семья",
      honeymoon: "Медовый месяц",
      adventure: "Приключения",
      business: "Бизнес",
    },

    visaType: {
      any: "Любая",
      tourist: "Туристическая",
      schengen: "Шенген",
      uk: "Великобритания",
      japanKorea: "Япония/Корея",
      other: "Другое",
      included: "Виза включена",
      notNeeded: "Без визы",
    },

    duration: {
      any: "Любая",
      d3_5: "3–5 дней",
      d6_8: "6–8 дней",
      d9_12: "9–12 дней",
      d13p: "13+ дней",
    },

    budget: {
      any: "Любой",
      b_lt_500: "< 500$",
      b_500_999: "500–999$",
      b_1000_1499: "1000–1499$",
      b_1500p: "1500$+",
    },

    tags: {
      visaIncluded: "Виза включена",
      visaSupport: "Визовая поддержка",
      flightIncluded: "Перелёт включён",
      hotelIncluded: "Отель включён",
      family: "Для семьи",
      bestSeller: "Хит продаж",
      premium: "Премиум",
      flexible: "Гибко",
      honeymoon: "Медовый месяц",
    },

    packages: {
      title: "Рекомендуемые пакеты",
      subtitle:
        "Азия — в приоритете. Для Европы — выстроенная визовая поддержка и понятный процесс.",
      badgeFeatured: "TOP выбор",
      card: {
        duration: "{days} дней / {nights} ночей",
        startingAt: "{price}$ {from}",
      },
      modal: {
        title: "Детали пакета",
        includedTitle: "Что включено",
        visaTitle: "Визовая заметка",
        itineraryTitle: "Пример маршрута",
        priceNote:
          "Цена зависит от сезона, уровня отеля и доступности перелётов.",
        actionPrimary: "Перейти к контактам",
        actionSecondary: "Визовая консультация",
      },
    },

    destinations: {
      title: "Направления",
      subtitle:
        "Нажмите на направление — фильтры заполнятся автоматически и вы попадёте к пакетам.",
      tabAsia: "Азия",
      tabEurope: "Европа",
      tileHint: "Смотреть пакеты",
    },

    visa: {
      title: "Визовые услуги",
      subtitle:
        "От списка документов до записи — понятные шаги и поддержка на каждом этапе.",
      stepsTitle: "Как мы помогаем",
      step1Title: "Бесплатный чек-лист документов",
      step1Text:
        "Соберём список под вашу страну и цель поездки.",
      step2Title: "Подготовка анкеты и пакета",
      step2Text:
        "Заполняем формы и приводим комплект к требованиям.",
      step3Title: "Инструкции по записи и визиту",
      step3Text:
        "Объясним требования центра/консульства и порядок действий.",
      step4Title: "Страховка и поддержка бронирований",
      step4Text:
        "Страховка, отели и перелёты — в конфигурации, подходящей под визу.",
      typesTitle: "Типы виз",
      typeTouristTitle: "Туристическая / e-visa поддержка",
      typeTouristText:
        "ОАЭ, Турция, Таиланд и др. — помощь с e-visa и документами.",
      typeSchengenTitle: "Шенгенская виза",
      typeSchengenText:
        "Документы, маршрут, брони и чёткая схема подачи.",
      typeUkTitle: "Виза Великобритании",
      typeUkText:
        "Анкета, оплаты и дополнительные документы — аккуратная подготовка.",
      typeJapanKoreaTitle: "Поддержка по визам Японии/Кореи",
      typeJapanKoreaText:
        "Требования, список документов и подготовка по опыту.",
      checklistTitle: "Visa Checklist",
      checklistText:
        "Кнопка «Посмотреть чек-лист» не скачивает файл, но показывает ключевые пункты.",
      checklistBtn: "Посмотреть чек-лист",
      checklistModalTitle: "Быстрый чек-лист документов",
      checklistItems: {
        passport: "Паспорт (срок действия от 6 месяцев)",
        photo: "Биометрическое фото",
        form: "Анкета / заявление",
        booking: "Брони перелётов и отелей (если нужно)",
        insurance: "Страховка путешественника",
        finance: "Финансовое подтверждение (банк/доход)",
        ties: "Связи с родиной (работа/учёба/имущество)",
      },
      requestBtn: "Запросить консультацию",
      noteGreen: "Визовая поддержка доступна",
    },

    whyUs: {
      title: "Почему Luxway?",
      subtitle:
        "Опыт международных поездок, премиальный сервис и уверенная работа с документами.",
      items: {
        flights: {
          title: "Перелёты и билеты",
          text:
            "Подбираем удобные варианты — баланс цены и комфорта без лишних пересадок.",
        },
        hotels: {
          title: "Проверенные отели",
          text:
            "Отбор по локации и уровню сервиса — для спокойного отдыха.",
        },
        visa: {
          title: "Визовая поддержка",
          text:
            "Анкета, брони, страховка и понятный план действий по визе.",
        },
        insurance: {
          title: "Страхование",
          text:
            "Подберём страховку под формат поездки — для уверенности в пути.",
        },
        support: {
          title: "Поддержка 24/7",
          text:
            "На связи во время поездки — быстро отвечаем и помогаем.",
        },
        pricing: {
          title: "Прозрачная цена",
          text:
            "Понимание, что входит в пакет. Без скрытых доплат.",
        },
        payment: {
          title: "Гибкая оплата",
          text:
            "По договорённости возможна оплата частями в зависимости от пакета.",
        },
        private: {
          title: "Группы и индивидуально",
          text:
            "Семья, honeymoon, бизнес или VIP — маршрут под ваш запрос.",
        },
      },
    },

    reviews: {
      title: "Отзывы клиентов",
      subtitle:
        "Впечатления о международных поездках и визовой поддержке.",
      a11yStars: "Оценка: {stars} звёзд",
      items: {
        r1: {
          name: "Дилшод А.",
          text:
            "Поездка в Дубай была организована идеально: перелёт, трансферы и отель. По визе всё объяснили чётко и вовремя.",
        },
        r2: {
          name: "Мадина К.",
          text:
            "Брали Таиланд (Пхукет + Бангкок). Маршрут удобный, без суеты. Консультации по документам очень помогли.",
        },
        r3: {
          name: "Рустам С.",
          text:
            "Помогли собрать пакет на Шенген: брони, страховка, анкета. Процесс прошёл спокойно и без лишнего стресса.",
        },
        r4: {
          name: "Сабина Н.",
          text:
            "Получили консультацию по Японии. Всё разложили по шагам и по бюджету — сервис действительно премиальный.",
        },
      },
    },

    faq: {
      title: "Частые вопросы",
      subtitle:
        "Короткие ответы про визы, оплату и организацию поездки.",
      items: {
        q1: {
          q: "Сколько занимает процесс получения визы?",
          a:
            "Срок зависит от страны и сезона. На консультации дадим реалистичный прогноз и объясним возможные ускорения.",
        },
        q2: {
          q: "Какие документы требуются чаще всего?",
          a:
            "Обычно паспорт, фото, анкета, финансовые документы и план поездки. Для некоторых виз нужны брони и страховка.",
        },
        q3: {
          q: "Как можно оплатить?",
          a:
            "Возможна полная оплата или поэтапно — зависит от пакета. Все условия фиксируем заранее.",
        },
        q4: {
          q: "Какая политика отмены и возврата?",
          a:
            "Возврат зависит от правил авиакомпании и отеля. Заранее объясним риски и поможем выбрать оптимальный вариант.",
        },
        q5: {
          q: "Когда лучший сезон для поездки?",
          a:
            "Сезонность отличается по направлениям. Подберём лучшие даты под желаемую погоду и бюджет.",
        },
        q6: {
          q: "Можно ли изменить пакет под себя?",
          a:
            "Да. Меняем уровень отеля, перелёты и программу под ваш запрос — просто расскажите цель поездки.",
        },
        q7: {
          q: "Что если в визе откажут?",
          a:
            "Каждый случай индивидуален. Мы готовим документы максимально корректно. При отказе разберём причину и подскажем следующие шаги.",
        },
      },
    },

    contact: {
      title: "Контакты и заявка",
      subtitle:
        "Заполните форму — подготовим предложение по направлению, бюджету и визе.",
      formTitle: "Отправить заявку",
      nameLabel: "Имя",
      namePlaceholder: "Введите имя",
      contactLabel: "Телефон или email",
      contactPlaceholder: "+998 … или email",
      interestLabel: "Интересующее направление",
      interestPlaceholder: "Например: Dubai, Bali, Seoul…",
      messageLabel: "Сообщение",
      messagePlaceholder:
        "Даты, количество людей, бюджет и нужна ли виза — кратко",
      consent:
        "Отправляя заявку, вы соглашаетесь на использование ваших данных для связи.",
      quickTitle: "Быстрая связь",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      officeTitle: "Офис",
      officeText:
        "Ташкент, Узбекистан. Мы работаем с международными турами и визовой поддержкой.",
      emailTitle: "Email",
      phoneTitle: "Телефон",
      successTitle: "Заявка отправлена",
      successText:
        "Спасибо! Мы скоро свяжемся и предложим подходящие варианты.",
      errors: {
        requiredName: "Введите имя.",
        requiredContact: "Введите телефон или email.",
        invalidContact:
          "Похоже, формат телефона или email неверный. Проверьте ещё раз.",
        requiredMessage: "Напишите сообщение.",
      },
    },

    footer: {
      about:
        "Luxway — международное агентство: Азия в приоритете, Европа и визы — с понятным процессом и премиальным сервисом.",
      links: "Ссылки",
      socials: "Соцсети",
      rights: "Все права защищены.",
    },

    a11y: {
      modalLabel: "Окно с деталями пакета",
      modalClose: "Закрыть модальное окно",
      accordionExpand: "Развернуть ответ",
      accordionCollapse: "Свернуть ответ",
    },

    dict: {
      destinations: {
        turkey_istanbul: "Турция — Стамбул",
        turkey_antalya: "Турция — Анталья",
        uae_dubai: "ОАЭ — Дубай",
        uae_abudhabi: "ОАЭ — Абу-Даби",
        thailand_phuket_bkk: "Таиланд — Пхукет + Бангкок",
        malaysia_kl_langkawi: "Малайзия — KL + Лангкави",
        indonesia_bali: "Индонезия — Бали",
        singapore: "Сингапур",
        korea_seoul: "Корея — Сеул",
        japan_tokyo: "Япония — Токио",
        vietnam_danang_hanoi: "Вьетнам — Да Нанг + Ханой",
        italy_rome_venice: "Италия — Рим + Венеция",
        france_paris: "Франция — Париж",
        spain_barcelona: "Испания — Барселона",
        europe_highlights: "Европа — Highlights",
        paris_amsterdam: "Париж + Амстердам",
      },
    },

    pkg: {
      p1: {
        title: "Стамбул: city break",
        subtitle: "История, кухня и виды Босфора",
        visaNote: "Поддержка по e-visa/документам включена в пакет.",
        itinerary: [
          "День 1: Прилёт, заселение, вечерняя прогулка",
          "День 2: Старый город — Айя-София, Султанахмет, Гранд-базар",
          "День 3: Круиз по Босфору, панорамы города",
          "День 4: Свободное время, покупки, вылет",
        ],
      },
      p2: {
        title: "Анталья: beach escape",
        subtitle: "Море, all-inclusive и спокойный отдых",
        visaNote: "Есть консультация и инструкции по документам.",
        itinerary: [
          "День 1: Перелёт, трансфер, заселение",
          "День 2: Отдых и сервисы отеля",
          "День 3: Экскурсия по желанию / spa",
          "День 4: Пляж, вечерняя программа",
          "День 5: Вылет обратно",
        ],
      },
      p3: {
        title: "Дубай: premium getaway",
        subtitle: "Современный город, шопинг и пустыня",
        visaNote: "Туристическая виза ОАЭ включена в пакет.",
        itinerary: [
          "День 1: Прилёт, прогулка у марины",
          "День 2: Burj Khalifa, Dubai Mall, фонтаны",
          "День 3: Desert safari и вечернее шоу",
          "День 4: Свободный день / Абу-Даби по желанию",
          "День 5: Вылет",
        ],
      },
      p4: {
        title: "Абу-Даби + Дубай",
        subtitle: "Два города в одной поездке",
        visaNote:
          "Полные инструкции по визе + поддержка страховки и бронирований.",
        itinerary: [
          "День 1: Дубай, заселение",
          "День 2: Тур по Дубаю",
          "День 3: Абу-Даби — мечеть и музеи",
          "День 4: Пляж / шопинг",
          "День 5: Вылет",
        ],
      },
      p5: {
        title: "Таиланд: Пхукет + Бангкок",
        subtitle: "Пляж и энергия мегаполиса",
        visaNote:
          "Консультация по документам, рекомендуем страховку путешественника.",
        itinerary: [
          "День 1: Пхукет, заселение",
          "День 2: Островная экскурсия (по желанию)",
          "День 3: Перелёт/трансфер в Бангкок",
          "День 4: Храмы + street food",
          "День 5: Шопинг и вылет",
        ],
      },
      p6: {
        title: "Малайзия: KL + Лангкави",
        subtitle: "Мегаполис и тропический остров",
        visaNote: "Поддержка по документам и маршруту доступна.",
        itinerary: [
          "День 1: Куала-Лумпур, центр",
          "День 2: Petronas, Batu Caves",
          "День 3: Переезд на Лангкави",
          "День 4: Пляж и отдых",
          "День 5: Вылет",
        ],
      },
      p7: {
        title: "Бали: honeymoon",
        subtitle: "Романтика, виллы и тропики",
        visaNote: "Есть консультация по e-visa Индонезии.",
        itinerary: [
          "День 1: Прилёт, заселение на виллу",
          "День 2: Убуд и рисовые террасы",
          "День 3: Beach club / spa",
          "День 4: Нуса Пенида (по желанию)",
          "День 5: Вылет",
        ],
      },
      p8: {
        title: "Сингапур: city luxe",
        subtitle: "Архитектура, идеальный сервис и стиль",
        visaNote: "Дадим инструкции по требованиям и документам.",
        itinerary: [
          "День 1: Marina Bay, вечерний город",
          "День 2: Gardens by the Bay, виды сверху",
          "День 3: Sentosa (по желанию)",
          "День 4: Свободное время, вылет",
        ],
      },
      p9: {
        title: "Сеул: culture highlights",
        subtitle: "K-pop город и традиционные кварталы",
        visaNote:
          "Доступна визовая поддержка Кореи (документы, маршрут, рекомендации).",
        itinerary: [
          "День 1: Прилёт, Hongdae",
          "День 2: Дворец + старый город",
          "День 3: Nami Island (по желанию)",
          "День 4: Шопинг и вылет",
        ],
      },
      p10: {
        title: "Токио: essentials",
        subtitle: "Ритм города, технологии и гастрономия",
        visaNote: "Подготовка по визе Японии на основе опыта.",
        itinerary: [
          "День 1: Shibuya / Shinjuku",
          "День 2: Asakusa + skyline",
          "День 3: Disney/Day trip (по желанию)",
          "День 4: Свободный день, вылет",
        ],
      },
      p11: {
        title: "Вьетнам: Да Нанг + Ханой",
        subtitle: "Природа, море и исторические районы",
        visaNote:
          "Консультации по визовым требованиям + поддержка по страховке.",
        itinerary: [
          "День 1: Да Нанг, заселение",
          "День 2: Ba Na Hills (по желанию)",
          "День 3: Переезд в Ханой",
          "День 4: Old Quarter + food tour",
          "День 5: Вылет",
        ],
      },
      p12: {
        title: "Италия: Рим + Венеция",
        subtitle: "Классика, искусство и каналы",
        visaNote:
          "Требуется шенгенская виза. Даём полную схему по документам, броням и страховке.",
        itinerary: [
          "День 1: Рим, исторический центр",
          "День 2: Ватикан и музеи",
          "День 3: Венеция, гондола (по желанию)",
          "День 4: Свободное время, вылет",
        ],
      },
      p13: {
        title: "Париж: signature",
        subtitle: "Культура, мода и романтика",
        visaNote:
          "Требуется шенгенская виза. Консультация и подготовка доступны.",
        itinerary: [
          "День 1: Район Эйфелевой башни",
          "День 2: Лувр + прогулка по Сене",
          "День 3: Поездка на день (по желанию)",
          "День 4: Вылет",
        ],
      },
      p14: {
        title: "Испания: Барселона",
        subtitle: "Море, архитектура и городской вайб",
        visaNote:
          "Требуется шенгенская виза. Поддержка по документам включена.",
        itinerary: [
          "День 1: Готический квартал",
          "День 2: Sagrada Familia + Гауди",
          "День 3: Пляж и отдых",
          "День 4: Вылет",
        ],
      },
      p15: {
        title: "Париж + Амстердам",
        subtitle: "Две столицы в одной поездке",
        visaNote:
          "Требуется шенгенская виза. Поможем с записью и комплектом документов.",
        itinerary: [
          "День 1: Париж, прогулка",
          "День 2: Париж, музеи",
          "День 3: Переезд в Амстердам",
          "День 4: Каналы и город",
          "День 5: Вылет",
        ],
      },
    },
  },

  en: {
    meta: {
      localeName: "English",
    },
    brand: {
      name: "LUXWAY Travel Agency",
      tagline: "International tours & visa support — premium service",
    },
    common: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      close: "Close",
      details: "Details",
      from: "from",
      perPerson: "per person",
      days: "days",
      nights: "nights",
      rating: "Rating",
      startingPrice: "Starting price",
      select: "Select",
      all: "All",
      featured: "Featured",
      visaRequired: "Visa required",
      visaSupport: "Visa support",
      availableNow: "Available",
      reset: "Reset",
      learnMore: "Learn more",
      send: "Send",
      optional: "optional",
      required: "required",
      starsA11y: "{stars} stars",
      skipToContent: "Skip to content",
      copied: "Copied",
      international: "International",
    },

    nav: {
      packages: "Packages",
      destinations: "Destinations",
      visa: "Visa",
      whyUs: "Why us",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact",
      getQuote: "Get a Quote",
      langLabel: "Language",
    },

    hero: {
      eyebrow: "INTERNATIONAL TOURS + VISA SERVICES",
      title: "Asia-first travel packages with visa support — premium and seamless",
      subtitle:
        "Flights, hotels, transfers, insurance, and visa guidance — with clear planning and transparent pricing.",
      ctaPackages: "Explore Packages",
      ctaVisa: "Visa Consultation",
      chipsTitle: "Popular routes",
      chips: {
        turkey: "Turkey",
        uae: "UAE",
        thailand: "Thailand",
        malaysia: "Malaysia",
        bali: "Indonesia (Bali)",
        singapore: "Singapore",
        korea: "Korea",
        japan: "Japan",
        europeVisa: "Europe (with visa)",
      },
      stats: {
        title: "Luxway in numbers",
        years: "Years of experience",
        yearsValue: "8+",
        rating: "Average rating",
        ratingValue: "4.9/5",
        packages: "Ready packages",
        packagesValue: "40+",
        note: "We also craft fully custom itineraries.",
      },
    },

    filters: {
      title: "Search & filters",
      hint: "Choose filters — matching packages update instantly.",
      region: "Region",
      destination: "Destination",
      packageType: "Package type",
      visaType: "Visa type",
      duration: "Duration",
      budget: "Budget",
      results: "{count} packages found",
      noResults:
        "No packages match your filters. Loosen filters or request a custom offer.",
    },

    region: {
      asia: "Asia",
      europe: "Europe",
    },

    packageType: {
      beach: "Beach",
      city: "City Break",
      family: "Family",
      honeymoon: "Honeymoon",
      adventure: "Adventure",
      business: "Business",
    },

    visaType: {
      any: "Any",
      tourist: "Tourist visa",
      schengen: "Schengen",
      uk: "UK",
      japanKorea: "Japan/Korea",
      other: "Other",
      included: "Visa included",
      notNeeded: "No visa needed",
    },

    duration: {
      any: "Any",
      d3_5: "3–5 days",
      d6_8: "6–8 days",
      d9_12: "9–12 days",
      d13p: "13+ days",
    },

    budget: {
      any: "Any",
      b_lt_500: "< $500",
      b_500_999: "$500–$999",
      b_1000_1499: "$1000–$1499",
      b_1500p: "$1500+",
    },

    tags: {
      visaIncluded: "Visa included",
      visaSupport: "Visa support",
      flightIncluded: "Flights included",
      hotelIncluded: "Hotel included",
      family: "Family-friendly",
      bestSeller: "Best seller",
      premium: "Premium",
      flexible: "Flexible",
      honeymoon: "Honeymoon",
    },

    packages: {
      title: "Featured packages",
      subtitle:
        "Asia comes first. For Europe, we guide you through a clean, structured visa process.",
      badgeFeatured: "TOP pick",
      card: {
        duration: "{days} days / {nights} nights",
        startingAt: "${price} {from}",
      },
      modal: {
        title: "Package details",
        includedTitle: "What’s included",
        visaTitle: "Visa note",
        itineraryTitle: "Sample itinerary",
        priceNote:
          "Pricing changes by season, hotel tier, and flight availability.",
        actionPrimary: "Go to Contact",
        actionSecondary: "Visa Consultation",
      },
    },

    destinations: {
      title: "Destinations",
      subtitle:
        "Click a destination to auto-fill filters and jump to packages.",
      tabAsia: "Asia",
      tabEurope: "Europe",
      tileHint: "View packages",
    },

    visa: {
      title: "Visa services",
      subtitle:
        "From a document checklist to appointments — clear steps and support throughout.",
      stepsTitle: "How we help",
      step1Title: "Free document checklist",
      step1Text:
        "We prepare a checklist tailored to your destination and travel purpose.",
      step2Title: "Application preparation",
      step2Text:
        "Forms, supporting notes, and a clean document set aligned to requirements.",
      step3Title: "Appointment guidance",
      step3Text:
        "We explain the center/consulate process, timing, and step-by-step flow.",
      step4Title: "Insurance & booking support",
      step4Text:
        "Insurance, hotel and flight bookings configured to match visa requirements.",
      typesTitle: "Visa types",
      typeTouristTitle: "Tourist / e-visa support",
      typeTouristText:
        "UAE, Turkey, Thailand and more — e-visa and document guidance.",
      typeSchengenTitle: "Schengen visa",
      typeSchengenText:
        "Documents, route, bookings, and a structured submission plan.",
      typeUkTitle: "UK visa",
      typeUkText:
        "Careful preparation for forms, fees, and supporting documents.",
      typeJapanKoreaTitle: "Japan / Korea visa support",
      typeJapanKoreaText:
        "Clear requirements, document list, and experience-based preparation.",
      checklistTitle: "Visa Checklist",
      checklistText:
        "“View checklist” is a download-like UI (no file), showing key items you’ll need.",
      checklistBtn: "View checklist",
      checklistModalTitle: "Quick visa checklist",
      checklistItems: {
        passport: "Passport (valid for at least 6 months)",
        photo: "Biometric photo",
        form: "Application form",
        booking: "Flight & hotel bookings (if required)",
        insurance: "Travel insurance",
        finance: "Financial proof (bank/income)",
        ties: "Ties to home country (job/study/property)",
      },
      requestBtn: "Request consultation",
      noteGreen: "Visa support available",
    },

    whyUs: {
      title: "Why Luxway?",
      subtitle:
        "International expertise, premium service, and a reliable document process.",
      items: {
        flights: {
          title: "Flights & tickets",
          text:
            "Smart options with comfortable schedules and minimal layovers — aligned to your budget.",
        },
        hotels: {
          title: "Verified hotels",
          text:
            "Curated choices by location and service quality — for peace of mind.",
        },
        visa: {
          title: "Visa support",
          text:
            "Applications, bookings, insurance, and a clear plan that keeps things simple.",
        },
        insurance: {
          title: "Insurance",
          text:
            "Coverage matched to your trip format — confidence wherever you go.",
        },
        support: {
          title: "24/7 support",
          text:
            "We stay reachable during your trip with fast responses and help.",
        },
        pricing: {
          title: "Transparent pricing",
          text:
            "You see exactly what’s included. No hidden surprises.",
        },
        payment: {
          title: "Flexible payment",
          text:
            "Depending on the package, we can structure payments in stages.",
        },
        private: {
          title: "Group & private trips",
          text:
            "Family, honeymoon, business, or VIP — tailored itineraries for your goal.",
        },
      },
    },

    reviews: {
      title: "Client reviews",
      subtitle:
        "Real impressions from international trips and visa support experiences.",
      a11yStars: "Rated {stars} stars",
      items: {
        r1: {
          name: "Dilshod A.",
          text:
            "Dubai was perfectly organized: flights, transfers, and hotel all matched our expectations. Visa guidance was clear and on time.",
        },
        r2: {
          name: "Madina K.",
          text:
            "We took Thailand (Phuket + Bangkok). The itinerary was smooth and saved us time. Document advice was genuinely helpful.",
        },
        r3: {
          name: "Rustam S.",
          text:
            "They structured our Schengen package: bookings, insurance, forms. The whole process felt calm and professional.",
        },
        r4: {
          name: "Sabina N.",
          text:
            "We got a consultation for Japan. Requirements, plan, and budget were explained clearly — truly premium service.",
        },
      },
    },

    faq: {
      title: "FAQ",
      subtitle:
        "Quick answers about visas, payments, and travel planning.",
      items: {
        q1: {
          q: "How long does the visa process take?",
          a:
            "Timing depends on the country and season. During consultation we share a realistic estimate and possible acceleration options.",
        },
        q2: {
          q: "Which documents are usually required?",
          a:
            "Typically a passport, photo, application form, financial proof, and travel plan. Some visas also require bookings and insurance.",
        },
        q3: {
          q: "How do payments work?",
          a:
            "Depending on the package, you can pay in full or in stages. We confirm all terms in advance.",
        },
        q4: {
          q: "What is your refund / cancellation policy?",
          a:
            "Refund rules depend on airline and hotel policies. We explain risks up front and help you pick the safest option.",
        },
        q5: {
          q: "When is the best season to travel?",
          a:
            "Seasonality varies by destination. We recommend ideal windows based on your weather preferences and budget.",
        },
        q6: {
          q: "Can I customize a package?",
          a:
            "Yes. We can adjust hotel tier, flights, and itinerary. Tell us your goal and constraints.",
        },
        q7: {
          q: "What if the visa is refused?",
          a:
            "Each case is unique. We prepare documents as correctly as possible. If refused, we analyze the reason and suggest next steps.",
        },
      },
    },

    contact: {
      title: "Contact & request",
      subtitle:
        "Fill the form to get a fast offer. We’ll suggest options for route, budget, and visa needs.",
      formTitle: "Send a request",
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      contactLabel: "Phone or email",
      contactPlaceholder: "+998 … or email",
      interestLabel: "Destination interest",
      interestPlaceholder: "Example: Dubai, Bali, Seoul…",
      messageLabel: "Message",
      messagePlaceholder:
        "Dates, number of travelers, budget, and whether you need a visa",
      consent:
        "By sending, you agree we may use your details to contact you.",
      quickTitle: "Quick chat",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      officeTitle: "Office",
      officeText:
        "Tashkent, Uzbekistan. We focus on international tourism and visa support.",
      emailTitle: "Email",
      phoneTitle: "Phone",
      successTitle: "Request received",
      successText:
        "Thank you! We’ll contact you soon with the best matching options.",
      errors: {
        requiredName: "Please enter your name.",
        requiredContact: "Please enter a phone number or email.",
        invalidContact:
          "This phone/email doesn’t look valid. Please check and try again.",
        requiredMessage: "Please write a message.",
      },
    },

    footer: {
      about:
        "Luxway is an international agency: Asia-first packages, Europe trips, and visa services delivered with a premium approach.",
      links: "Quick links",
      socials: "Social",
      rights: "All rights reserved.",
    },

    a11y: {
      modalLabel: "Package details dialog",
      modalClose: "Close dialog",
      accordionExpand: "Expand answer",
      accordionCollapse: "Collapse answer",
    },

    dict: {
      destinations: {
        turkey_istanbul: "Turkey — Istanbul",
        turkey_antalya: "Turkey — Antalya",
        uae_dubai: "UAE — Dubai",
        uae_abudhabi: "UAE — Abu Dhabi",
        thailand_phuket_bkk: "Thailand — Phuket + Bangkok",
        malaysia_kl_langkawi: "Malaysia — KL + Langkawi",
        indonesia_bali: "Indonesia — Bali",
        singapore: "Singapore",
        korea_seoul: "Korea — Seoul",
        japan_tokyo: "Japan — Tokyo",
        vietnam_danang_hanoi: "Vietnam — Da Nang + Hanoi",
        italy_rome_venice: "Italy — Rome + Venice",
        france_paris: "France — Paris",
        spain_barcelona: "Spain — Barcelona",
        europe_highlights: "Europe — Highlights",
        paris_amsterdam: "Paris + Amsterdam",
      },
    },

    pkg: {
      p1: {
        title: "Istanbul city break",
        subtitle: "History, cuisine, and Bosphorus views",
        visaNote: "E-visa / document guidance is included.",
        itinerary: [
          "Day 1: Arrival, check-in, evening walk",
          "Day 2: Old Town — Hagia Sophia, Sultanahmet, Grand Bazaar",
          "Day 3: Bosphorus cruise and city panoramas",
          "Day 4: Free time, shopping, departure",
        ],
      },
      p2: {
        title: "Antalya beach escape",
        subtitle: "Sea, all-inclusive, and effortless rest",
        visaNote: "Visa consultation and document guidance available.",
        itinerary: [
          "Day 1: Flight, transfer, check-in",
          "Day 2: Relax and enjoy resort services",
          "Day 3: Optional excursion / spa",
          "Day 4: Beach time, evening program",
          "Day 5: Departure",
        ],
      },
      p3: {
        title: "Dubai premium getaway",
        subtitle: "Modern city, shopping, and desert experience",
        visaNote: "UAE tourist visa support is included.",
        itinerary: [
          "Day 1: Arrival, marina walk",
          "Day 2: Burj Khalifa, Dubai Mall, fountains",
          "Day 3: Desert safari and evening show",
          "Day 4: Free day / optional Abu Dhabi",
          "Day 5: Departure",
        ],
      },
      p4: {
        title: "Abu Dhabi + Dubai combo",
        subtitle: "Two cities in one trip",
        visaNote: "Clear visa guidance plus insurance/booking support.",
        itinerary: [
          "Day 1: Dubai, check-in",
          "Day 2: Dubai city tour",
          "Day 3: Abu Dhabi — mosque and museums",
          "Day 4: Beach time / shopping",
          "Day 5: Departure",
        ],
      },
      p5: {
        title: "Thailand: Phuket + Bangkok",
        subtitle: "Beach calm meets city energy",
        visaNote: "Document guidance available; travel insurance recommended.",
        itinerary: [
          "Day 1: Phuket, check-in",
          "Day 2: Island tour (optional)",
          "Day 3: Flight/transfer to Bangkok",
          "Day 4: Temples + street food",
          "Day 5: Shopping and departure",
        ],
      },
      p6: {
        title: "Malaysia: KL + Langkawi",
        subtitle: "Megacity + tropical island",
        visaNote: "Support for documents and route planning is available.",
        itinerary: [
          "Day 1: Kuala Lumpur, city center",
          "Day 2: Petronas, Batu Caves",
          "Day 3: Transfer to Langkawi",
          "Day 4: Beach and relax",
          "Day 5: Departure",
        ],
      },
      p7: {
        title: "Bali honeymoon",
        subtitle: "Romantic villas and tropical mood",
        visaNote: "Indonesia e-visa consultation is available.",
        itinerary: [
          "Day 1: Arrival, villa check-in",
          "Day 2: Ubud and rice terraces",
          "Day 3: Beach club / spa",
          "Day 4: Nusa Penida (optional)",
          "Day 5: Departure",
        ],
      },
      p8: {
        title: "Singapore city luxe",
        subtitle: "Architecture, cleanliness, premium flow",
        visaNote: "We provide guidance on visa requirements and documents.",
        itinerary: [
          "Day 1: Marina Bay, night skyline",
          "Day 2: Gardens by the Bay, sky views",
          "Day 3: Sentosa (optional)",
          "Day 4: Free time, departure",
        ],
      },
      p9: {
        title: "Seoul culture highlights",
        subtitle: "K-pop city + traditional districts",
        visaNote: "Korea visa support available (documents, route, tips).",
        itinerary: [
          "Day 1: Arrival, Hongdae",
          "Day 2: Palace + old town",
          "Day 3: Nami Island (optional)",
          "Day 4: Shopping and departure",
        ],
      },
      p10: {
        title: "Tokyo essentials",
        subtitle: "City rhythm, tech, and food",
        visaNote: "Japan visa preparation based on real experience.",
        itinerary: [
          "Day 1: Shibuya / Shinjuku",
          "Day 2: Asakusa + skyline",
          "Day 3: Disney/Day trip (optional)",
          "Day 4: Free day, departure",
        ],
      },
      p11: {
        title: "Vietnam: Da Nang + Hanoi",
        subtitle: "Nature, sea, and heritage cities",
        visaNote: "Visa requirements guidance + insurance support available.",
        itinerary: [
          "Day 1: Da Nang, check-in",
          "Day 2: Ba Na Hills (optional)",
          "Day 3: Transfer to Hanoi",
          "Day 4: Old Quarter + food tour",
          "Day 5: Departure",
        ],
      },
      p12: {
        title: "Italy: Rome + Venice",
        subtitle: "Classics, art, and canals",
        visaNote:
          "Schengen visa required. Full guidance on documents, bookings, and insurance.",
        itinerary: [
          "Day 1: Rome, historic center",
          "Day 2: Vatican and museums",
          "Day 3: Venice, canal time (optional gondola)",
          "Day 4: Free time, departure",
        ],
      },
      p13: {
        title: "Paris signature",
        subtitle: "Culture, fashion, and romance",
        visaNote: "Schengen visa required. Consultation and preparation available.",
        itinerary: [
          "Day 1: Eiffel area",
          "Day 2: Louvre + Seine walk",
          "Day 3: Day trip (optional)",
          "Day 4: Departure",
        ],
      },
      p14: {
        title: "Spain: Barcelona vibes",
        subtitle: "Sea, architecture, and city soul",
        visaNote: "Schengen visa required. Document support included.",
        itinerary: [
          "Day 1: Gothic Quarter",
          "Day 2: Sagrada Familia + Gaudí route",
          "Day 3: Beach time",
          "Day 4: Departure",
        ],
      },
      p15: {
        title: "Paris + Amsterdam duo",
        subtitle: "Two capitals, one trip",
        visaNote: "Schengen visa required. Appointment and documents guidance included.",
        itinerary: [
          "Day 1: Paris city walk",
          "Day 2: Paris museums",
          "Day 3: Transfer to Amsterdam",
          "Day 4: Canals and city highlights",
          "Day 5: Departure",
        ],
      },
    },
  },
};

// Expose globally for app.js without build tools.
window.TRANSLATIONS = TRANSLATIONS;


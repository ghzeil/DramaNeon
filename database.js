// 1. التعريفات الأساسية (خارج مصفوفة البيانات)
const SERVER_DOMAINS = {
    seek: "https://seekstreaming.com/e/",
};

// 2. مصفوفة البيانات الكاملة للموقع
const myDramaData = [
    // المسلسل الأول: ون بيس
    {
        id: 1,
        title: "ون بيس الموسم الاول",
        category: "أكشن - مغامرة - دراما",
        img: "DramaImages/OnePiece.jpeg",
        rating: "9.8",
        type: "series",
        description: "مغامرات لوفي وطاقمه للبحث عن الكنز الأسطوري ون بيس.",
        top: true,
        trailer: "https://www.youtube.com/embed/1ES_oZVdkC4",
        episodes: [
            { id: 1, title: "الحلقة 1", servers: [{ name: "سيرفر نيون ", url: "https://dramaneon.embedseek.com/#i6vvq" }] },
            { id: 2, title: "الحلقة 2", servers: [{ name: "سيرفر نيون ", url: "https://dramaneon.embedseek.com/#6n85o" }] }
        ]
    },

    // المسلسل الثاني: الخلاط+
    {
        id: 3,
        title: "الخلاط+",
        category: "كوميديا",
        img: "DramaImages/ALkhallat+.jpg",
        rating: "6.6",
        type: "series",
        description: "يعود الخلاط+ في موسم 2026 ليقدم سلسلة من الحكايات المنفصلة التي تخلط الكوميديا السوداء بالإثارة.",
        top: true,
        trailer: "https://www.youtube.com/embed/7FsdZz9z8Zs",
        episodes: [
            { id: 1, title: "الحلقة 1", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#hpf8a" }] },
            { id: 2, title: "الحلقة 2", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#tgrii" }] },
            { id: 3, title: "الحلقة 3", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#nxagf" }] },
            { id: 4, title: "الحلقة 4", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#6nktn" }] }
        ]
    },

    // المسلسل الثالث: From
    {
        id: 4,
        title: "From",
        type: "series",
        top: true,
        img: "DramaImages/From1.jpg", 
        rating: "7.7",
        seasons: [
            {
                seasonNumber: 1,
                seasonTitle: "الموسم الاول",
                category: "دراما رعب غموض",
                img: "DramaImages/From1.jpg",
                rating: "7.7",
                description: "مدينة مرعبة تحاصر كل من يدخلها.",
                trailer: "https://www.youtube.com/embed/pDHqAj4eJcM",
                top: true,
                episodes: [
                    { id: 1, title: "الحلقة 1", url: "https://dramaneon.embedseek.com/#hpf8a" },
                    { id: 2, title: "الحلقة 2", url: "https://dramaneon.embedseek.com/#tgrii" },
                    { id: 3, title: "الحلقة 3", url: "https://dramaneon.embedseek.com/#nxagf" },
                    { id: 4, title: "الحلقة 4", url: "https://dramaneon.embedseek.com/#6nktn" }
                ]
            },
            {
                seasonNumber: 2,
                seasonTitle: "الموسم الثاني",
                category: "دراما رعب غموض",
                img: "DramaImages/From2.jpg",
                rating: "8.1",
                description: "تتمة أحداث الموسم الأول وكشف المزيد من الأسرار.",
                trailer: "https://www.youtube.com/embed/pDHqAj4eJcM",
                top: false,
                episodes: [
                    { id: 1, title: "الحلقة 1", url: "https://dramaneon.embedseek.com/#nxagf" }
                ]
            }
        ]
    },

    // المسلسل الرابع: كحيلان
    {
        id: 5,
        title: "كحيلان",
        category: "دراما",
        img: "DramaImages/Kehelan.jpg",
        rating: "9.8",
        type: "series",
        description: "عمل درامي تاريخي بدوي ملحمي، تقع أحداثه في بادية نجد حوالي عام 1700 ميلادي. تدور القصة حول صراع بين بطلين من قبيلة واحدة حول القوة والنفوذ، ويرتبط الاسم بسلالة خيول عربية نادرة يشتد التنافس عليها.",
        top: true,
        trailer: "", 
        episodes: [
            { id: 1, title: "الحلقة 18", servers: [{ name: "تشغيل محلي", url: "DramaImages/Series/Kehelan/Kehelan.E18.mp4" }] },
            { id: 2, title: "الحلقة 19", servers: [{ name: "تشغيل محلي", url: "DramaImages/Series/Kehelan/Kehelan.E19.mp4" }] },
            { id: 3, title: "الحلقة 20", servers: [{ name: "تشغيل محلي", url: "DramaImages/Series/Kehelan/Kehelan.E20.mp4" }] },
            { id: 4, title: "الحلقة 21", servers: [{ name: "تشغيل محلي", url: "DramaImages/Series/Kehelan/Kehelan.E21.mp4" }] },
            { id: 5, title: "الحلقة 22", servers: [{ name: "تشغيل محلي", url: "DramaImages/Series/Kehelan/Kehelan.E22.mp4" }] },
            { id: 6, title: "الحلقة 23", servers: [{ name: "تشغيل محلي", url: "DramaImages/Series/Kehelan/Kehelan.E23.mp4" }] },
            { id: 7, title: "الحلقة 24", servers: [{ name: "تشغيل محلي", url: "DramaImages/Series/Kehelan/Kehelan.E24.mp4" }] },
            { id: 8, title: "الحلقة 25", servers: [{ name: "تشغيل محلي", url: "DramaImages/Series/Kehelan/Kehelan.E25.mp4" }] }
        ]
    },

    // المسلسل الخامس: The Mentalist (تم تصحيح الأخطاء وإغلاق الأقواس)
   // المسلسل الخامس: The Mentalist (مكتمل المواسم)
    {
        id: 6,
        title: "The Mentalist",
        type: "series",
        top: true,
        img: "DramaImages/TheMentalist.jpg", 
        rating: "8.2",
        seasons: [
            {
                seasonNumber: 1,
                seasonTitle: "الموسم الأول",
                category: "جريمة - دراما - غموض",
                img: "DramaImages/TheMentalist_S1.jpg",
                rating: "8.2",
                description: "انطلاق باتريك جين مع فريق CSI لحل الجرائم الملتوية والبحث عن القاتل ريد جون.",
                trailer: "https://www.youtube.com/embed/nn2Q69pSC_M",
                top: true,
                episodes: [
                    { id: 1, title: "الحلقة 1", servers: [{ name: "سيرفر نيون", url: "https://updown.cam/embed-9of9vssojowz-1920x1072.html" }] },
                    { id: 2, title: "الحلقة 2", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#tgrii" }] },
                    { id: 3, title: "الحلقة 3", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#nxagf" }] },
                    { id: 4, title: "الحلقة 4", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#6nktn" }] }
                ]
            },
            {
                seasonNumber: 2,
                seasonTitle: "الموسم الثاني",
                category: "جريمة - دراما - غموض",
                img: "DramaImages/TheMentalist_S2.jpg",
                rating: "8.3",
                description: "تستمر التحقيقات المعقدة واقتراب باتريك خطوة إضافية من كشف هوية ريد جون.",
                trailer: "https://www.youtube.com/embed/nn2Q69pSC_M",
                top: false,
                episodes: [
                    { id: 1, title: "الحلقة 1", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#hpf8a" }] }
                ]
            },
            {
                seasonNumber: 3,
                seasonTitle: "الموسم الثالث",
                category: "جريمة - دراما - غموض",
                img: "DramaImages/TheMentalist_S3.jpg",
                rating: "8.4",
                description: "تصاعد المواجهة وتزايد الخطر حول فريق التحقيقات.",
                trailer: "https://www.youtube.com/embed/nn2Q69pSC_M",
                top: false,
                episodes: [
                    { id: 1, title: "الحلقة 1", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#hpf8a" }] }
                ]
            },
            {
                seasonNumber: 4,
                seasonTitle: "الموسم الرابع",
                category: "جريمة - دراما - غموض",
                img: "DramaImages/TheMentalist_S4.jpg",
                rating: "8.3",
                description: "تطورات جديدة في قضايا المكتب وتجاوز باتريك لتبعات القضايا السابقة.",
                trailer: "https://www.youtube.com/embed/nn2Q69pSC_M",
                top: false,
                episodes: [
                    { id: 1, title: "الحلقة 1", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#hpf8a" }] }
                ]
            },
            {
                seasonNumber: 5,
                seasonTitle: "الموسم الخامس",
                category: "جريمة - دراما - غموض",
                img: "DramaImages/TheMentalist_S5.jpg",
                rating: "8.4",
                description: "تضييق الخناق وقائمة المشتبه بهم تتقلص للوصول إلى الحقيقة.",
                trailer: "https://www.youtube.com/embed/nn2Q69pSC_M",
                top: false,
                episodes: [
                    { id: 1, title: "الحلقة 1", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#hpf8a" }] }
                ]
            },
            {
                seasonNumber: 6,
                seasonTitle: "الموسم السادس",
                category: "جريمة - دراما - غموض",
                img: "DramaImages/TheMentalist_S6.jpg",
                rating: "8.5",
                description: "موسم حاسم يكشف فيه اللغز الأكبر وحقيقة القاتل المتسلسل.",
                trailer: "https://www.youtube.com/embed/nn2Q69pSC_M",
                top: false,
                episodes: [
                    { id: 1, title: "الحلقة 1", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#hpf8a" }] }
                ]
            },
            {
                seasonNumber: 7,
                seasonTitle: "الموسم السابع",
                category: "جريمة - دراما - غموض",
                img: "DramaImages/TheMentalist_S7.jpg",
                rating: "8.2",
                description: "الموسم الأخير وخاتمة الملحمة بين باتريك وجين وفريق العمل.",
                trailer: "https://www.youtube.com/embed/nn2Q69pSC_M",
                top: false,
                episodes: [
                    { id: 1, title: "الحلقة 1", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#hpf8a" }] }
                ]
            }
        ]
    }
];

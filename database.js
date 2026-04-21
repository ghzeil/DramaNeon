// 1. التعريفات الأساسية
const SERVER_DOMAINS = {
    seek: "https://seekstreaming.com/e/",
};

// 2. مصفوفة البيانات (تم إصلاح تداخل الأقواس هنا)
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
            { id: 2, title: "الحلقة 2", servers: [{ name: "سيرفر نيون ", url: "https://dramaneon.embedseek.com/#6n85o" }] },
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

    // المسلسل الرابع: كحيلان (تم إخراجه من مصفوفة مواسم From وإصلاح القواعد)
    {
        id: 5,
        title: "كحيلان",
        category: "دراما",
        img: "DramaImages/Kehelan.jpg",
        rating: "9.8",
        type: "series",
        description: "قبل نحو قرنين من الزمن، وفي عالم قبلي تحكمه العادات ومنطق القوة وسط نجد، يشتعل فتيل صراع بين فارسين بدويين تربطهما صلة الدم وتفرقهما مطامح الزعامة، فيما تتسلل خيوط العشق والمكائد لتصب الزيت على نار صراع لا يحمد عقباه.",
        top: true,
        trailer: "",
      episodes: [
  { id: 1,  title: " الحلقة 1", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#56zwm" }] },
  { id: 2,  title: " الحلقة 2", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#pyckr" }] },
  { id: 3,  title: " الحلقة 3", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#md9hx" }] },
  { id: 4,  title: " الحلقة 4", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#l9fmu" }] },
  { id: 5,  title: " الحلقة 5", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#uw5re" }] },
  { id: 6,  title: " الحلقة 6", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#sg8fb" }] },
  { id: 7,  title: " الحلقة 7", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#kuygd" }] },
  { id: 8,  title: " الحلقة 8", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#6v3ds" }] },
  { id: 9,  title: " الحلقة 9", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#oztls" }] },
  { id: 10, title: "الحلقة 10", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#56zme" }] },
  { id: 11, title: "الحلقة 11", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#amlzn" }] },
  { id: 12, title: "الحلقة 12", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#9nirw" }] },
  { id: 13, title: "الحلقة 13", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#56zmt" }] },
  { id: 14, title: "الحلقة 14", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#jfs8s" }] },
  { id: 15, title: "الحلقة 15", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#hjdnr" }] },
  { id: 16, title: "الحلقة 16", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#n8bhu" }] },
  { id: 17, title: "الحلقة 17", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#3prw1" }] },
  { id: 18, title: "الحلقة 18", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#py3zy" }] },
  { id: 19, title: "الحلقة 19", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#56ypj" }] },
  { id: 20, title: "الحلقة 20", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#ozcr3" }] },
  { id: 21, title: "الحلقة 21", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#ibfjz" }] },
  { id: 22, title: "الحلقة 22", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#6v5y3" }] },
  { id: 23, title: "الحلقة 23", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#kuv6q" }] },
  { id: 24, title: "الحلقة 24", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#ertxe" }] },
  { id: 25, title: "الحلقة 25", servers: [{ name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#8an6l" }] },
]
    }
];

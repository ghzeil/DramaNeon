// 1. التعريفات الأساسية (خارج المصفوفة)
const SERVER_DOMAINS = {
    seek: "https://seekstreaming.com/e/",
   
};

// 2. مصفوفة البيانات
const myDramaData = [
    {
        id: 1,
        title: "ون بيس الموسم الاول",
        category: "أكشن - مغامرة - دراما",
        img: "DramaImages/OnePiece.jpeg",
        rating: "9.8",
        type: "series",
        description: "مغامرات لوفي وطاقمه للبحث عن الكنز الأسطوري ون بيس.",
        top: true,
        trailer: "https://www.youtube.com/watch?v=1ES_oZVdkC4",
        episodes: [
            {
                id: 1,
                title: "الحلقة 1",
                servers: [
                    {
                        name: "سيرفر نيون ",
                        url: "https://dramaneon.embedseek.com/#i6vvq"
                    },

                ]
            }, // نهاية الحلقة 1


            {
                id: 2,
                title: "الحلقة 2",
                servers: [
                    {
                        name: "سيرفر نيون ",
                        url: "https://dramaneon.embedseek.com/#6n85o"
                    }
                ]
            }, // نهاية الحلقة 2
        ]
    },
    //المسلسل التالي
    {
        id: 3,
        title: "الخلاط+",
        category: "كوميديا",
        img: "DramaImages/ALkhallat+.jpg",
        rating: "6.6",
        type: "series",
        description: "يعود الخلاط+ في موسم 2026 ليقدم سلسلة من الحكايات المنفصلة التي تخلط الكوميديا السوداء بالإثارة.",
        top: true,
        trailer: "https://www.youtube.com/watch?v=7FsdZz9z8Zs",
        episodes: [
            {
                id: 1,
                title: "الحلقة 1",
                servers: [
                    { name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#hpf8a" }
                ]
            }, // نهاية الحلقة 1
            {
                id: 2,
                title: "الحلقة 2",
                servers: [
                    { name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#tgrii" }
                ]
            }, // نهاية الحلقة 2
            {
                id: 3,
                title: "الحلقة 3",
                servers: [
                    { name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#nxagf" }
                ]
            }, // نهاية الحلقة 3
            {
                id: 4,
                title: "الحلقة 4",
                servers: [
                    { name: "سيرفر نيون", url: "https://dramaneon.embedseek.com/#6nktn" }
                ]
            } // نهاية الحلقة 4
        ]
    }
];
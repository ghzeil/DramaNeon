<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>تفاصيل العمل - DRAMA NEON</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Monoton&display=swap" rel="stylesheet">
    <style>
        :root {
            --main-bg: #050505;
            --neon-purple: #bc13fe;
            --dark-purple: #1a0033;
        }

        body {
            background-color: var(--main-bg);
            color: white;
            font-family: 'Cairo', sans-serif;
            margin: 0;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 50px;
            background: #0a0014;
            border-bottom: 2px solid var(--neon-purple);
            box-shadow: 0 0 15px var(--neon-purple);
        }

        .logo {
            font-family: 'Monoton', cursive;
            font-size: 32px;
            color: var(--neon-purple);
            text-shadow: 0 0 10px var(--neon-purple);
            text-decoration: none;
        }

        .container {
            display: flex;
            padding: 60px 50px;
            gap: 50px;
            max-width: 1200px;
            margin: auto;
        }

        .poster-side {
            width: 350px;
            flex-shrink: 0;
            text-align: center;
        }

        .poster-side img {
            width: 100%;
            border-radius: 20px;
            box-shadow: 0 0 30px var(--neon-purple);
            border: 1px solid var(--neon-purple);
        }

        .info-side {
            flex: 1;
        }

        .info-side h1 {
            font-size: 50px;
            margin: 0 0 10px 0;
            color: var(--neon-purple);
            text-shadow: 0 0 10px var(--neon-purple);
        }

        .category-tag {
            background: var(--dark-purple);
            padding: 5px 15px;
            border-radius: 20px;
            border: 1px solid var(--neon-purple);
            font-size: 14px;
            display: inline-block;
            margin-bottom: 20px;
        }

        .neon-btn {
            display: inline-block;
            padding: 12px 35px;
            border: 2px solid var(--neon-purple);
            color: var(--neon-purple);
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: 0.3s;
            cursor: pointer;
            background: none;
        }

        .neon-btn:hover {
            background: var(--neon-purple);
            color: white;
            box-shadow: 0 0 25px var(--neon-purple);
            transform: scale(1.05);
        }

        .trailer-link {
            display: block;
            margin-top: 15px;
            color: #aaa;
            text-decoration: none;
            font-size: 14px;
        }

        .trailer-link:hover {
            color: var(--neon-purple);
        }

        .seasons-container {
            margin-top: 40px;
        }

        .seasons-select {
            background: #111;
            color: white;
            border: 1px solid var(--neon-purple);
            padding: 10px;
            width: 200px;
            font-family: 'Cairo', sans-serif;
            border-radius: 5px;
            outline: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <header><a href="index.html" class="logo">DRAMA NEON</a></header>
    <div class="container" id="details-content"></div>

    <script src="database.js"></script>
    <script>
        const params = new URLSearchParams(window.location.search);
        const itemId = params.get('id');
        const item = myDramaData.find(x => x.id == itemId);

        if (item) {
            // التحقق مما إذا كان العمل يحتوي على مواسم متعددة أم موسم واحد عادي
            const hasSeasons = item.seasons && item.seasons.length > 0;
            
            // في حال وجود مواسم، نأخذ بيانات الموسم الأول افتراضياً، وإلا نأخذ بيانات العمل الأساسية
            let currentData = hasSeasons ? item.seasons[0] : item;

            // دالة مخصصة لتحديث واجهة المستخدم بالبيانات المحددة
            function renderDetails(data) {
                // نستخدم عنوان العمل الرئيسي للمسلسل، ونضيف له اسم الموسم إن وجد
                const displayTitle = hasSeasons ? `${item.title} - ${data.seasonTitle}` : data.title;

                document.getElementById('details-content').innerHTML = `
                    <div class="poster-side">
                        <img src="${data.img}" onerror="this.src='https://via.placeholder.com/350x500?text=Image+Error'">
                        ${data.trailer ? `<a href="${data.trailer}" target="_blank" class="trailer-link">▶ مشاهدة التريلر الرسمي</a>` : ''}
                    </div>
                    <div class="info-side">
                        <h1>${displayTitle}</h1>
                        <div class="category-tag">${data.category || 'دراما'}</div>
                        <p style="font-size:18px; line-height:1.8; color:#ccc;">${data.description || 'لا يوجد وصف متاح حالياً.'}</p>
                        <a href="watch.html?id=${item.id}${hasSeasons ? `&season=${data.seasonNumber}` : ''}&ep=1" class="neon-btn">شاهد الآن</a>
                        
                        <div class="seasons-container" id="seasons-selector-wrapper">
                            <h3>المواسم</h3>
                            <select class="seasons-select" id="season-chooser">
                                </select>
                        </div>
                    </div>
                `;

                // التحكم في قائمة اختيار المواسم
                const selectElement = document.getElementById('season-chooser');
                if (hasSeasons) {
                    // تعبئة القائمة بالمواسم المتاحة من مصفوفة seasons
                    item.seasons.forEach((s, index) => {
                        const option = document.createElement('option');
                        option.value = index;
                        option.textContent = s.seasonTitle;
                        if (s.seasonNumber === data.seasonNumber) {
                            option.selected = true;
                        }
                        selectElement.appendChild(option);
                    });

                    // إضافة حدث للاستماع عند تغيير الموسم
                    selectElement.addEventListener('change', function() {
                        const selectedSeasonIndex = this.value;
                        renderDetails(item.seasons[selectedSeasonIndex]);
                    });
                } else {
                    // إذا كان المسلسل عادي (موسم واحد)، نظهر خيار واحد ثابت أو نخفي القائمة بالكامل
                    selectElement.innerHTML = `<option>الموسم 1</option>`;
                }
            }

            // تشغيل الدالة لأول مرة عند تحميل الصفحة
            renderDetails(currentData);
        } else {
            document.getElementById('details-content').innerHTML = `<h2 style="text-align:center; width:100%;">عذراً، لم يتم العثور على العمل المطلوبة.</h2>`;
        }
    </script>
</body>
</html>

function CityList(state) {
    var cities = {
        1: ["تهران", "شمیرانات", "ری", "اسلام‌شهر", "شهریار", "ورامین", "قرچک", "پاکدشت", "رباط‌کریم", "بهارستان", "ملارد", "قدس", "دماوند", "فیروزکوه", "بومهن"],
        2: ["رشت", "انزلی", "لاهیجان", "لنگرود", "رودسر", "تالش", "آستارا", "آستانه اشرفیه", "صومعه‌سرا", "رودبار", "فومن", "شفت", "ماسال", "رضوانشهر"],
        3: ["تبریز", "مراغه", "مرند", "میانه", "اهر", "شبستر", "بستان‌آباد", "هشترود", "اسکو", "سراب", "جلفا", "آذرشهر", "بناب", "عجب‌شیر", "ورزقان"],
        4: ["اهواز", "آبادان", "دزفول", "خرمشهر", "اندیمشک", "بهبهان", "ماهشهر", "شوشتر", "شوش", "مسجدسلیمان", "شادگان", "ایذه", "رامهرمز", "بندر امام خمینی", "امیدیه"],
        5: ["شیراز", "مرودشت", "کازرون", "جهرم", "لار", "فسا", "داراب", "آباده", "اقلید", "نی‌ریز", "ممسنی", "سپیدان", "زرین‌دشت", "استهبان", "فیروزآباد"],
        6: ["اصفهان", "کاشان", "نجف‌آباد", "خمینی‌شهر", "شاهین‌شهر", "فلاورجان", "نطنز", "گلپایگان", "فریدن", "سمیرم", "شهرضا", "مبارکه", "تیران و کرون", "لنجان", "اردستان"],
        7: ["مشهد", "نیشابور", "سبزوار", "تربت حیدریه", "قوچان", "کاشمر", "فریمان", "چناران", "خواف", "تربت جام", "گناباد", "سرخس", "بردسکن", "طرقبه و شاندیز", "درگز"],
        8: ["قزوین", "البرز", "آبیک", "تاکستان", "بویین زهرا", "اوج", "آبگرم", "سیردان", "قزوین"],
        9: ["سمنان", "شاهرود", "دامغان", "گرمسار", "مهدی‌شهر", "میامی", "آرادان"],
        10: ["قم"],
        11: ["اراک", "خمین", "ساوه", "محلات", "دلیجان", "تفرش", "آشتیان", "شازند", "کمیجان", "خنداب"],
        12: ["زنجان", "ابهر", "خدابنده", "خرمدره", "سلطانیه", "ماهنشان", "طارم"],
        13: ["ساری", "بابل", "آمل", "قائم‌شهر", "نوشهر", "چالوس", "بهشهر", "تنکابن", "بابلسر", "نور", "محمودآباد", "فریدونکنار", "رامسر", "جویبار", "سوادکوه"],
        14: ["گرگان", "گنبد کاووس", "علی‌آباد کتول", "آق‌قلا", "بندر ترکمن", "مینودشت", "کردکوی", "گالیکش", "کلاله", "بندر گز", "رامیان", "مراوه‌تپه"],
        15: ["اردبیل", "مشگین‌شهر", "خلخال", "پارس‌آباد", "گرمی", "بیله‌سوار", "نیر", "سرعین", "کوثر"],
        16: ["ارومیه", "خوی", "میاندوآب", "بوکان", "مهاباد", "سلماس", "پیرانشهر", "شاهین‌دژ", "ماکو", "نقده", "سردشت", "اشنویه", "چالدران", "تکاب", "شوط"],
        17: ["همدان", "ملایر", "نهاوند", "بروجرد", "اسدآباد", "تویسرکان", "رزن", "فامنین", "کبودرآهنگ"],
        18: ["سنندج", "سقز", "مریوان", "بانه", "بیجار", "قروه", "دیواندره", "کامیاران", "دهگلان"],
        19: ["کرمانشاه", "اسلام‌آباد غرب", "هرسین", "کنگاور", "سنقر", "صحنه", "قصر شیرین", "گیلانغرب", "جوانرود", "سرپل ذهاب", "پاوه"],
        20: ["خرم‌آباد", "بروجرد", "دورود", "الیگودرز", "ازنا", "کوهدشت", "پلدختر", "الشتر", "نورآباد"],
        21: ["بوشهر", "کنگان", "گناوه", "دیر", "جم", "دشتستان", "دشتی", "تنگستان"],
        22: ["کرمان", "رفسنجان", "جیرفت", "بم", "زرند", "سیرجان", "شهربابک", "بردسیر", "عنبرآباد", "راور", "بافت", "کهنوج"],
        23: ["بندرعباس", "میناب", "قشم", "بندر لنگه", "بستک", "حاجی‌آباد", "پارسیان", "جاسک", "خمیر"],
        24: ["شهرکرد", "بروجن", "فارسان", "لردگان", "اردل", "کیار", "سامان", "کوهرنگ"],
        25: ["یزد", "میبد", "اردکان", "تفت", "مهریز", "ابرکوه", "بافق", "هرات", "خاتم"],
        26: ["زاهدان", "چابهار", "زابل", "ایرانشهر", "خاش", "سراوان", "سرباز", "نیک‌شهر", "کنارک", "زهک", "هیرمند", "فنوج", "قصرقند", "میرجاوه"],
        27: ["ایلام", "دهلران", "آبدانان", "ایوان", "مهران", "ملکشاهی", "چرداول", "دره‌شهر", "بدره"],
        28: ["یاسوج", "دوگنبدان", "دهدشت", "باشت", "لیکک", "سی‌سخت", "چرام", "لنده"],
        29: ["بجنورد", "اسفراین", "شیروان", "فاروج", "مانه و سملقان", "جاجرم", "گرمه"],
        30: ["بیرجند", "قائن", "طبس", "فردوس", "نهبندان", "سرایان", "بشرویه", "درمیان"],
        31: ["کرج", "فردیس", "نظرآباد", "ساوجبلاغ", "طالقان", "اشتهارد", "محمدشهر"]
    };
    var citySelect = document.getElementById("city");
    citySelect.innerHTML = '<option value="0">لطفا شهر را انتخاب نمایید</option>'; // پاک کردن شهرهای قبلی

    if (state != "0") {
        var selectedCities = cities[state];
        for (var i = 0; i < selectedCities.length; i++) {
            var option = document.createElement("option");
            option.value = selectedCities[i];
            option.text = selectedCities[i];
            citySelect.appendChild(option);
        }
    }
}
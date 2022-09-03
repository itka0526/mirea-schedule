// 6 пар максимум,6 дней, 6x6=36, нечетные и четные, 36x2=72

// a4-16, a16-28, a28-40, a40-52, a52-64, a64-76 +12 each time

/**
 * {
 *  day: {
 *    lessonNumber: {
 *      chetnii: "",
 *      nechetnii: ""
 *    }
 *  }
 * }
 */

export default function scheduleFormatter(jsonifiedExcel) {
    var n = 4;

    var lookup = {
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота",
        7: "Воскресенье",
    };
    var temp = {
        Понедельник: [],
        Вторник: [],
        Среда: [],
        Четверг: [],
        Пятница: [],
        Суббота: [],
        Воскресенье: [],
    };

    for (let days = 0; days < 6; days++) {
        //console.log(`BETWEEN: ${n}... ${n + 12}`);
        for (let i = n; i < n + 12; i++) {
            const key = lookup[days + 1];
            temp[key].push({
                указательНедели: jsonifiedExcel[`E${i}`],
                урок: jsonifiedExcel[`F${i}`],
            });
        }

        n += 12;
    }

    return temp;
}

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

export default function scheduleFormatter(jsonifiedExcel, letters) {
    var n = 4;
    var headLetters = letters.split("");

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

    const E = headLetters[0], // odd_or_even
        C = headLetters[1], // start time
        D = headLetters[2], // end time
        B = headLetters[3], // lesson_number
        F = headLetters[4], // lesson
        G = headLetters[5], // typeof_lesson
        H = headLetters[6], // teacher_names
        I = headLetters[7]; // auditorium

    for (let days = 0; days < 6; days++) {
        //console.log(`BETWEEN: ${n}... ${n + 12}`);
        for (let i = n; i < n + 12; i++) {
            const key = lookup[days + 1];
            temp[key].push({
                time:
                    jsonifiedExcel[`${E}${i}`]?.v === "I"
                        ? `${jsonifiedExcel[`${C}${i}`]?.v.replaceAll(
                              "-",
                              ":"
                          )} - ${jsonifiedExcel[`${D}${i}`]?.v.replaceAll(
                              "-",
                              ":"
                          )}`
                        : `${jsonifiedExcel[`${C}${i - 1}`]?.v.replaceAll(
                              "-",
                              ":"
                          )} - ${jsonifiedExcel[`${D}${i - 1}`]?.v.replaceAll(
                              "-",
                              ":"
                          )}`,
                lesson_number:
                    jsonifiedExcel[`${E}${i}`]?.v === "I"
                        ? jsonifiedExcel[`${B}${i}`]?.v
                        : jsonifiedExcel[`${B}${i - 1}`]?.v,
                even_or_odd: jsonifiedExcel[`${E}${i}`]?.v,
                lesson: jsonifiedExcel[`${F}${i}`]?.v
                    ? jsonifiedExcel[`${F}${i}`].v
                    : null,
                typeof_lesson: jsonifiedExcel[`${G}${i}`]?.v
                    ? jsonifiedExcel[`${G}${i}`].v
                    : null,
                teacher_names: jsonifiedExcel[`${H}${i}`]?.v
                    ? jsonifiedExcel[`${H}${i}`].v
                    : null,
                auditorium: jsonifiedExcel[`${I}${i}`]?.v
                    ? jsonifiedExcel[`${I}${i}`].v
                    : null,
            });
        }

        n += 12;
    }

    console.log(temp);
    return temp;
}

let textsArr=[
    "Не рахуй дні, роби так, щоб дні мали значення. – Мухаммед Алі",
    "Єдиний спосіб зробити щось добре – любити те, що робиш. – Стів Джобс",
    "Щастя – це не щось готове. Воно походить від твоїх власних дій. – Далай-лама",
    "Успіх – це здатність рухатися від однієї невдачі до іншої без втрати ентузіазму. – Вінстон Черчилль",
    "Великі мрії починаються з маленьких кроків. – Наполеон Гілл",
    "Тільки той, хто ризикує, може по-справжньому жити. – Вільям Фолкнер",
    "Завжди здається неможливим, поки не зробиш. – Нельсон Мандела",
    "Життя – це 10% того, що з тобою відбувається, і 90% того, як ти на це реагуєш. – Чарльз Свіндолл",
    "Ти стаєш тим, про що думаєш більшу частину часу. – Ерл Найтінгейл",
    "Не бійся досконалості – тобі її не досягти. – Сальвадор Далі",
    "Не бійтеся змін – вони дають можливість почати нову історію. – Ліна Костенко",
    "Тільки той, хто живе, може іти до мети. – Іван Франко",
    "Жити треба так, щоб ніколи не було соромно за свої вчинки. – Тарас Шевченко",
    "Якщо не можеш змінити ситуацію, змінюй своє ставлення до неї. – Василь Симоненко",
    "Людина, яка втрачає надію, перестає бути людиною. – Олесь Гончар",
    "Мрійте, але не забувайте працювати над своїми мріями. – Віктор Гюго",
    "Хто не любить життя, той не може любити і людей. – Олександр Довженко",
    "Немає нічого більш вільного, ніж душа, яка не залежить від грошей. – Григорій Сковорода",
    "Істинне багатство – це не в золоті, а в щасті. – Леонід Глібов",
    "Іди до своєї мети, навіть якщо весь світ стає тобі на заваді. – Василь Стус"
]

document.write('<div class="container">');
for (let i = 0; i < 10; i += 1) {
    let randomText = textsArr[Math.floor(Math.random() * textsArr.length)];
    document.write(`<div style="padding: 10px; margin: 5px; max-width: fit-content; background-color: lightblue; border-radius: 5px;">
                        ${randomText}
                    </div>`);
}

document.write('</div>');
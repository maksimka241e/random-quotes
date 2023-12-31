let title = document.getElementById("title")
let wrapper = document.getElementById("wrapper")
let btn = document.getElementById("btn")
let quotes;
btn.addEventListener("click", randomQu)

let h5 = document.createElement("h5")
wrapper.appendChild(h5)
h5.innerHTML = `${getrandomQuotes()}`
h5.id = "title"

 function randomQu(){
    h5.innerHTML =  `${getrandomQuotes()}`
    localStorage.setItem("quotes",JSON.stringify(h5.innerHTML))
}

function getrandomQuotes(){
   quotes = [
        "Никогда не заводи дружбу с человеком, который не лучше тебя - Конфуций",
        "Разум наполняется идеями только с опытом - Джон Локк",
        "Не объясняй свою философию. Воплощай ее – Эпиктет",
        "Неважно, как медленно ты идешь, пока не останавливаешься – Конфуций",
        "От земли до звезд не существует простого пути - Сенека",
        "Знание, если оно не определяет действия, мертво - Плотин",
        "Великие дела обычно совершаются с большим риском - Геродот",
        "Спешка в каждом деле приносит неудачи – Геродот",
        "Никакие знания человека не могут выйти за рамки его опыта – Джон Локк",
        "Начало - важнейшая часть работы – Платон",
        "Без музыки жизнь была бы ошибкой - Ницше",
        "Пламя, которое горит вдвое ярче, горит вдвое дольшe – Лао Цзы",
        "Если вы ненавидите человека, то вы побеждены им - Конфуций",
        "Муравей на ходу делает больше, чем дремлющий бык - Сократ",
        "Счастье - высшее благо – Аристотель",
        "Великие поступки состоят из мелких дел – Сократ",
        "Счастье зависит от нас самих – Аристотель",
        "Живи каждый день своей жизни - Джонатан Свифт",
        "Чем труднее, тем больше славы в преодолении - Эпикур",
        "Прошлое не имеет власти над настоящим - Экхарт Толле",
        "Жизнь очень проста, но мы настоятельно усложняем ее – Конфуций",
        "Никогда не осуждайте человека, пока не пройдете долгий путь в его ботинках - Лао-Цзы",
        "Картина которую ты видишь в своем разуме, со временем станет твоей жизнью - А. Шопенгауэр",
        "Кто полон желаний и надежд, тот уже живет в будущем - Л. Шеффер",
        "Удовольствие от работы создает совершенство в работе - Аристотель",
        "Слабые никогда не прощают. Умение прощать — свойство сильных - М. Ганди",
        "В жизни нет безвыходных ситуаций, есть только непринятые решения - О. Рой",
        "Перед тем как излить душу, убедитесь что «сосуд», не протекает - Д.Б. Шоу",
        "Люди одиноки, потомy что вместо мостов они стpоят стены - С. Е. Лец",
        "Чтобы вы ни делали, делайте это хорошо - У. Дисней",
        "Нужно не тратить время, а инвестировать в него - С. Кови",
        "Ты никогда не переплывешь океан, если будешь бояться потерять берег из вид - Х. Колумб",
        "Фантазия напоминает паровую машину такой силы, что может и котел лопнуть - Иван Гончаров",
        "Чем меньше имеет значения мнение людей, тем сильнее чувствуется Бог - Лев Толстой",
        "Любовь настолько сильна, что может изменить нас самих - Фёдор Достоевский",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}
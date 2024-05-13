let currentYear = Number(new Date().getFullYear());
let dateBirthday = Number(prompt('Рік народження?'));
let city = prompt('В якому місті ви проживаєте?');
let hobby = prompt('Улюблений вид спорту?');

let dateBirthdayAnsv = currentYear - currentYear

switch (city) {
    case 'Київ':
        cityPerson = 'Ти живеш у столиці України';
        break;
    case 'Вашингтон':
        cityPerson = 'Ти живеш у столиці США';
        break;
    case 'Лондон':
        cityPerson = 'Ти живеш у столиці Англії';
        break;
    case null :
        cityPerson = 'А не скажу я місто'
        break;
    default:
        cityPerson = `Ти живеш у місті ${city}`;
        break;
}

if (dateBirthday === null || city === null || hobby === null) {
    let message = "Шкода, що Ви не захотіли ввести свій(ю) ";
    if (dateBirthday === undefined || isNaN(dateBirthday)) {
        message += "дату народження";
    }
    if (city === null) {
        message += " місто";
    }
    if (hobby === null) {
        message += " вид спорту";
    }
    alert(`${message} (`);
}

confirm(`${dateBirthdayAnsv} років, ${cityPerson}`);

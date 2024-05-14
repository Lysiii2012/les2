let currentYear = Number(new Date().getFullYear());
let dateBirthday = Number(prompt('Рік народження?'));
let city = prompt('В якому місті ви проживаєте?');
let hobby = prompt('Улюблений вид спорту?');

let dateBirthdayAnsv = currentYear - dateBirthday;

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
    case null:
        cityPerson = 'Не скажу';
        break;
    default:
        cityPerson = `Ти живеш у місті ${city}`;
        break;
}


switch (hobby) {
    case 'футбол':
        hobby = 'Круто! Хочеш стати Роналдо?';
        break;
    case 'бокс':
        hobby = 'Круто! Хочеш стати Олександром Усиком?';
        break;
    case 'балет':
        hobby = 'Круто! Хочеш стати як Єлизавета Биденко';
        break;
    case null:
        hobby = 'Мене не цікавить спорт';
        break;
    default:
        break;
}

if (dateBirthday === null || city === null || hobby === null) {
    let message = "Шкода, що Ви не захотіли ввести свій(ю) ";
    if (dateBirthday === null || isNaN(dateBirthday) || dateBirthday === 0) {
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

confirm(`${dateBirthdayAnsv} , ${cityPerson}`);
alert(hobby)
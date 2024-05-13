let dateBirthday = 2024 - Number(prompt('Рік народження?'))
let city = prompt('В якому місті ви проживаєте?')
let hobby = prompt('Улюблений вид спорту?')


if (dateBirthday === null || city === null || hobby === null) {
    let message = "Шкода, що Ви не захотіли ввести свій(ю) ";
    if (dateBirthday === null) {
        message += "дату народження";
    }
    if (city === null) {
        if (dateBirthday === null) {
            message += ", місто";
        } else {
            message += "місто";
        }
    }
    if (hobby === null) {
        if (dateBirthday === null || city === null) {
            message += " та";
        }
        message += " вид спорту";
    }
    console.log(message + ".");
}

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
    default:
        cityPerson = `Ти живеш у місті ${city}`;
        break;
}

confirm(`${dateBirthday}, ${cityPerson}`)


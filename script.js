let numberUser = prompt('Введіть трьохзначне число:');
let answ1 = +numberUser[0];
let answ2 = +numberUser[1];
let answ3 = +numberUser[2];

//Замість + можно використовувати Number()

let allEqual = answ1 === answ2 && answ2 === answ3;
let anyEqual = answ1 === answ2 || answ2 === answ3 || answ1 === answ3;

console.log("Чи всі цифри однакові:", allEqual ? "Так" : "Ні");
console.log("Чи є серед цифр цифри однакові:", anyEqual ? "Так" : "Ні");

if (allEqual) {
    console.log("Всі цифри однакові:", answ1);
} else if (anyEqual) {
    console.log("Серед цифр є однакові:", answ1 === answ2 ? answ1 : (answ1 === answ3 ? answ1 : answ2));
} else {
    console.log("Цифри не повторюються.");
}



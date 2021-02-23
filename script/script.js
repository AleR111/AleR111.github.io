'use strict'

let temperCelsius = prompt('Введите температуру по Цельсию:');
let temperFahr = (9 / 5) * temperCelsius + 32;
alert(`${temperFahr} °F`);

let admin;
let name = 12;
name = 'Василий';
admin = name;
alert(admin);

let number = 1000;
number += '108'; // => '1000108'

/* Атрибуты defer и async позволяют загружать структуру HTML страницы параллельно с загрузкой скрипта.
При атрибуте defer скрипт выполняются по порядку сверху вниз не зависимо от размера, а при async первым выполняется скрипт который быстреее загрузится т.е. имеет меньший размер.
*/

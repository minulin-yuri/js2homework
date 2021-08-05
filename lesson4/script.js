'use strict';

//замена одинарных кавычек на двойные
{
    let str = "Бывало спросишь её: 'О чём ты вздохнула, Бэла? Ты печальна?' — 'Нет!' — 'Тебе чего-нибудь хочется?' — 'Нет!' — 'Ты тоскуешь по родным?' — 'У меня нет родных'.";
    console.log(str.replace(/'/g, '"'));
}

//кавычка в середине слова не меняется
{
    let str = "She said, 'I'll come to you tomorrow'. He said, 'I'll work at my garden'.";
    console.log(str.replace(/(\B')|('\B)/g, '"'));
}
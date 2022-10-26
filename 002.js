let div = document.querySelector('.content');

let inp = div.querySelector('#inp');

let appData = {
    english: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    russian: ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р',
    'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ё'],
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    symbols: ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '-', '_', '=', '+', '~', '`', '$',
    '^', '&', '{', '}', '[', ']', ',', '.', '<', '>', '/', '|', '@'],
    space: [' '],
};

//выводим клавиатуру
//латиница

let latinica = div.querySelector('.english');

let enTable = document.createElement('table');
let trEn = document.createElement('tr');

for (let i = 0; i < appData.english.length; i++){
    
    let td = document.createElement('td');    
    td.textContent = appData.english[i];
    trEn.appendChild(td);
    
}
enTable.appendChild(trEn);
latinica.appendChild(enTable);

//кириллица

let kirillica = div.querySelector('.russian');

let ruTable = document.createElement('table');
let ruTr = document.createElement('tr');

for (let i = 0; i < appData.russian.length; i++){
    let td = document.createElement('td');
    td.textContent = appData.russian[i];
    ruTr.appendChild(td);
}
ruTable.appendChild(ruTr);
kirillica.append(ruTable);

//цифры

let numbers = div.querySelector('.numbers');
let numTable = document.createElement('table');
let numTr = document.createElement('tr');

for (let i = 0; i < appData.numbers.length; i++){
    let td = document.createElement('td');
    td.textContent = appData.numbers[i];
    numTr.appendChild(td);
}
numTable.appendChild(numTr);
numbers.appendChild(numTable);

//символы

let symbols = div.querySelector('.symbols');
let symTable = document.createElement('table');
let symTr = document.createElement('tr');

for (let i = 0; i < appData.symbols.length; i ++){
    let td = document.createElement('td');
    td.textContent = appData.symbols[i];
    symTr.appendChild(td);
}
symTable.appendChild(symTr);
symbols.appendChild(symTable);

//пробел

let space = div.querySelector('#btn');
btn.addEventListener('click', function getSpace(){
    inp.value += ' ';    
    btn.style.background = 'red';
});
btn.addEventListener('mouseout', function (){
    btn.style.background = 'rgb(68, 13, 13)';
});

//клавиша удаления

let deleteLetter = div.querySelector('#delete');
deleteLetter.addEventListener('click', function(){
    deleteLetter.style.background = 'red';
    let deleteValue = inp.value;
    let delArr = deleteValue.split('');
    delArr.splice(-1,1);
    let newStr = delArr.join('');
    inp.value = newStr;
});

deleteLetter.addEventListener('mouseout', function (){
    deleteLetter.style.background = 'rgb(68, 13, 13)';
});


//получаем все tds

let tds = div.querySelectorAll('td');
let capslock = div.querySelector('#capslock');
let flag = false;
tds = [...tds];

for (let td of tds){    
    td.addEventListener('click', function fillInput(){
        this.style.background = 'red';
        if(flag === false){
            inp.value += td.textContent;
        } else {
            inp.value += td.textContent.toUpperCase();
        }
    });
    td.addEventListener('mouseout', function (){
        this.style.background = 'rgb(68, 13, 13)';
    });
}

//реализуем capslock
capslock.addEventListener('click', function (){
    if (flag === false) {
        flag = true;
    } else {
        flag = false;
    }
    if (flag === false) {
        capslock.style.background = 'rgb(68, 13, 13)';
    } else {
        capslock.style.background = 'red';
    }    
});
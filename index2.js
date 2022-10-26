//ввожу переменные

let div = document.querySelector('.content');
let table = div.querySelector('#table');
let numTable = 0;
let count = div.querySelector('#counter');
let count1 = div.querySelector('#counter1');
let timeRemains = div.querySelector('#time');
let startBtn = div.querySelector('#start');

    //создаю таблицу

    for(let i = 0; i < 10; i++){
        let tr = document.createElement('tr');
        
        for(let j = 0; j < 10; j++){
            let td = document.createElement('td');
            numTable++;
            td.textContent = numTable   ;
            tr.appendChild(td);
        }
        table.appendChild(tr);    
    }


startBtn.addEventListener('click', function () {

let tds = document.querySelectorAll('td');// получаю элементы созданных ячеек
    tds = [...tds]; // разбиваю псевдомассив на элементы

// функция для получения массива случайных элементов таблицы

function selectBox(){
    let arrNum = [];    

    while(tds.length > 90) {
        let random = getRandomInt(tds.length - 1, 0);
        let elem = tds.splice(random,1)[0];
        arrNum.push(elem);        
    }    
    return arrNum;
}

function getRandomInt(a,b){
    return Math.floor(Math.random() * (a - b + 1))  + b;
}

let newArr = selectBox();

let fullTds = [...tds, ...newArr]; // получаю полный массив элементов


//cчетчики попыток
let allCounter = 0;
let counter = 0;
let timer = 20;

//цикл для перебора псевдомассива и навешивания событий на тдэшки

for (let td of fullTds){    
    td.addEventListener('click', func);
    //делаем ячейки белого цвета после нового начала игры
    td.style.background = 'white';
}



//функция игры
    
function func(){
    // startTimer();
    allCounter++;        
    if(newArr.indexOf(this) != -1 && counter != 10){
        counter++;            
        this.style.backgroundColor = 'green';
        count.firstElementChild.textContent = allCounter;
        count1.firstElementChild.textContent = counter;
    } else if(counter == 10 && timer > 0){
        count1.firstElementChild.textContent = 'Вы открыли все десять загаданных ячеек. Поздравляем, игра окончена';        
        td.removeEventListener ('click', func);
    } else if (timer <= 0) {
        count1.firstElementChild.textContent = 'Время истекло. Игра окончена, вы проиграли';
        td.removeEventListener ('click', func);
    } else {
        this.style.backgroundColor = 'red';
        count.firstElementChild.textContent = allCounter;
    }
}  

    //обнуляем переменные
    allCounter = 0;
    counter = 0;
    timer = 20;
    //запускаем таймер
    let timerId = setInterval(function (){
        console.log(timer);
        timer--;
        timeRemains.firstElementChild.textContent = timer;
        if(timer <= 0){
            clearInterval(timerId);
            for(let td of fullTds){
                timeRemains.firstElementChild.textContent = 'Время истекло';                
            }                   
        }
    },1000);
});

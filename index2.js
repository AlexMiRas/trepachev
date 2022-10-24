//ввожу переменные

let div = document.querySelector('.content');
let table = div.querySelector('#table');
let numTable = 0;
let count = div.querySelector('#counter');
let count1 = div.querySelector('#counter1');
let timeRemains = div.querySelector('#time');

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
let timer = 60;

//цикл для перебора псевдомассива и навешивания событий на тдэшки

for (let td of fullTds){    
    td.addEventListener('click', func);
}

for (let td of fullTds){
    td.addEventListener('click', function startTimer (){
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
        this.removeEventListener('click', startTimer);   
    });
};

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

//функция запуска времени с первого клика

function startTimer() {
       
}


// let isFirst = true; 
// function func1(){
//     if (isFirst) {
//      startTimer();
// isFirst = false;
// }




    



// // let arr = [1,2,3,4,5];


// // function shuffleArr() {
// //     result = [];
// //     while(arr.length > 0) {
// //         let random = getRandomInt(arr.length - 1, 0);
// //         let elem = arr.splice(random, 1)[0];
// //         result.push(elem);
// //     }
// //     return result;
// // }

// // function getRandomInt(max,min){
// //     return Math.floor(Math.random() * (max - min + 1))  + min;
// // }

// // console.log(shuffleArr(arr));

// // let a = 10;
// // let timerId = setInterval(()=>{
// //     console.log(a);
// //     a--;
// //     if(a < 1){
// //         clearInterval(timerId);
// //     }

// // },1000);
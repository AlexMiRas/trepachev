
let div = document.querySelector('.content');
let calDiv = div.querySelector('.calendar');
let forwardBtn = div.querySelector('#forward');
let backBtn = div.querySelector('#back');
let appdata = {
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 
    'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь',
    'Ноябрь', 'Декабрь'],
    days: [  'Воскресенье', 'Понедельник', 'Вторник',     'Среда', 'Четверг', 'Пятница', 'Суббота'],
};

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let dayOfWeek = currentDate.getDay();
let currentDay = currentDate.getDate();

//получаем количество дней в текущем месяце

    // let currentDate = new Date();
    // let year = currentDate.getFullYear();
    // let month = currentDate.getMonth();
    // let quantityDays = getDaysInMonth(month,year);


//функция определяющая количество дней в месяце

function getDaysInMonth (month, year) {
    return new Date(year,month+1,0).getDate();
}





// выводим список чисел текущего месяца

let list = document.createElement('ul');
list.classList.add('calendar-list');

// делаем функцию выводящую дни месяца

function getDayOfMonth() {    
    let quantityDays = getDaysInMonth(month,year);

    for (let i = 0; i < quantityDays; i++){
        let li = document.createElement('li');
        li.textContent = i+1;
        //выделяем текущий день
        if (i+1 == currentDay) {        
            li.style.color = 'red';
            li.style.fontWeight = '900';
        }
        list.appendChild(li);
    }
    calDiv.appendChild(list);
    let currentMonth = div.querySelector('.name-month');
    let currentYear = div.querySelector('.name-year');
    let currentDayOfWeek = div.querySelector('.name-day');

    currentMonth.lastElementChild.textContent = appdata.months[month];
    currentMonth.lastElementChild.style.fontWeight = '900';
    currentYear.lastElementChild.textContent = year;
    currentYear.lastElementChild.style.fontWeight = '900';
    currentDayOfWeek.lastElementChild.textContent = appdata.days[dayOfWeek];
    currentDayOfWeek.lastElementChild.style.fontWeight = '900';
}



// выводим на экран текущий год и месяц



backBtn.addEventListener('click', back);

function back () {
    
    let lis = div.querySelectorAll('li');   
    for (let li of lis){        
        li.remove();
    } 
    month -= 1;
    if(month < 0){
        year -= 1;
        month = 11;
    }
    
    let quantityDays = getDaysInMonth(month,year);
    
    for (let i = 0; i < quantityDays; i++){
        let li = document.createElement('li');
        li.textContent = i+1;
        //выделяем текущий день
        if (i+1 == currentDay) {        
            li.style.color = 'red';
            li.style.fontWeight = '900';
        }
        list.appendChild(li);
    }
    calDiv.appendChild(list);
    let minusMonth = new Date(year,month,currentDay);
    dayOfWeek = minusMonth.getDay();    
    let currentMonth = div.querySelector('.name-month');
    let currentYear = div.querySelector('.name-year');
    let currentDayOfWeek = div.querySelector('.name-day');

    currentMonth.lastElementChild.textContent = appdata.months[month];
    currentMonth.lastElementChild.style.fontWeight = '900';
    currentYear.lastElementChild.textContent = year;
    currentYear.lastElementChild.style.fontWeight = '900';
    currentDayOfWeek.lastElementChild.textContent = appdata.days[dayOfWeek];
    currentDayOfWeek.lastElementChild.style.fontWeight = 
    '900';
}

//кнопка вперед

forwardBtn.addEventListener('click', forward);

function forward(){
    let lis = div.querySelectorAll('li');   
    for (let li of lis){        
        li.remove();
    } 
    month += 1;
    if(month > 11){
        year += 1;
        month = 0;
    }
    let quantityDays = getDaysInMonth(month,year);
    for (let i = 0; i < quantityDays; i++){
        let li = document.createElement('li');
        li.textContent = i+1;
        //выделяем текущий день
        if (i+1 == currentDay) {        
            li.style.color = 'red';
            li.style.fontWeight = '900';
        }
        list.appendChild(li);
    }
    calDiv.appendChild(list);
    let minusMonth = new Date(year,month,currentDay);
    dayOfWeek = minusMonth.getDay();
    
    let currentMonth = div.querySelector('.name-month');
    let currentYear = div.querySelector('.name-year');
    let currentDayOfWeek = div.querySelector('.name-day');

    currentMonth.lastElementChild.textContent = appdata.months[month];
    currentMonth.lastElementChild.style.fontWeight = '900';
    currentYear.lastElementChild.textContent = year;
    currentYear.lastElementChild.style.fontWeight = '900';
    currentDayOfWeek.lastElementChild.textContent = appdata.days[dayOfWeek];
    currentDayOfWeek.lastElementChild.style.fontWeight = 
    '900';
}

//запускаем функцию вывода дней текущего месяца
getDayOfMonth();
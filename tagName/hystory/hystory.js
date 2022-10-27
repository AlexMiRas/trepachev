let appData = {
    1709: [
        ['08.07.1709', ['Полтавская битва'], ['Генеральное сражение Северной войны между русскими войсками под командованием Петра I и шведской армией под командованием Карла XII. Битва состоялась 8 июля 1709 года в 6 верстах от города Полтавы']],
    ],
    
    1812: [
        ['24.06.1812', ['Вступление Наполеоновской армии в Россию'], ['После полуночи 12 (24) июня 1812 года по четырём наведённым выше Ковно мостам началась переправа французских войск через пограничный Неман. В 6 часов утра 12 (24) июня 1812 года авангард французских войск вошёл в российскую крепость Ковно. Вечером 24 июня император Александр I находился на балу у Беннигсена в Вильне, где ему и доложили о вторжении Наполеона']],

        ['16-18.08.1812', ['Смоленское сражение'],['Оборонительное сражение объединённой русской армии под командованием М. Б. Барклая-де-Толли с армией Наполеона за Смоленск. После двухдневного сражения Смоленск был оставлен, и русские вынуждены были продолжить отход к Москве.']],

        [' 19.08.1812', ['Бой у Ватутинской горы'], ['Маршал Ней преследовал отступающую армию. 7 (19) августа в кровопролитном сражении у Валутиной горы русский арьергард задержал маршала Нея, понёсшего значительные потери. Наполеон послал генерала Жюно обходным путём зайти в тыл русских, но тот не сумел выполнить задачу, и русская армия в полном порядке ушла в сторону Москвы к Дорогобужу']],

    
        ['07.09.1812', ['Бородинское сражение'], ['Крупнейшее сражение Отечественной войны 1812 года между русской армией под командованием генерала от инфантерии светлейшего князя Михаила Голенищева-Кутузова и французской армией под командованием императора Наполеона I Бонапарта. Состоялось 7 сентября 1812 года у села Бородино, в 125 км к западу от Москвы.']],  

        ['13.09.1812', ['Совет в Филях'], ['М. Б. Барклай-де-Толли указывал на вынужденность оставления Москвы для спасения армии: «Сохранив Москву, Россия не сохранится от войны, жестокой, разорительной. Но сберёгши армию, ещё не уничтожаются надежды отечества» Л. Л. Беннигсен настаивал на сражении, и большинство участников совещания склонялись на его сторону. Окончательное решение принял М. И. Кутузов: «Доколе будет существовать армия и находиться в состоянии противиться неприятелю, до тех пор сохраним надежду благополучно довершить войну, но когда уничтожится армия, погибнут Москва и Россия. Приказываю отступать». Кутузов прервал заседание и приказал отступать через Москву по Рязанской дороге.']],

        
    ],
};

let div = document.querySelector('.content');
let inp = div.querySelector('#inp');
let par = div.querySelector('.par');

inp.addEventListener('keypress',findDate);

function findDate(e){
    if (e.keyCode === 13){ 
        par.textContent = '';
        
        if (appData[inp.value] != undefined){
            for(let key in appData){                
                if (key == inp.value){
                    for(let elem of appData[key]){
                        let table = document.createElement('table');
                        let tr = document.createElement('tr');

                        let td1 = document.createElement('td');
                        let td2 = document.createElement('td');
                        let td3 = document.createElement('td');
                        td1.textContent = [elem][0][0];
                        td1.classList.add('td1');
                        td2.textContent = [elem][0][1];
                        td2.classList.add('td2');
                        td3.textContent= [elem][0][2];
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                        tr.appendChild(td3);
                        table.appendChild(tr);
                        par.appendChild(table);
                    }
                }
            }            
        } else {                    
            par.textContent = `Дата в справочнике отсутствует`;
        }
    }
}

const defuser = document.getElementById('defuser-btn'); //с помощью document.getElementById('defuser-btn') определяем константу под название defuser
let explodeId = 0; //идентификатор таймера (интервала) взрыва

//функция обезвреживания бомбы
defuser.addEventListener('click', () => { //обработчик событий, когда действие происходит после указанного события или клика. Здесь по клику
clearInterval(explodeId); //функция, которая после клика вызывается - функция остановки таймера (интервала) взрыва
defuser.disabled = true; //отключение кнопки (по умолчаню кнопка.disabled = false, true включает деактивацию)
console.log('Бомба обезврежена.')
});

//Функция запуска таймера бомбы
function explosion (seconds) {
    console.log (seconds +'.....');
    explodeId =setInterval(() => {
        seconds--;
        if (seconds <=0) {
            console.log('БУМ!')
            clearInterval(explodeId); //остановка таймера(интерввалак) взрыва
            defuser.disabled = true;
        }
        else
        console.log(seconds + '.....')
    }, 1000);

}


explosion(3)
// // функция задержки времени 1, передаем сюда функцию:setTimeout(func, 1000) - функция вызывается черенз 1000 милисекунд
// //асинхронное программирование

// console.log('3...');

// setTimeout(() =>{
//     console.log('2...');
// }, 1000);

// setTimeout(() => {
// console.log('1...');}, 2000)


// //когда функция setTimeout вызывается, она имеет свой id,который можно записать в переменную
// const timeoutId = setTimeout(() => {
// console.log('Boom!')}, 3000);
// // function (func(num){
// //     console.log(num +'...')
// // })

// //функция отмены setTimeout:
// //if (confirm ('Хотите обезвредить бомбу?')) - во время работы модального окна работа страницы останавливается

// defuser.addEventListener('click', () => { //обработчик событий, когда действие происходит после указанного события или клика. Здесь по клику
// clearTimeout(timeoutId); //функция, которая после клика вызывается
// console.log('Бомба обезврежена.')
// });
// //когда функция setTimeout вызывается, она имеет свой id,который можно записать в переменную

// //





















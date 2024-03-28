
$(document).ready(function(){

    $(function() {
        $(".box").draggable();
    });
$(".fb").click(function (){
    $(".section1").addClass("display_none").removeClass("display_block");
    $(".section2").addClass("display_block").removeClass("display_none");
});
$(".sb").click(function (){
    $(".section1").addClass("display_none").removeClass("display_block");
    $(".section3").addClass("display_block").removeClass("display_none");
});
$(".sb").click(function (){
    $(".section1").addClass("display_none").removeClass("display_block");
    $(".section3").addClass("display_block").removeClass("display_none");
});

$(".block7").click(function (){
    $('.poster').removeClass('block').addClass('none');
    $('.poster2').removeClass('none').addClass('block');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });


    $(function(){
        $(".draggable").draggable();
    });

  $(".lineg1").click(function (){
    $('.lineg1').removeClass('block').addClass('none');
    $('.lineg').removeClass('none').addClass('block');
    });

  $(".g1").click(function (){
        $('.map3').removeClass('block').addClass('none');
        $('.map2').removeClass('none').addClass('block');
        });

$(".block4n").click(function (){
            $('.lab1').removeClass('block').addClass('none');
            $('.lab').removeClass('none').addClass('block');
            });

    $(".cross2div").click(function (){
                $('.crossdiv1').removeClass('block').addClass('none');
                $('.cross').removeClass('none').addClass('block');
                });        


 
});





});


// document.addEventListener("DOMContentLoaded", function() {



//     // alert('Привет, мир!');
//     // alert ('hi designers');

//     // alert('3 + 1 + 2');

//     // let message;
//     // message = 'Hello!';
//     // alert(message);
//     // let user ='masha';
//     // alert (user);

//     // const radaya=5;
//     // alert (radaya);

//     // alert (20/5);

//     // let name = "Иван";

// // Вставим переменную
// //alert( `Привет, *${name}*!` ); // Привет, Иван!

// // Вставим выражение
// //alert( `результат: *${1 + 2}*` ); // результат: 3

    
// //     let age = '20';
// //     let message = 'chicken noodle soup, please';

// //     let isGreater = 4 > 1;

// // alert( isGreater ); // true (результатом сравнения будет "да")

// // ВАЖНО ЗНАТЬ ВСЕМ
// // типы данных 8 типов
// // 1 числовой тип - Number
// // 2 строчный тип - String
// // 3 логический тип - Boolean
// // 4 объектный тип - Object
// // 5 числа в степени - BigInt
// // 6 массивный тип данных - Array
// // 7 пустота - null
// // 8 undefined - не определено

// // alert( '2' > 1 );
// // alert( null == 0 );
// // alert( null >= 0 );

// // let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// // if (year == 2015) {
// //     alert( 'Вы правы!' );
// //     alert('молодец, как соленый огурец')
// // }

// // let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// // if (year == 2015) {
// //   alert( 'молодец, как соленый огурец' );
// // } else {
// //   alert( 'лох' ); // любое значение, кроме 2015
// // }

// // let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// // if (year < 2015) {
// //   alert( 'Это слишком рано...' );
// // }
// // else if (year > 2015) {
// //   alert( 'Это поздновато' );
// // }
// // else {
// //   alert( 'Верно!' );
// // }

// // let olli;
// // let age=prompt("how old are you?", "");
// // if (age>18){
// //     olli=true;
// // }
// // else{
// //     olli=false;
// // }

// // alert(olli);

// // let age = prompt('Возраст?', 18);

// // let message = (age < 3) ? 'Здравствуй, малыш!' :
// //   (age < 18) ? 'Привет!' :
// //   (age < 100) ? 'Здравствуйте!' :
// //   'Какой необычный возраст!';

// // alert( message );

// // let user = {     // объект
// //     name: "John",  // под ключом "name" хранится значение "John"
// //     age: 30        // под ключом "age" хранится значение 30
// //   };
// //   alert( user.name ); // John
// // alert( user.age );



// });

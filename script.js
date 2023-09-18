'use strict';

// document.querySelector(('h1')); 

document.querySelector('.btn01').addEventListener('click', function () {
    document.querySelector('h1').textContent = "Mening raqamimni toping";
    document.querySelector('.between').textContent = "1 dan 20 gacha";
    document.querySelector('.again').textContent = "Yana";
    document.querySelector('.check').textContent = "Tekshiring";
    document.querySelector('.message').textContent = "Taxmin qilishni boshlang...";
    document.querySelector('.label-highscore').textContent = "🥇 Yuqori ball: ";
    document.querySelector('.label-score').textContent = "💯 Ball: ";

})
document.querySelector('.btn02').addEventListener('click', function () {
    document.querySelector('h1').textContent = "Guess My Number!";
    document.querySelector('.between').textContent = "Between 1 and 20";
    document.querySelector('.again').textContent = "Again!";
    document.querySelector('.check').textContent = "Check!";
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.label-highscore').textContent = "🥇 Highscore: "; 
    document.querySelector('.label-score').textContent = "💯 Score: ";

})
const answer = Math.round(100*Math.random());
let attempts = 0;
alert('Привет!\nДавай поиграем в игру угадай число.\nЯ загадал число от 0 до 100. Попробуй угадать.');

while(true) {
    const userAnswer = prompt('Введи целое число 0 до 100.\nВведи слово "выход" или нажми "Отмена", чтобы окончить игру:');
    if(null===userAnswer || 'выход'===userAnswer.toLowerCase().trim()) {
        alert('Приятно было с тобой поиграть!\nДо встречи в следующий раз!');
        break;
    };
    if(isNaN(Number(userAnswer)) || 0 === userAnswer.length) {
        alert('Это не число.\nПопробуй ещё раз.');
        continue;
    };
    const userNumber = Number(userAnswer);
    if(userNumber < 0) {
        alert('Введено число меньше 0.\nПопробуй ещё раз.');
        continue;
    };
    if(userNumber > 100) {
        alert('Введено число больше 100.\nПопробуй ещё раз.');
        continue;
    };
    if(!(0 === userNumber-Math.floor(userNumber))) {
        alert('Введено нецелое число.\nПопробуй ещё раз.');
        continue;
    }
    attempts++;
    if(userNumber > answer) {
        alert('Должно быть меньше.');
    } else if(userNumber < answer) {
        alert('Должно быть больше.');
    } else {
        alert('Поздравляю, ты угадал число с ' + attempts + ' попытки!');
        break;
    };
};

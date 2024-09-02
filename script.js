document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    const boxes = document.querySelectorAll('.box');
    const numbers = shuffle(Array.from({ length: 9 }, (_, i) => i + 1));
    const message = document.querySelector('.message');

    boxes.forEach((box, i) => {
        box.querySelector('.num').textContent = numbers[i];
        box.classList.add('flipped');
    });

    message.textContent = 'Memorize the numbers!';

    setTimeout(() => {
        boxes.forEach(box => box.classList.remove('flipped'));

        message.textContent = 'Now, click on the boxes in sequence!';
        let currentIndex = 1;

        boxes.forEach(box => {
            box.addEventListener('click', function checkClick() {
                const num = parseInt(box.querySelector('.num').textContent);
                if (num === currentIndex) {
                    box.classList.add('flipped');
                    currentIndex++;
                    if (currentIndex > 9) {
                        message.textContent = 'Congratulations! You won!';
                    }
                } else {
                    message.textContent = 'Wrong sequence! Try again!';
                    boxes.forEach(b => b.classList.remove('flipped'));
                    currentIndex = 1;
                }
            });
        });

    }, 3000);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

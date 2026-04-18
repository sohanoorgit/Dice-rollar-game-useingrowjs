const Rollarbtn = document.getElementById('rollarbtn');
const Dice = document.getElementById('dice');
const Result = document.getElementById('result');


Rollarbtn.addEventListener('click', () => {
    //Random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    //Update the dice image and result text
    Dice.src = `https://upload.wikimedia.org/wikipedia/commons/${randomNumber}/${randomNumber}-b.svg`;
    // Update the result text
    Result.textContent = `You rolled a ${randomNumber}!`;
});

function getDiceImage(num) {
    const images = {
        1: "1/1b/Dice-1-b.svg",
        2: "5/5f/Dice-2-b.svg",
        3: "b/b1/Dice-3-b.svg",
        4: "f/fd/Dice-4-b.svg",
        5: "0/08/Dice-5-b.svg",
        6: "2/26/Dice-6-b.svg"
    };

    return images[num];
}
  
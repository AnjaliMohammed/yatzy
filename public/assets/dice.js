document.addEventListener("DOMContentLoaded", function() {
    function rollDice() {
        const result = document.getElementById('result');
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        result.textContent = `You rolled a ${diceRoll}`;
        return diceRoll;
    }
    
    window.rollDice = rollDice;
});

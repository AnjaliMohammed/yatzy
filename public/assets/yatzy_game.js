document.addEventListener("DOMContentLoaded", function() {
    
    const YatzyGame = {
        turn: 0,
        dice: [0,0,0,0,0],
        keep: [false, false, false, false, false],
    
        rollDice: function() {
            if (this.turn < 3) {
    
                for (let i = 0; i < 5; i++) {
                    if (!this.keep[i]) {
                        const diceRoll = rollDice();
                        this.dice[i] = diceRoll;
                    }
                }
                this.turn++;
                this.displayState();
            } else {
                console.log("Maximum turns reached.");
            }
        },
    
        displayState: function() {
            const result = document.getElementById('result');
            result.textContent = this.dice.join(", ");
            console.log("Turn: " + this.turn);
            console.log("Dice: " + this.dice.join(", "));
            console.log("Keep: " + this.keep.join(", "));
        },

        toggleKeep: function(index) {
            this.keep[index] = !this.keep[index];
            console.log("Dice " + (index + 1) + " keep state toggled.");
        },

        resetGame: function() {
            this.turn = 0;
            this.dice = [];
            this.keep = [false, false, false, false, false];
            console.log("Game reset.");
        }
    };
    
    window.YatzyGame = YatzyGame;
});



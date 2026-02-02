let score = 0;
    let timeLeft = 30;
    let gameActive = false;
    
    const scoreDisplay = document.getElementById("score");
    const timeDisplay = document.getElementById("timeLeft");
    const startButton = document.getElementById("startButton");
    const gameOverDisplay = document.getElementById("gameOver");
    const finalScoreDisplay = document.getElementById("finalScore");
    const rabbits = document.querySelectorAll(".rabbit");

    let gameInterval;
    let timerInterval;
    let rabbitTimeout;

    function startGame() {
        score = 0;
        timeLeft = 30;
        gameActive = true;
        scoreDisplay.textContent = score;
        timeDisplay.textContent = timeLeft;
        gameOverDisplay.style.display = "none";
        
        rabbits.forEach(rabbit => rabbit.style.bottom = "-100%");
        
        gameInterval = setInterval(() => {
            showRandomRabbit();
        }, 1500);
        
        timerInterval = setInterval(() => {
            timeLeft--;
            timeDisplay.textContent = timeLeft;
            
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
        
        startButton.disabled = true;
    }

    function endGame() {
        gameActive = false;
        clearInterval(gameInterval);
        clearInterval(timerInterval);
        clearTimeout(rabbitTimeout);
        
        rabbits.forEach(rabbit => rabbit.style.bottom = "-100%");
        
        finalScoreDisplay.textContent = score;
        gameOverDisplay.style.display = "block";
        
        startButton.disabled = false;
    }

    function showRandomRabbit() {
        if (!gameActive) return;
        
        rabbits.forEach(rabbit => rabbit.style.bottom = "-100%");
        
        const randomIndex = Math.floor(Math.random() * rabbits.length);
        const randomRabbit = rabbits[randomIndex];

        randomRabbit.style.bottom = "0";

        rabbitTimeout = setTimeout(() => {
            randomRabbit.style.bottom = "-100%";
        }, 1000);
    }

    rabbits.forEach(rabbit => {
        rabbit.addEventListener("click", () => {
            if (!gameActive) return;
            
            if (rabbit.style.bottom === "0px" || rabbit.style.bottom === "0") {
                score++;
                scoreDisplay.textContent = score;
                rabbit.style.bottom = "-100%";
            }
        });
    });

    startButton.addEventListener("click", startGame);
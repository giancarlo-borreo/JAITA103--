  
    const canvas = document.getElementById('game');
    const context = canvas.getContext('2d');

    const gridSize = 16;
    const snake = [{ x: 160, y: 160 }];
    const apple = { x: 320, y: 320 };
    let dx = gridSize;
    let dy = 0;
    let score = 0;
    let isGameOver = false;

    function moveSnake() {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };
      snake.unshift(head);

      const didEatApple = head.x === apple.x && head.y === apple.y;
      if (didEatApple) {
        score++;
        apple.x = getRandomInt(0, 25) * gridSize;
        apple.y = getRandomInt(0, 25) * gridSize;
      } else {
        snake.pop();
      }

      if (isCollision()) {
        gameOver();
      }
    }

    function isCollision() {
      const head = snake[0];
      return (
        head.x < 0 ||
        head.x >= canvas.width ||
        head.y < 0 ||
        head.y >= canvas.height ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
      );
    }

    function gameOver() {
      isGameOver = true;
      // You can handle game over logic here
      console.log('Game Over! Your score was:', score);
    }

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'green';
      snake.forEach(segment => {
        context.fillRect(segment.x, segment.y, gridSize - 1, gridSize - 1);
      });

      // Render apple
      context.fillStyle = 'red';
      context.fillRect(apple.x, apple.y, gridSize - 1, gridSize - 1);
    }

    function handleKeyPress(event) {
      if (isGameOver) return;

      switch (event.key) {
        case 'ArrowUp':
          dx = 0;
          dy = -gridSize;
          break;
        case 'ArrowDown':
          dx = 0;
          dy = gridSize;
          break;
        case 'ArrowLeft':
          dx = -gridSize;
          dy = 0;
          break;
        case 'ArrowRight':
          dx = gridSize;
          dy = 0;
          break;
      }
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    document.addEventListener('keydown', handleKeyPress);

    function gameLoop() {
      if (isGameOver) return;

      moveSnake();
      render();
    }

    setInterval(gameLoop, 100); // Adjust timing


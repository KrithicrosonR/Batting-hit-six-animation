function hitSix() {
    const ball = document.querySelector('.ball');
    const sixText = document.querySelector('.six-text');
    
    // Show the ball and start animation
    ball.style.display = 'block';
    ball.style.animation = 'hitAnimation 1s ease-out forwards';

    // Show "SIX!" text after the animation ends
    ball.addEventListener('animationend', () => {
        sixText.style.display = 'block';
        
        // Hide the text and reset ball after 2 seconds
        setTimeout(() => {
            sixText.style.display = 'none';
            ball.style.display = 'none';
            ball.style.animation = ''; // Reset animation
        }, 2000);
    }, { once: true });
}

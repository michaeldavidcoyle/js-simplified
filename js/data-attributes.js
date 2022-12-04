const buttons = document.querySelectorAll('[data-clicks]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const startingClicks = parseInt(button.dataset.clicks);
        button.dataset.clicks = startingClicks + 1; // Updated values can bee seen in the Elements tab of dev tools
    });
});
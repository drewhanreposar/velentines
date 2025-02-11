function moveButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}
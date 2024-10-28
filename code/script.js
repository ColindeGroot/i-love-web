document.addEventListener('wheel', (event) => {
    const layout = document.querySelector('.layout');
    const delta = Math.sign(event.deltaY); // Bepaalt of je naar boven of beneden scrolt

    layout.scrollBy({
        top: delta * window.innerHeight, // Scroll per viewport hoogte
        behavior: 'smooth'
    });

    event.preventDefault(); // Voorkomt standaard scrollen
});

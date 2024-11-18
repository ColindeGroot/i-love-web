function createNoteOfDay(date, title, content) {
    // Maak het <article> element
    const article = document.createElement('article');
    article.className = 'noteofday'; // Voeg de .noteofday CSS-klasse toe

    // Maak het <h2> element voor de datum
    const h2 = document.createElement('h2');
    h2.textContent = date;

    // Maak het <h3> element voor de titel
    const h3 = document.createElement('h3');
    h3.textContent = title;

    // Maak het <p> element voor de inhoud
    const p = document.createElement('p');
    p.className = 'paragraph'; 
    p.textContent = content;

    // Voeg alle elementen toe aan het <article>
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p);

    return article;
}


const container = document.getElementById('container');
container.className = 'layout'; // Voeg de .layout CSS-klasse toe

const notes = [  /* notities/logs */
    { date: '18-11-2024', title: 'Vandaag gedaan', content: 'Eigen lettertype gemaakt en gekoppeld met @font-face. Zie de GitHub voor meer.' },
    { date: '17-11-2024', title: 'Gisteren gedaan', content: 'Planning gemaakt voor nieuwe features.' },
    { date: '16-11-2024', title: 'Dag ervoor', content: 'Bugs opgelost in de website.' },
];

notes.forEach(note => {
    const noteElement = createNoteOfDay(note.date, note.title, note.content);
    container.appendChild(noteElement);
});

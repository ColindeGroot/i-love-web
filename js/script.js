// Functie om een notitie te maken
function createNoteOfDay(date, title, content, listTitle, listItems = []) {
    const article = document.createElement('article');
    article.className = 'noteofday'; // Voeg article class toe

    // Datum toevoegen
    const h2 = document.createElement('h2');
    h2.textContent = date;

    // Titel toevoegen
    const h3 = document.createElement('h3');
    h3.textContent = title;

    // Paragraaf toevoegen
    const p = document.createElement('p');
    p.className = 'paragraph';
    p.textContent = content;

    article.appendChild(h2); //children toevoegen
    article.appendChild(h3);
    article.appendChild(p);

    // Lijst toevoegen als er lijstitems zijn
    if (listItems.length > 0) {
        const h4 = document.createElement('h4');
        h4.textContent = listTitle;
        article.appendChild(h4); // Voeg lijsttitel toe

        const ul = document.createElement('ul');
        listItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li); // Voeg lijstitem toe aan lijst
        });
        article.appendChild(ul); // Voeg de lijst toe aan het artikel
    }

    return article;
}

// Container ophalen
const container = document.getElementById('container');
container.className = 'layout'; // Voeg de .layout CSS-klasse toe

// Notities data
const notes = [
    {
        date: '18-11-2024',
        title: 'Vandaag gedaan',
        content: 'Eigen lettertype gemaakt en gekoppeld met @font-face. Zie de GitHub voor meer.',
        listTitle: '3 dingen die ik heb geleerd:',
        listItems: [
            'Container query attributes (cqw en cqv)',
            'Hoe je een eigen font maakt',
            'JS append voor data-attributen'
        ]
    },
    {
        date: '17-11-2024',
        title: 'Vandaag gedaan',
        content: 'Planning gemaakt voor nieuwe features.',
        listTitle: 'Feature lijst:',
        listItems: [
            'Nieuwe slider ontwerpen',
            'Responsive fixes implementeren',
            'Team issues bespreken'
        ]
    },
    {
        date: '20-11-2024',
        title: 'Vandaag gedaan',
        content: 'Geleerd welke formulier inputs er zijn en hoe je deze kan stylen.',
        listTitle: '3 dingen die ik heb geleerd:',
        listItems: [
            'Formulier inputs begrijpen',
            'CSS-styling toepassen op inputs',
            'Accessibiliteit verbeteren met aria-labels'
        ]
    }
];

// Itereer door de notities en voeg ze toe aan de container
notes.forEach(note => {
    const noteElement = createNoteOfDay(note.date, note.title, note.content, note.listTitle, note.listItems);
    container.appendChild(noteElement); // Voeg elke note toe aan de container
});

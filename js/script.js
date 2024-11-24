// Functie om een notitie te maken
function createNoteOfDay(date, title, contentBlocks) {
    const article = document.createElement('article');
    article.className = 'noteofday'; // Voeg article class toe

    // Datum toevoegen
    const h2 = document.createElement('h2');
    h2.textContent = date;

    // Titel toevoegen
    const h3 = document.createElement('h3');
    h3.textContent = title;

    article.appendChild(h2); // Voeg datum toe aan het artikel
    article.appendChild(h3); // Voeg titel toe aan het artikel

    // Verwerk contentBlocks
    contentBlocks.forEach(block => {
        // Paragraaf toevoegen
        const p = document.createElement('p');
        p.className = 'paragraph';
        p.textContent = block.content;
        article.appendChild(p); // Voeg paragraaf toe aan het artikel

        // Lijst toevoegen als er lijstitems zijn
        if (block.listItems && block.listItems.length > 0) {
            const h4 = document.createElement('h4');
            h4.textContent = block.listTitle;
            article.appendChild(h4); // Voeg lijsttitel toe

            const ul = document.createElement('ul');
            block.listItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li); // Voeg lijstitem toe aan lijst
            });
            article.appendChild(ul); // Voeg de lijst toe aan het artikel
        }
    });

    return article;
}

// Container ophalen
const container = document.getElementById('container');
container.className = 'layout'; // Voeg de .layout CSS-klasse toe


const notes = [  // Notities data
    {
        date: '4-9-2024',
        title: 'Vandaag gedaan',
        contentBlocks: [
            {
                content: 'Vandaag ben ik begonnen met het maken van deze blog site voor al mijn aantekeningen en heb ik een breakdown schets gemaakt.',
                listTitle: '3 studie vragen',
                listItems: [
                    'Wat is het nut van een breakdown schets?',
                    'Waar moet je bij zo een schets op letten?',
                    'Wat is het nut van de I Love web website?'
                ]
            },
            {
                content: 'Ik wil nog uitzoeken hoe ik een slider van de semesters maak op mobiel.'
            }
        ]
    },
    {
        date: '9-9-2024',
        title: 'Vandaag gedaan',
        contentBlocks: [
            {
                content: 'Ik heb een begin gemaakt aan de homepage van onze squadpage.',
                listTitle: '3 studie vragen',
                listItems: ['', '', '']
            },
            {
                content: 'Ik wil nog uitzoeken wat de beste methode is voor het maken van onze slider.'
            }
        ]
    },
    {
        date: '10-9-2024',
        title: 'Vandaag gedaan',
        contentBlocks: [
            {
                content: 'Vandaag ben ik begonnen met het maken van deze blog site voor al mijn aantekeningen en heb ik een breakdown schets gemaakt.',
                listTitle: '3 studie vragen',
                listItems: [
                    'Wat is het nut van een breakdown schets?',
                    'Waar moet je bij zo een schets op letten?',
                    'Wat is het nut van de I Love web website?'
                ]
            },
            {
                content: 'Ik wil nog uitzoeken hoe ik een slider van de semesters maak op mobiel.'
            }
        ]
    },
    {
        date: '11-9-2024',
        title: 'Vandaag gedaan',
        contentBlocks: [
            {
                content: 'Vandaag ben ik begonnen met het maken van deze blog site voor al mijn aantekeningen en heb ik een breakdown schets gemaakt.',
                listTitle: '3 studie vragen',
                listItems: [
                    'Wat is het nut van een breakdown schets?',
                    'Waar moet je bij zo een schets op letten?',
                    'Wat is het nut van de I Love web website?'
                ]
            },
            {
                content: 'Ik wil nog uitzoeken hoe ik een slider van de semesters maak op mobiel.'
            }
        ]
    },
    {
        date: '16-9-2024',
        title: 'Activiteiten',
        contentBlocks: [
            {
                content: 'Ik was ziek D:',
                listTitle: '3 dingen die ik heb geleerd',
                listItems: ['niks']
            }
        ]
    },
    {
        date: '17-9-2024',
        title: 'Activiteiten',
        contentBlocks: [
            {
                content: 'Vandaag code verbeteren en foto\'s resizen voor een snellere en beter gestylde website.',
                listTitle: '3 dingen die ik heb geleerd',
                listItems: ['geen idee', 'grid auto', 'Plannen via issues']
            }
        ]
    },
    {
        date: '23-9-2024',
        title: 'Activiteiten',
        contentBlocks: [
            {
                content: 'Vandaag heb ik een briefing gehad met de opdrachtgever. Hier hebben wij geluisterd naar de wensen en behoefte die in het product moeten komen.',
                listTitle: '3 dingen die ik heb geleerd',
                listItems: ['Briefings voorbereiden en houden', 'Schrijven van debriefings', 'afspraken maken met opdrachtgever']
            },
            {
                content: 'Ik wil nog leren hoe ik goede plannings met mijn team kan maken en hoe ik een duidelijke taakverdeling kan creëren.'
            }
        ]
    },
    {
        date: '25-9-2024',
        title: 'Activiteiten',
        contentBlocks: [
            {
                content: 'Vandaag hebben we een breakdown schets, wireframe en workflow gemaakt.',
                listTitle: '3 dingen die ik heb geleerd',
                listItems: ['Workflow maken', 'Verbeteren van wireframe', 'Site map maken']
            },
            {
                content: 'Ik wil nog de website omzetten in HTML.'
            }
        ]
    },
    {
        date: '30-9-2024',
        title: 'Activiteiten',
        contentBlocks: [
            {
                content: 'Vandaag geleerd welke layouts je kan gebruiken in verschillende situaties.',
                listTitle: '3 dingen die ik heb geleerd',
                listItems: ['Indelingen maken met grid', 'align self met flexbox', 'Gebruik van position attributen']
            },
            {
                content: 'Voor de opdrachtgever moet ik gebruik maken van grid en flexbox.'
            }
        ]
    },
    {
        date: '02-10-2024',
        title: 'Activiteiten',
        contentBlocks: [
            {
                content: 'Vandaag heb ik geleerd waar ik op moet letten met typografie. Wel wil ik nog meer leren over Vi en clamp.',
                followUp: 'Ik ga de kennis van vandaag toepassen op mijn eindopdracht.'
            }
        ]
    },
    {
        date: '14-10-2024',
        title: 'Vandaag gedaan',
        contentBlocks: [
            {
                content: 'Ik heb vandaag geleerd wat de WCAG inhouden en hoe ik deze kan toepassen op de website.',
                followUp: 'Voor woensdag moet ik nog de handmatige checklist afgaan en aankaarten wat er nog mist op de website.'
            }
        ]
    },
    {
        date: '18-10-2024',
        title: 'Vandaag gedaan',
        contentBlocks: [
            {
                content: 'Ik heb vandaag een code review gehouden met 2 andere duo\'s waarbij we hebben gekeken naar de toegankelijkheid van onze websites en hier feedback op gegeven.',
                listTitle: 'Onze toegankelijkheid punten',
                listItems: [
                    'Kleurcontrast: ervoor zorgen dat kleuren goed passen op hun achtergrond kleur',
                    'Forms > fieldsets en legends: indien nodig gebruik van legends en fieldsets',
                    'Inputs met labels: labels op inputs zetten',
                    'Juist gebruik van ol en ul: ervoor zorgen dat ol en ul op juiste manier gebruikt wordt',
                    'Alt beschrijvingen van images: duidelijke beschrijvingen voor duidelijke info op schermlezers'
                ]
            }
        ]
    },
    {
        date: '18-11-2024',
        title: 'Vandaag gedaan',
        contentBlocks: [
            {
                content: 'Eigen lettertype gemaakt en gekoppeld met font face.',
                listTitle: 'Dingen die ik heb geleerd',
                listItems: ['Container query attributes (cqw en cqv)', 'Hoe je eigen font maakt', '(Niet gerelateerd aan les) Attributen aanmaken met append in JS voor elk data attribuut.']
            },
            {
                content: 'Ik ga thuis verder aan de createLog functie van mijn I Love Web project om HTML-code te besparen.'
            }
        ]
    }
];


// Notities toevoegen aan de container
notes.forEach(note => {
    const noteElement = createNoteOfDay(note.date, note.title, note.contentBlocks);
    container.appendChild(noteElement); // Voeg elke notitie toe aan de container
});

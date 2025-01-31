function createNoteOfDay(date, title, contentBlocks) { //aanmaken van een notitie functie
    const article = document.createElement('article');
    article.className = 'noteofday'; // Voeg article class toe

    const h2 = document.createElement('h2'); //h2 voor datum 
    h2.textContent = date;
  
    const h3 = document.createElement('h3'); //h3 voor titels van de blog
    h3.textContent = title;

    article.appendChild(h2); 
    article.appendChild(h3); 

    contentBlocks.forEach(block => { //content blocks toegevoegd zodat de onderstaande items meerder keren gebruikt kunnen worden
 
        const p = document.createElement('p'); // paragraaf toevoegen
        p.className = 'paragraph';
        p.innerHTML = block.content; // voor nu innerhtml zodat linkjes werken
        article.appendChild(p); // Voeg paragraaf toe aan het artikel

     
        if (block.listItems && block.listItems.length > 0) {  
            const h4 = document.createElement('h4');
            h4.textContent = block.listTitle;
            article.appendChild(h4); // Voeg lijsttitel toe

            const ul = document.createElement('ul');
            block.listItems.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = item;
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
        date: '13-9-2024',
        title: 'Vandaag gedaan',
        contentBlocks: [
            {
                content: 'Vandaag hebben we de eerste we love web lezing gekregen van Vasilis van Gemert.',
                listTitle: 'In deze workshop hebben we het gehad over:',
                listItems: [
                    'Hoe belangerijk toegankelijk is met een paar voorbeelden',
                    'Dat websites naast toeganelijk ook leuk moeten zijn',
                    'En klokken..... Een paas coole projecten van Vasilis waar hij op creatieve wijze de tijd laat zien.'
                ]
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
    },
    {
        date: '22-11-2024',
        title: 'Forms, inputs en we love web',
        contentBlocks: [
            {
                content:'Vandaag hebben we extra les gekregen over HTML formulieren en inputs',
                listTitle: '3 dingen die ik heb geleerd over HTML',
                listItems: [
                    'input forms correct gebruiken',
                    'labels aan inputs toevoegen',
                    'roles in HTML gebruiken'
                ]
            },
            {
                content:'Vandaag kwam Emiel van Betsbrugge langs. <br/><br/> Emiel is een webGL devloper die werkzaam is bij activetheory die ons heeft vertled wat er alemaal afspeelt bij pitch tot productie. Hij heeft zelf ook eigengemaakte websites laten zien met webGL waarbij hij tips en tricks heeft gegeven.'
            }
        ] 
    },
    {
        date: '25-11-2024',
        title: 'Gestalt pricipes',
        contentBlocks: [
            {
                content:'Vandaag hebben we geleerd wat gestalt pricipes zijn ewn hoe je deze kan toepassen op je website'
            },
            {
                content:'Ik heb ervoor gekozen om de <a href="https://github.com/users/ColindeGroot/projects/1?pane=issue&itemId=89110052&issue=ColindeGroot%7Clook-and-feel-corporate-identity%7C4">proximity law</a> te gebruiken op mijn website.'
            }

        ] 
    },
    {
        date: '2-12-2024',
        title: 'Vandaag gedaan',
        contentBlocks: [
            {
                content:'Vandaag heb ik op DLO mijn reflecite punten ingeleverd. Omdat de de hele dag een reflectie was is er verder niet veel gebouwd of ontworpen. Wel zijn er issues gemaakt en aangewezen'
            }
        ]
    },
    {
        date: '4-12-2024',
        title: 'Vandaag gedaan',
        contentBlocks: [
            {
                content:'Vandaag heb ik gewerkt aan de workshop user interface design. Hier heb ik een wireflow en breakdown schets gemaakt voor een nieuwe functie die met js gebouwd gaat worden. Daarnaast heb ik js lessen gevolgd van learnprogramming.online (ik ben nu bij chapter 3)',
            }
        ]
    },
    {
        date: '9-12-2024',
        title: 'Vandaag gedaan',  
        contentBlocks: [
            {
                content: 'vandaag heb ik gewerkt aan de ui event deeltaak. Hierin heb ik heb ik met verschillende events buttons interactief gemaakt',
            },
            {
                content: 'Van de 10 expirimenten heb ik er 5 kunnen maken. De reden hiervoor is omdat ik erg veel tijd heb gestoken in een counter functie die gelukkig geslaagd is',
            }, 
            {
                content: 'Deze opdracht past goed bij het gedragscriterium lerend vermogen want ik maak aangeboden en zelf gevonden materie eigen en gebruikt dit bij de leertaak.'
            },
            
        ]
    },
    {
        date: '6-1-2025',
        title: 'Vandaag gedaan',  
        contentBlocks: [
            {
                listTitle:"Moet ik nog doen:",
                listItems: [
                "testen(1.1.3) wcag test, screenreader keyboard test etc. ",
                "breakdown schets, lofi/hifi laten zien van",
                "1.3.3 readme maken"
            ]

        },
        {
            content: "Mijn goede voornemens dit jaar zijn om mezelf meer uit te dagen met js en mijn learning log beter bij te houden. "
        },
        { 
            content: "om langer te blijven bij FDND heb ik betere koffie nodig ;) ( nee grapje ). Ik probeer altijd zo lang mogelijk te blijven"
        }
        ]
    },
    {
        date: '10-1-2025',
        title: 'Code/design review',  
        contentBlocks: [
            {
                content:'vandaag waren er weer code en design review voor de mobile first workshop',
                listTitle:"Uit de code/design review kwam het volgende:",
                listItems: [
                "Kleinere container voor de viewer gebruiken",
                "labels gebruiken op buttons",
                'meer classes gebruiken ipv met childs werken voor betere aanpasbaarheid en levensduur van de website'
            ]

        }
        ]
    },

    {
        date: '22-01-2025',
        title: 'Vandaag gedaan',
        contentBlocks: [
            {
                content:'Vandaag was de wrap-up voor sprint 6. Hier moesten we onze projecten klaar maken voor de oplevering van morgen',
            },
            {
                content:'Ik heb vandaag de README gemaakt, code klaargezet en gepushed op live omgeving en laatste issues afgemaakt.'
            }
        ] 
    },
    {
        date: '24-01-2025',
        title: 'Vandaag gedaan',
        contentBlocks: [
            {
                content:'Vandaag hebben we de laatste punten op portflow in geleverd en hebben we de expo gehouden met tweede jaars studenten',
            },
            {
                content:'Tijdens de expo zijn twee personen van mijn opdrachtgever nog langs gekomen om nog een keer mijn project en dat van andere studenten te bekijken. Hier heb ik ze doorlopen door mijn website en wat verteld over het werk van andere studenten'
            }
        ] 
    },


];


// Notities toevoegen aan de container
notes.forEach(note => {
    const noteElement = createNoteOfDay(note.date, note.title, note.contentBlocks);
    container.appendChild(noteElement); // Voeg elke notitie toe aan de container
});




// //anchor filter ( ik wil geen innerhtml >:( .)
// // Simulate fetching data
// const data = {
//     date: '4-12-2024',
//     title: 'Vandaag gedaan',
//     contentBlocks: [
//         {
//             content: 'Vandaag heb ik gewerkt aan de workshop user interface design. Hier heb ik een wireflow en breakdown schets gemaakt voor een nieuwe functie die met js gebouwd gaat worden. Daarnaast heb ik js lessen gevolgd van learnprogramming.online (ik ben nu bij chapter 3)',
//         },
//         {
//             content: "dit is een link naar <a href='https://www.google.com'>Google</a>"
//         }
//     ]
// };

// // Function to render content and convert <a> to actual link elements
// function renderContentBlocks(contentBlocks) {
//     const container = document.createElement('div'); // Create a container for the content

//     contentBlocks.forEach(block => {
//         const paragraph = document.createElement('p'); // Create a <p> for each content block

//         // Use a temporary div to parse the HTML
//         const tempDiv = document.createElement('div');
//         tempDiv.innerHTML = block.content;

//         // Replace <a> elements with actual links
//         const anchors = tempDiv.querySelectorAll('a');
//         anchors.forEach(anchor => {
//             const link = document.createElement('a');
//             link.href = anchor.href;
//             link.textContent = anchor.textContent;
//             link.target = '_blank'; // Open in a new tab (optional)
//             anchor.replaceWith(link); // Replace the original <a> element
//         });

//         // Set the processed HTML as the paragraph's content
//         paragraph.innerHTML = tempDiv.innerHTML;

//         // Append the paragraph to the container
//         container.appendChild(paragraph);
//     });

//     // Append the container to the body (or any other part of the DOM)
//     document.body.appendChild(container);
// }
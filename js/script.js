function createNoteS1(date, title, contentBlocks) {
    const article = document.createElement("article");
    article.className = "noteofday";

    const h2 = document.createElement("h2");
    h2.textContent = date;

    const h3 = document.createElement("h3");
    h3.textContent = title;
    
    article.appendChild(h2);
    article.appendChild(h3);

    contentBlocks.forEach(block => {
        const p = document.createElement("p");
        p.className = "paragraph";
        p.innerHTML = block.content;
        article.appendChild(p);

        if (block.listItems && block.listItems.length > 0) {
            const h4 = document.createElement("h4");
            h4.textContent = block.listTitle;
            article.appendChild(h4);

            const ul = document.createElement("ul");
            block.listItems.forEach(item => {
                const li = document.createElement("li");
                li.innerHTML = item;
                ul.appendChild(li);
            });
            article.appendChild(ul);
        }
    });

    return article;
}

function loadNotes() {
    const container = document.getElementById("container");
    container.className = "layout";

    // Controleer welke pagina is geopend
    let jsonFile;
    if (window.location.pathname.includes("semester1.html")) {
        jsonFile = "./js/notes.json";
    } else if (window.location.pathname.includes("semester2.html")) {
        jsonFile = "./js/notes2.json";
    } else {
        console.error("Geen bijbehorende notities gevonden voor deze pagina.");
        return;
    }

    // Fetch de juiste notities
    fetch(jsonFile)
        .then(response => response.json())
        .then(notes => {
            notes.forEach(note => {
                const noteElement = createNoteS1(note.date, note.title, note.contentBlocks);
                container.appendChild(noteElement);
            });
        })
        .catch(error => console.error("Fout bij het laden van de notities:", error));
}

// Start het script zodra de pagina geladen is
document.addEventListener("DOMContentLoaded", loadNotes);

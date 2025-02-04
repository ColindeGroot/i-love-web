function createNoteOfDay(date, title, contentBlocks) {
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

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    container.className = "layout";

    fetch("./js/notes.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Netwerkrespons was niet oké");
            }
            return response.json();
        })
        .then(notes => {
            notes.forEach(note => {
                const noteElement = createNoteOfDay(note.date, note.title, note.contentBlocks);
                container.appendChild(noteElement);
            });
        })
        .catch(error => console.error("Fout bij ophalen van notities:", error));
});

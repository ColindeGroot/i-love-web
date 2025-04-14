import express from "express";
import { Liquid } from "liquidjs";
import { readdir, readFile } from "node:fs/promises";

const app = express();

const engine = new Liquid();
app.engine("liquid", engine.express());
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Lees alle bestanden in de 'content'-map (die je JSON-bestanden bevat)
const files = await readdir("content");
console.log("Beschikbare bestanden in content:", files);

app.get("/", async function (req, res) {
  res.render("index.liquid", { files });
});

// Route voor een specifiek journal-bestand via de URL-parameter :slug
app.get("/journal/:slug", async function (req, res) {
  const filePath = "content/" + req.params.slug;
  try {
    const fileContents = await readFile(filePath, { encoding: "utf8" });
    // console.log("File contents:", fileContents);

    // Parse het JSON-bestand
    const parsedContent = JSON.parse(fileContents);
    console.log("Parsed JSON:", parsedContent);

    // Render de Liquid template en geef de data mee
    res.render("semester.liquid", 
      { 
        data: parsedContent,
        semester: {
          slug: req.params.slug
        }
      }
    );
  } 
  
  catch (error) {
    console.error(error);
    res.status(500).send("niet gevonden.");
  }
});

// Stel de poort in en start de server
app.set("port", process.env.PORT || 2004);
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});

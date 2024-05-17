const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Statische Dateien bereitstellen
app.use(express.static(path.join(__dirname, 'public')));

const pages = {
    home: {
        title: 'Home',
        content: '<h1>Willkommen auf unserer Homepage</h1>',
        className: 'home'
    },
    kontakt: {
        title: 'Kontakt',
        content: '<h1>Kontakt</h1>',
        className: 'kontakt'
    },
    ueberUns: {
        title: 'Über uns',
        content: '<h1>Über uns</h1>',
        className: 'ueber-uns'
    },
    impressum: {
        title: 'Impressum',
        content: '<h1>Impressum</h1>',
        className: 'impressum'
    },
    datenschutz: {
        title: 'Datenschutz',
        content: '<h1>Datenschutz</h1>',
        className: 'datenschutz'
    }
};

app.get('/:page?', (req, res) => {
    const page = req.params.page || 'home';
    const { title, content, className } = pages[page] || pages.home;

    res.send(`
        <!DOCTYPE html>
        <html lang="de">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <link rel="stylesheet" href="/css/styles.css">
        </head>
        <body class="${className}">
            <nav>
                <a href="/">Home</a>
                <a href="/kontakt">Kontakt</a>
                <a href="/ueberUns">Über uns</a>
                <a href="/impressum">Impressum</a>
                <a href="/datenschutz">Datenschutz</a>
            </nav>
            <div class="content">
                ${content}
            </div>
        </body>
        </html>
    `);
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});

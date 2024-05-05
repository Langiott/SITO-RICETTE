// server.js (o server.ts)
const express = require('express');
const sqlite3 = require( 'sqlite3');
const path = require('path');

/*----------------------------------------------------------------------------------------------------------------------------*/

const app = express();
app.set('view engine', 'pug');
const serverPort = 3000; // Porta del server Express

// Connessione al database SQLite
const db = new sqlite3.Database('database.sqlite', (err) => {
    if (err) {
        console.error('Errore durante la connessione al database:', err);
    } else {
        console.log('Connessione al database SQLite stabilita con successo.');
    }
});

app.use('/immagini', express.static(path.join(__dirname, 'immagini')));
/*----------------------------------------------------------------------------------------------------------------------------*/
// Comandi SQL per creare la tabella 'ricette' e inserire i dati di esempio
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS ricette (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_ricetta TEXT,
        immagine BLOB,
        corpo TEXT
    )
`;

const insertDataQuery = `
    INSERT INTO ricette (nome_ricetta, immagine, corpo) VALUES
    ('Pasta al pomodoro', '/immagini/pasta_pomodoro.jpg', 'Una deliziosa pasta con salsa di pomodoro fresco e basilico.'),
    ('Tiramisù', '/immagini/tiramisu.jpg', 'Un dolce tradizionale italiano fatto con savoiardi, caffè, mascarpone e cacao.'),
    ('Insalata di quinoa', '/immagini/insalata_quinoa.jpg', 'Un insalata leggera e nutriente preparata con quinoa, verdure miste, e una vinaigrette leggera.')
`;

// Esegui i comandi SQL per creare la tabella e inserire i dati
db.serialize(() => {
    db.run(createTableQuery, (err) => {
        if (err) {
            console.error('Errore durante la creazione della tabella:', err);
        } else {
            console.log('Tabella "ricette" creata con successo.');
            
            // Inserisci i dati dopo la creazione della tabella
            db.run(insertDataQuery, (err) => {
                if (err) {
                    console.error('Errore durante l\'inserimento dei dati:', err);
                } else {
                    console.log('Dati inseriti con successo nella tabella "ricette".');
                }
            });
        }
    });
});
// Avvia il server Express solo dopo che la creazione della tabella e l'inserimento dei dati sono stati completati
db.on('open', () => {
    app.listen(serverPort, () => {
        console.log(`Il server è in esecuzione su http://localhost:${serverPort}`);
    });
});

// Gestione degli errori durante la creazione del database
db.on('error', (err) => {
    console.error('Errore durante la connessione al database:', err);
});

/*----------------------------------------------------------------------------------------------------------------------------*/
app.set('views engine', path.join(__dirname, 'views'));

// Rotte Express
app.get('/ricette', (req, res) => {
    // Query per recuperare le ricette dal database
    let sql = "SELECT * FROM ricette";

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Errore durante il recupero delle ricette:', err);
            res.status(500).send('Errore durante il recupero delle ricette');
            return;
        }

        // Renderizza la vista 'elencoRicette' e passa le ricette recuperate
        res.render('elencoRicette', { ricette: rows });
    });
});

app.get('/ricetta/:id', (req, res) => {
    // Ottieni l'ID della ricetta dalla richiesta
    const ricettaId = req.params.id;

    // Query per recuperare la ricetta corrispondente dall'ID
    let sql = "SELECT * FROM ricette WHERE id = ?";

    db.get(sql, [ricettaId], (err, row) => {
        if (err) {
            console.error('Errore durante il recupero della ricetta:', err);
            res.status(500).send('Errore durante il recupero della ricetta');
            return;
        }

        // Se non viene trovata alcuna ricetta con l'ID fornito
        if (!row) {
            res.status(404).send('Ricetta non trovata');
            return;
        }

        // Renderizza la vista 'singolaRicetta' e passa la ricetta recuperata
        res.render('singolaRicetta', { ricetta: row });
    });
});



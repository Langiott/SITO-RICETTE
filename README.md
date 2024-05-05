# SITO-RICETTE
# Creazione di un Sito Web per le Ricette

Creare un sito web per le tue ricette è un progetto fantastico e divertente. Segui questa guida passo-passo per iniziare con Express, JavaScript/TypeScript e una bella vista.

## 1. Preparazione dell'Ambiente di Sviluppo

- Assicurati di aver installato [Node.js](https://nodejs.org/) dal sito ufficiale.
- Verifica l'installazione di Node.js digitando `node -v` nel terminale.

## 2. Installazione di npm (Node Package Manager)

- npm è incluso nell'installazione di Node.js e verrà utilizzato per gestire le dipendenze del progetto.
- Verifica l'installazione di npm digitando `npm -v` nel terminale.
- Scegli un editor di testo o un IDE, come Visual Studio Code, per lo sviluppo.

## 3. Creazione della Cartella del Progetto

- Crea una nuova cartella per il tuo progetto.
- Apri il terminale nella cartella del progetto.

## 4. Inizializzazione del Progetto npm

- Esegui `npm init -y` per inizializzare un nuovo progetto npm con le impostazioni predefinite.

## 5. Installazione di Express

- Esegui `npm install express` per installare Express come dipendenza del progetto.

## 6. Configurazione di TypeScript (opzionale)

- Se vuoi utilizzare TypeScript, esegui `npm install typescript @types/node @types/express` per installare TypeScript e i tipi di Node.js ed Express.
- Crea un file di configurazione TypeScript `tsconfig.json` nella radice del tuo progetto e configuralo secondo le tue preferenze.

## 7. Creazione del Server Express

- Crea un file chiamato `server.js` (o `server.ts` se stai usando TypeScript) nella radice del tuo progetto.
- Importa Express e crea un'istanza dell'applicazione.
- Definisci le tue rotte nel file `server.js`.

## 8. Aggiunta delle Route per le Ricette

- Aggiungi route per visualizzare le ricette e gestire altre operazioni CRUD (Create, Read, Update, Delete).

## 9. Creazione delle Viste

- Puoi utilizzare un motore di template come EJS o Pug per generare le viste dinamicamente.
- Crea una cartella `views` nella radice del tuo progetto e aggiungi i file delle viste con estensione corrispondente (`*.ejs` o `*.pug`).

Attenzione: Ci sono delle limitazioni nel progetto. Ogni volta che si esegue il comando `node server.js`, si crea il dataset e le istanze. Se si esegue di nuovo, si creano le stesse istanze del dataset. La vista non offre alcuno stile grafico particolare. Non è stato utilizzato Docker. Non sono gestite cartelle e sottocartelle. Questo progetto è stato creato a scopo didattico con possibili miglioramenti nella versione successiva.
Attenzione: Per questo progetto didattico è stato usato Chatgpt come supporto alla decisione, non per definire la logica del sito ma aiutare lo scrittore a trovare il comando giusto, evitando ore e ore di ricerca al problema. E' stato di grande aiuto anche StackOverflow; grazie alla community ci fornisce soluzioni formidabili a problemi ricorrenti.

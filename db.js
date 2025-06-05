// Estabelece conexão com o banco de dados e também cria um se não existir

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./users.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
        cod INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        cidade TEXT NOT NULL,
        uf VARCHAR(2),
        data DATE
        )
        `);
});

module.exports = db;
const express = require('express');
const app = express();
const userRoutes = require('../routes/users');

app.use(express.json());
app.use('/users', userRoutes);

app.listen(porta, () => {
    console.log("Rodando em: localhost:3000")
});
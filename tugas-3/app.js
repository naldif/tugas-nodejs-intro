// app.js
const express = require('express');
const add = require('./math'); // Mengimpor modul math.js

const app = express();
const port = 3000;

// Endpoint untuk menjumlahkan dua angka
app.get('/math', (req, res) => {
    const num1 = 5;
    const num2 = 4;
    const result = add(num1, num2);
    res.send(`Hasil penjumlahan: ${result}`);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

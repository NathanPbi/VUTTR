import express from 'express';
import endpoints from './endpoints';

const app = express();

app.get('/tools', (req, res) => {
    res.json(endpoints);
});

app.listen(3333, () => {
    // console.log('servidor rodando na porta 3333');
});

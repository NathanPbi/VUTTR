import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.get('/ping', (req, res) => {
    res.json('pong');
});

app.listen(3333, () => {
    // console.log('servidor rodando na porta 3333');
});

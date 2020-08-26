import express, { response, request } from 'express';
import routers from './routers/router';

const app = express();

app.use(express.json());

app.use('/', routers);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});

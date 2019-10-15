import express from 'express';
import route from './route';

const restApi = express();
restApi.use('/', route);
restApi.listen(8000, () => {
  console.log('rest api listening on port 8000');
});

import express from 'express';
import router from './routes/route.js';

const app = express();
const port = 3000;

// Allows us to send and receive json files
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());

// Lets the server to listen to all files
app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

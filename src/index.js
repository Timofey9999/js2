import express from 'express';
import cors from 'cors';
import canonize from './canonize';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  // console.log(req.query);
  const username = canonize(req.query.username); // тут поменял .урл на .усернаме чтобы с тестовым запросом совпасть
  // res.json({
  // //  url: req.query.username, // и тут поменял .урл на .усернаме чтобы вывелось
  //   username,
  // });
  // res.send('Hello World!')
  res.send(username);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

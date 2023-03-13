import express from 'express';
import bodyParser from 'body-parser';
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware.js';
import { getRedditToken, getRedditUser } from './http/redditClient.js';

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.post('/reddit/user', async (req, res) => {
  try {
    const data = await getRedditToken(req.body.code);
    const { access_token } = data;
    const user = await getRedditUser(access_token);
    res.json({ success: 'Reddit user call succeed!', url: req.url, body: user });
  } catch (error) {
    console.log(error);
    res.json({ error: true, url: req.url, body: error });
  }
});

app.get('/stripe/paymentIntent', function (req, res) {
  res.json({ success: 'get call succeed!', url: req.url });
});

app.get('/stripe/paymentConfirm', function (req, res) {
  res.json({ success: 'get call succeed!', url: req.url });
});

app.listen(3000, function () {
  console.log('App started');
});

export default app;

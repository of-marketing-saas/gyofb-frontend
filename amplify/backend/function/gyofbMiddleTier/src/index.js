import { createServer, proxy } from 'aws-serverless-express';

import app from './app.js';

const server = createServer(app);

const handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return proxy(server, event, context, 'PROMISE').promise;
};

export { handler };

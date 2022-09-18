import { app } from './app';
import { connectToDB } from './database/dbConnection';

const PORT = process.env.PORT || 4000;

app
  .listen(PORT, async () => {
    await connectToDB();

    console.log(`Running on port ${PORT}`);
  })
  .on('error', (err) => {
    console.log(err);
  });

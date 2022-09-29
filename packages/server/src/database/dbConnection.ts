import mongoose from 'mongoose';

const { NODE_ENV, DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME, DB_PROD_URI } =
  process.env;

export const connectToDB = async () => {
  mongoose.connection
    .on('error', (err) => console.error(err))
    .once('open', () => console.log('Mongo up and running'));

  if (NODE_ENV === 'dev') {
    await mongoose.connect(
      `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
    );

    return;
  }

  await mongoose.connect(DB_PROD_URI!);
};

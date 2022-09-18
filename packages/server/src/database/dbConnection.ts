import mongoose from 'mongoose';

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

export const connectToDB = async () => {
  mongoose.connection
    .on('error', (err) => console.error(err))
    .once('open', () => console.log('Mongo up and running'));

  await mongoose.connect(
    `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
  );
};

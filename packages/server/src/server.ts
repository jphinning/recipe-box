import { app } from "./app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

app.on("error", (err) => {
  console.log(err);
});

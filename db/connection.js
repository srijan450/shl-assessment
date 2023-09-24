import { connect } from "mongoose";

connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kdzdinp.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log("connect to db!");
  })
  .catch((e) => {
    console.error("cannot connect to db!");
  });

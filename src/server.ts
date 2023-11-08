import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();
app.listen(process.env.PORT, () => {
  console.log("express up");
});

// mongoose.connect(`MONGOURL`)
//   .then(() => {
//       console.log('mongo up');
//   })
//   .catch((err) => {
//       console.log(err, ' error mongo');
//   })

export { app };

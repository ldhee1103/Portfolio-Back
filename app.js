//app.js
// nodemon 설치 / typescript 적용 / db 연결 / tedd
const express = require("express");
const jwt = require("jsonwebtoken");
const { sequelize } = require("./models/index");
const app = express();
const cors = require("cors");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`
    🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧
    🚧🚧 DB연결 성공! 이게되네🚧🚧
    🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧
    `);
  })
  .catch((error) => {
    console.error(`
    🪓🪓🪓🪓🪓🪓🪓🪓🪓🪓🪓🪓🪓
    🪓🪓 DB연결 실패! ... 🪓🪓
    🪓🪓🪓🪓🪓🪓🪓🪓🪓🪓🪓🪓🪓
    `);
  });

// sequelize.sync();
require("dotenv").config();
const userRouter = require("./api/users/user_router");

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("PORT Check");
});

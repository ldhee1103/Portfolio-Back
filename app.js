//app.js
// nodemon 설치 / typescript 적용 / db 연결 / tedd
const express = require("express");
const jwt = require("jsonwebtoken");
const { sequelize } = require("./models/index");
const app = express();
const cors = require("cors");
const techRoutes = require("./routes/tech");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`
    🚧🚧🚧🚧🚧🚧🚧🚧🚧
    🚧🚧 DB연결 성공!🚧🚧
    🚧🚧🚧🚧🚧🚧🚧🚧🚧
    `);
  })
  .catch((error) => {
    console.error(`
    🪓🪓🪓🪓🪓🪓🪓🪓🪓🪓🪓
    🪓🪓 DB연결 실패! ... 🪓🪓
    🪓🪓🪓🪓🪓🪓🪓🪓🪓🪓🪓
    `);
  });

require("dotenv").config();
// const techRouter = require("./api/tech/tech_router");

app.use(express.json());
app.use(cors());
app.use("/tech", techRoutes);
app.listen(process.env.APP_PORT, () => {
  console.log("PORT Check");
});

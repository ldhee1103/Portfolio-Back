// // 환경변수, 실제 배포할 때는 'production'으로 바꿔야한다.
// const env = process.env.NODE_ENV || "development";
// // config
// const config = require(__dirname + "/../config")[env];
// // db 객체 생성
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.host,
//     config.database,
//     config.username,
//     config.password
//   );
// }

// db.sequelize = sequelize;

// db.Position = require("./position")(sequelize, Sequelize);

// module.exports = db;

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// Model
db.User = require("./position")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

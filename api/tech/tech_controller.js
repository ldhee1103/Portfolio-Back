const {
  createTech,
  getTechByTechId,
  getTech,
  updateTech,
  deleteTech,
} = require("./tech_service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt"); // 확인필요 코드
const { sign } = require("jsonwebtoken");

module.exports = {
  createTech: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.user = hashSync(body.user, salt);
    createTech(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          sucess: 0,
          message: "Database connect error",
        });
      }
      return res.status(200).json({
        sucess: 1,
        data: results,
      });
    });
  },
  getTechByTechId: (req, res) => {
    const id = req.params.id;
    getTechByTechId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          sucess: 0,
          message: "Record not Found",
        });
      }
      return res.json({
        sucess: 1,
        data: results,
      });
    });
  },
  getTech: (req, res) => {
    getTech((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        sucess: 1,
        data: results,
      });
    });
  },
  updateTech: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.user = hashSync(body.user, salt);
    updateTech(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update tech",
        });
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  deleteTech: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.user = hashSync(body.user, salt);
    deleteTech(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to delete tech",
        });
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
};

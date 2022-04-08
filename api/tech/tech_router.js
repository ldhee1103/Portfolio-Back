const {
  createTech,
  getTechByTechId,
  getTech,
  updateTech,
  deleteTech,
} = require("./tech_controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.patch("/updateTech", checkToken, updateTech);
router.patch("/deleteTech", checkToken, deleteTech);
router.get("/getTechByTechId:id", checkToken, getTechByTechId);
router.post("/createTech", checkToken, createTech);
router.get("/getTech", login);

module.exports = router;

const { Router } = require("express");
const router = Router();
const { Tech } = require("../models/index");

router.get("/", async (req, res) => {
  const teches = await Tech.findAll();
  const result = [];

  for (const tech of teches) {
    result.push({
      id: tech._id,
      name: tech.name,
      description: tech.description,
      link: tech.link,
    });
  }

  res.send(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const tech = await Tech.findOne({ where: { _id: id } });

  if (tech) {
    res.send({
      id: tech._id,
      name: tech.name,
      description: tech.description,
      link: tech.link,
    });
  } else {
    res.status(500).send("해당 기술을 찾을 수 없음");
  }
});

module.exports = router;

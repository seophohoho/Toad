const express = require("express");
const router = express.Router();
const { getEvaluationList } = require("../Models/myInfoModel");

router.get("/myinfolist", async (req, res) => {
  try {
    const result = await getEvaluationList();
    res.json(result);
  } catch (error) {
    console.error("API 호출 오류:", error);
    res
      .status(500)
      .json({ success: false, message: "API 호출 중 오류가 발생했습니다." });
  }
});

router.get("/projectsuccess", async (req, res) => {
    try {
      const result = await setEvaluationSuccess();
      res.json(result);
    } catch (error) {
      console.error("API 호출 오류:", error);
      res
        .status(500)
        .json({ success: false, message: "API 호출 중 오류가 발생했습니다." });
    }
  });

module.exports = router;
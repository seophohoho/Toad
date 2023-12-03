const express = require("express");
const router = express.Router();
const { getEvaluationList,getUserInfo,getProblemInfo,setEvaluationSuccess } = require("../Models/myInfoModel");

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

router.post("/projectsuccess", async (req, res) => {
    try {
      const result1 = await getUserInfo(req.submit);
      console.log('test'+req);
      const result2 = await getProblemInfo(req.problemNumber);
      const result3 = await setEvaluationSuccess(result1.user_id,result1.user_license,result2.problem_license,req.userId);
      res.json(result1);
    } catch (error) {
      console.error("API 호출 오류:", error);
      res
        .status(500)
        .json({ success: false, message: "API 호출 중 오류가 발생했습니다." });
    }
  });

module.exports = router;
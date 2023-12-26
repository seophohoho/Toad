const express = require("express");
const router = express.Router();
const { getLicenseList, getTopLicenseUser,setLicenseSubmit } = require("../Models/licenseListModel");

router.get("/licenselist", async (req,res) => {
    console.log('test');
  try {
    const result = await getLicenseList();
    res.json(result);
  } catch (error) {
    console.error("API 호출 오류:", error);
    res
      .status(500)
      .json({ success: false, message: "API 호출 중 오류가 발생했습니다." });
  }
});
//hello!
router.post("/licensesubmit", async (req,res) => {
  console.log('submit');
  console.log(req.body);
try {
  const topLicenseUserInfo = await getTopLicenseUser();
  const result = await setLicenseSubmit(req.body.userId,req.body.problem_number,topLicenseUserInfo.user_id);
  res.json(result);
} catch (error) {
  console.error("API 호출 오류:", error);
  res
    .status(500)
    .json({ success: false, message: "API 호출 중 오류가 발생했습니다." });
}
});

module.exports = router;
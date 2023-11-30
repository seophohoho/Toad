const express = require("express");
const router = express.Router();
const { getLicenseList } = require("../Models/licenseListModel");

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

module.exports = router;

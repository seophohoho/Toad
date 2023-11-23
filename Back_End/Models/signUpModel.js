const mariadb = require("mariadb");
const { DBconnection } = require("../Config/config");

const dbConfig = DBconnection();

const pool = mariadb.createPool(dbConfig);

async function signUp(formData, res) {
  try {
    const connection = await pool.getConnection();
    const query =
      "INSERT INTO user_info (user_id, user_pw, user_name, user_phone, user_email, user_major, user_field_of_study,user_tech_stack) VALUES ?,?,?,?,?,?,?,?)";
    const values = [
      formData.userId,
      formData.userPw,
      formData.userName,
      formData.userPhone,
      formData.userEmail,
      formData.userMajor,
      formData.userFieldOfStudy,
      formData.userTechStack,
    ];
    await connection.execute(query, values);
    connection.release();
    res.json({ success: true, message: "회원가입이 완료되었습니다." });
  } catch (error) {
    console.error("회원가입 오류:", error);
    res
      .status(500)
      .json({ success: false, message: "회원 가입 중 오류가 발생했습니다." });
  }
}

module.exports = { signUp };

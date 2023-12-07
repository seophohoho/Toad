const mariadb = require("mariadb");
const { DBconnection } = require("../Config/config");

const dbConfig = DBconnection();

const pool = mariadb.createPool(dbConfig);

async function signIn(formData,res) {
  try {
    // 데이터베이스 연결 얻기
    const connection = await pool.getConnection(); // pool에서 연결 얻기
    // MySQL 쿼리를 사용하여 사용자 인증
    const query = "SELECT * FROM toad_user_info WHERE user_id = ? AND user_pw = ?";
    const values = [formData.loginId, formData.loginPw];
    const [rows] = await connection.execute(query, values);
    // 연결 해제
    connection.release();
    if (rows.length === 0) {
        res
        .status(401)
        .json({ message: "로그인 실패: 사용자 정보가 일치하지 않습니다." });
      return;
    }
    else{
        res
        .status(200)
        .json({ message: "good" });
      return;
    }
  } catch (error) {
    console.error("로그인 오류:", error);
    res.status(500).json({ message: "로그인 중 오류가 발생했습니다." });
  }
}

async function getProfileCard(formData,res) {
  try {
    // 데이터베이스 연결 얻기
    const connection = await pool.getConnection(); // pool에서 연결 얻기
    // MySQL 쿼리를 사용하여 사용자 인증
    const query = `SELECT * FROM toad_user_info WHERE user_id = '${formData.userId}'`;
    const [rows] = await connection.execute(query);
    console.log([rows]);
    connection.release();
    return [rows];
  } catch (error) {
    console.error("로그인 오류:", error);
    res.status(500).json({ message: "로그인 중 오류가 발생했습니다." });
  }
}
module.exports = { signIn,getProfileCard };
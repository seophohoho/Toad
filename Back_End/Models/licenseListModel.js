const mariadb = require("mariadb");
const { DBconnection } = require("../Config/config");

const dbConfig = DBconnection();

const pool = mariadb.createPool(dbConfig);

async function getLicenseList() {
  try {
    // 데이터베이스 연결 얻기
    const connection = await pool.getConnection(); // pool에서 연결 얻기
    // MySQL 쿼리를 사용하여 사용자 인증
    const query = "SELECT * FROM toad_problem_info";
    const rows = await connection.execute(query);
    // 연결 해제
    connection.release();
    return rows;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "라이센스 목록 조회 중 오류가 발생했습니다." });
  }
}
module.exports = { getLicenseList };
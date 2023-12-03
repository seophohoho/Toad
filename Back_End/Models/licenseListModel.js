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

async function getTopLicenseUser(fieldOfStudy='웹/프론트'){
  try {
    // 데이터베이스 연결 얻기
    const connection = await pool.getConnection(); // pool에서 연결 얻기
    // MySQL 쿼리를 사용하여 사용자 인증
    const query = `select user_id,user_field_of_study,user_license from toad_user_info where user_field_of_study = '${fieldOfStudy}' order by user_license desc;`;
    const rows = await connection.execute(query);
    // 연결 해제
    connection.release();
    return rows[0];
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "라이센스 목록 조회 중 오류가 발생했습니다." });
  }
}

async function setLicenseSubmit(su_user_id,su_problem_number,ev_user_id) {
  try {
    // 데이터베이스 연결 얻기
    const connection = await pool.getConnection(); // pool에서 연결 얻기
    // MySQL 쿼리를 사용하여 사용자 인증
    const query = `insert into toad_user_evaluation (submit_user, problem_number, evaluation_user) VALUES ('${su_user_id}', ${su_problem_number}, '${ev_user_id}');`;
    const rows = await connection.execute(query);
    // 연결 해제
    connection.release();
    return rows;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "오류가 발생했습니다." });
  }
}
module.exports = { getLicenseList, getTopLicenseUser, setLicenseSubmit };
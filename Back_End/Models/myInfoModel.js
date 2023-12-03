const mariadb = require("mariadb");
const { DBconnection } = require("../Config/config");

const dbConfig = DBconnection();

const pool = mariadb.createPool(dbConfig);

async function getEvaluationList(userId='testman') {
  try {
    // 데이터베이스 연결 얻기
    const connection = await pool.getConnection(); // pool에서 연결 얻기
    // MySQL 쿼리를 사용하여 사용자 인증
    const query = `select toad_user_evaluation.submit_user, toad_problem_info.problem_title,toad_problem_info.problem_license,toad_user_evaluation.problem_number, toad_user_evaluation.evaluation_user
    from toad_user_evaluation
    inner join toad_problem_info on toad_user_evaluation.problem_number = toad_problem_info.problem_number
    where evaluation_user = '${userId}';`;
    const rows = await connection.execute(query);
    // 연결 해제
    connection.release();
    return rows;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "라이센스 목록 조회 중 오류가 발생했습니다." });
  }
}

async function getProblemInfo(problemNumber){
    try{
        const connection = await pool.getConnection();
        const query = `select problem_license from toad_problem_info where problem_number = ${problemNumber}`;
        const rows = await connection.execute(query);
        console.log(rows);
        // 연결 해제
        connection.release();
        return rows;
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "라이센스 목록 조회 중 오류가 발생했습니다." });
    }
}

async function getUserInfo(userId='seophohoho') {
    try {
      // 데이터베이스 연결 얻기
      const connection = await pool.getConnection(); // pool에서 연결 얻기
      // MySQL 쿼리를 사용하여 사용자 인증
      const query = `select user_id,user_license from toad_user_info where user_id = '${userId}'`;
      const rows = await connection.execute(query);
      console.log(rows);
      // 연결 해제
      connection.release();
      return rows;
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "라이센스 목록 조회 중 오류가 발생했습니다." });
    }
  }

  async function getProblemInfo(problemNumber=5) {
    try {
      // 데이터베이스 연결 얻기
      const connection = await pool.getConnection(); // pool에서 연결 얻기
      // MySQL 쿼리를 사용하여 사용자 인증
      const query = `select problem_license from toad_problem_info where problem_number = ${problemNumber}`;
      const rows = await connection.execute(query);
      console.log(rows);
      // 연결 해제
      connection.release();
      return rows;
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "라이센스 목록 조회 중 오류가 발생했습니다." });
    }
  }


async function setEvaluationSuccess(submit='seophohoho',user_license=0,problem_license=5,userId) {
    try {
      // 데이터베이스 연결 얻기
      const connection = await pool.getConnection(); // pool에서 연결 얻기
      // MySQL 쿼리를 사용하여 사용자 인증
      let user_license_result = user_license + problem_license;
      const query = `update toad_user_info set user_license = ${user_license_result} where user_id = '${submit}'`;
      const rows = await connection.execute(query);
      // 연결 해제
      connection.release();
      return rows;
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "라이센스 목록 조회 중 오류가 발생했습니다." });
    }
  }

module.exports = { getEvaluationList, getUserInfo, getProblemInfo,setEvaluationSuccess };
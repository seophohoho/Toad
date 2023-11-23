const express = require("express");
const cors = require('cors');
const signAPI = require("./API/signAPI");

const app = express();
const port = 4000;

//POST request로부터 파라미터 데이터 추출.
app.use(express.json());

//API 연결
app.use(cors());
app.use("/sign", signAPI);

//서버 실행
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/에서 실행 중입니다.`);
});
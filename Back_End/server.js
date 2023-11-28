const express = require("express");
<<<<<<< HEAD
=======
const cors = require('cors');
const signAPI = require("./API/signAPI");
>>>>>>> 9fcb9d3723118585aa22ae82396ef03fc8cacff7

const app = express();
const port = 4000;

<<<<<<< HEAD
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/에서 실행 중입니다.`);
});
=======
//POST request로부터 파라미터 데이터 추출.
app.use(express.json());

//API 연결
app.use(cors());
app.use("/sign", signAPI);

//서버 실행
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/에서 실행 중입니다.`);
});
>>>>>>> 9fcb9d3723118585aa22ae82396ef03fc8cacff7

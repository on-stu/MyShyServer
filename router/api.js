const express = require("express");
const Router = express.Router();
const User = require("../model/User");
const Sing = require("../model/Sing");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "adfiaoenncjnasjdif23348u%%^$ufnnjsbbshdfknc";

async function getNickname(id) {
  const user = await User.findOne({ _id: id }).lean();
  if (!user) {
    return "error";
  } else {
    return user.nickname;
  }
}

//check isLoggedIn
Router.post("/checkIsLoggedIn", async (req, res) => {
  const { token } = await req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userObj = await User.findOne({ _id: user.id }).lean();
    res.send({ status: "success", user: userObj });
  } catch (error) {
    res.send({ status: "error", error });
  }
});

//login api
Router.post("/login", async (req, res) => {
  const {
    body: { username, password },
  } = await req;
  const user = await User.findOne({ username }).lean();

  if (!user) {
    return res.json({ status: "error", error: "아이디가 틀립니다." });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      { id: user._id, username: user.username },
      JWT_SECRET
    );
    return res.json({ status: "success", data: token });
  } else {
    return res.json({ status: "error", error: "비밀번호가 틀립니다." });
  }
});

//kakao login api
Router.post("/kakaoLogin", async (req, res) => {
  const kakaoUserId = await req.body.profile.id;
  const kakaoUserNickname = await req.body.profile.properties.nickname;

  const user = await User.findOne({ username: kakaoUserId }).lean();
  if (!user) {
    const response = await User.create({
      username: kakaoUserId,
      password: kakaoUserId,
      nickname: kakaoUserNickname,
      socialLogin: "Kakao",
    });
    const token = jwt.sign(
      {
        id: response._id,
        username: response.username,
      },
      JWT_SECRET
    );
    return res.json({ status: "success", data: token });
  } else {
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      JWT_SECRET
    );
    return res.json({ status: "success", data: token });
  }
});

//register api
Router.post("/register", async (req, res) => {
  const {
    body: { username, password, nickname },
  } = await req;
  const hashedPassword = await bcrypt.hash(password, 10);

  if (typeof username !== "string") {
    return res.json({ status: "error", error: "사용할 수 없는 아이디" });
  }

  if (typeof password !== "string") {
    return res.json({ status: "error", error: "사용할 수 없는 비밀번호" });
  }

  if (username === "") {
    return res.json({ status: "error", error: "아이디를 입력해주세요" });
  }

  if (password.length < 6) {
    return res.json({
      status: "error",
      error: "비밀번호가 너무 짧습니다. 비밀번호는 최소 6자여야 합니다.",
    });
  }

  if (nickname === "") {
    return res.json({ status: "error", error: "닉네임을 입력해주세요" });
  }
  try {
    const response = await User.create({
      username,
      password: hashedPassword,
      nickname,
    });
    console.log("successful with", response);
  } catch (error) {
    if (error.code === 11000) {
      console.log("아이디가 이미 사용중입니다");
      return res.json({ status: "error", error: "아이디가 이미 사용중입니다" });
    }
  }
  res.send({ status: "success", username, password, nickname });
});

//sing post api
Router.post("/singpost", async (req, res) => {
  const {
    body: { title, description, url, creatorId, createdAt },
  } = await req;
  const nickname = await getNickname(creatorId);
  try {
    const response = await Sing.create({
      title,
      description,
      url,
      creatorId,
      createdAt,
      creatorNickname: nickname,
      likes: 0,
      comments: [],
    });
    console.log("successful with", response);
    return res.json({ status: "success", data: response });
  } catch (error) {
    return res.json({ status: "error", error: error });
  }
});

//get sings api
Router.post("/getsings", async (req, res) => {
  const sings = await Sing.find({});
  return res.json({ status: "success", sings });
});

Router.get("/singview", async (req, res) => {
  try {
    const skip =
      req.query.skip && /^\d+$/.test(req.query.skip)
        ? Number(req.query.skip)
        : 0;
    const sings = await Sing.find({}, undefined, { skip, limit: 9 });
    return res.json(sings);
  } catch (e) {
    console.log(e);
  }
});

Router.post("/getsingbyid/:id", async (req, res) => {
  const {
    params: { id },
  } = req;
  const sing = await Sing.find({ _id: id });
  return res.json({ status: "success", sing });
});

module.exports = Router;

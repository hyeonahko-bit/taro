const QUESTIONS = [
  {
    title: "1) 늦은 이유, 지금 말해보세요.",
    desc: "세상 납득 가능한가? 아니면 완너벌인가?",
    choices: [
      { text: "알람 7개 꺼짐. 알람이 나를 손절.", score: 0 },
      { text: "택시가 나를 도망감. 난리자베스 실화.", score: 1 },
      { text: "좋🤙🏻다👍🏻 하다가 시간 증발함.", score: 0 },
      { text: "엠비스찬 때문에 궁합 재느라 지각함.", score: 0 },
      { text: "센게 올라와서 잠깐 숨 고름.", score: 1 },
      { text: "유대인 모드로 유튜브만 보다가 늦음.", score: 0 },
    ],
  },
  {
    title: "2) 증거 제출 가능한가?",
    desc: "스크린샷, 위치 공유, 뭐라도. 말만 하면 두존크.",
    choices: [
      { text: "증거? 젬민이가 다 한다고 했음.", score: 0 },
      { text: "영수증 있음. 감다살 인정?", score: 2 },
      { text: "증거 없음. 완너벌 그 자체.", score: 0 },
      { text: "캘린더 캡처 있음. 조작 아님.", score: 1 },
      { text: "위치 공유 on. 도망 아님.", score: 2 },
      { text: "말로만 하겠다. 믿음 테스트.", score: 0 },
    ],
  },
  {
    title: "3) 보상 의지 있나?",
    desc: "마지막 찬스. 여기서 감다뒤면 끝.",
    choices: [
      { text: "커피 사오기 + 디저트 1개 추가.", score: 2 },
      { text: "이따 톡 많이 할게. (입는순나)", score: 0 },
      { text: "주먹자로 하겠음. 밥은 됨.", score: 1 },
      { text: "지각비 내고 오늘 풀가동.", score: 2 },
      { text: "다음부터 10분 일찍 나옴.", score: 1 },
      { text: "보상 없음. 이게 나임.", score: 0 },
    ],
  },
];

const RESULT_POOL = [
  {
    main: "정당화 실패",
    sub: "벌칙 확정",
    tags: ["핑계 감다뒤", "완너벌 확정", "말만 하면 OUT"],
  },
  {
    main: "정당화 실패",
    sub: "벌칙 확정",
    tags: ["난리자베스", "지각 빌드업 금지", "주먹자로 주의"],
  },
  {
    main: "정당화 보류",
    sub: "지각비 납부",
    tags: ["좋🤙🏻다👍🏻는 인정", "입는순나 주의", "말바꿈 금지"],
  },
  {
    main: "정당화 성공(희귀)",
    sub: "이번만 패스. 다음은 없음.",
    tags: ["감다살", "증거 제출 완료", "센게는 참자"],
  },
];

const PENALTIES = [
  "커피 사오기",
  "마라탕 사오기",
  "치킨 쏘기",
  "버블티 쏘기",
  "밥 쏘기",
  "존칭쓰기 3일",
  "1일 심부름 + 칭찬 3회",
  "닉네임 7일 변경",
  "사과문 3줄 음성",
  "애교 1분 음성 녹음",
  "치킨 사기",
  "버블티 사기",
  "디저트 사기",
  "디저트 추가 의무",
];

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const progressText = document.getElementById("progressText");
const barFill = document.getElementById("barFill");
const questionTitle = document.getElementById("questionTitle");
const questionDesc = document.getElementById("questionDesc");
const choicesEl = document.getElementById("choices");
const resultMain = document.getElementById("resultMain");
const resultSub = document.getElementById("resultSub");
const resultTags = document.getElementById("resultTags");
const retryBtn = document.getElementById("retryBtn");
const app = document.querySelector(".app");
const resultCard = document.querySelector(".result-card");

let currentIndex = 0;
let totalScore = 0;
let activeQuestions = [];

function shuffle(list) {
  const array = [...list];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function show(el) {
  el.classList.remove("is-hidden");
}

function hide(el) {
  el.classList.add("is-hidden");
}

function updateProgress() {
  progressText.textContent = `${currentIndex + 1} / ${activeQuestions.length}`;
  const percent = ((currentIndex + 1) / activeQuestions.length) * 100;
  barFill.style.width = `${percent}%`;
}

function renderQuestion() {
  const current = activeQuestions[currentIndex];
  questionTitle.textContent = current.title;
  questionDesc.textContent = current.desc;
  updateProgress();

  choicesEl.innerHTML = "";
  current.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice";
    btn.textContent = choice.text;
    btn.addEventListener("click", () => handleChoice(choice.score));
    choicesEl.appendChild(btn);
  });
}

function pickResult() {
  if (totalScore >= 5) {
    return RESULT_POOL[3];
  }
  if (totalScore >= 3) {
    return RESULT_POOL[2];
  }
  return RESULT_POOL[Math.floor(Math.random() * 2)];
}

function renderResult() {
  const resultData = pickResult();
  const penalty = PENALTIES[Math.floor(Math.random() * PENALTIES.length)];
  resultMain.textContent = resultData.main;
  resultSub.textContent =
    resultData.main === "정당화 성공(희귀)" ? resultData.sub : penalty;
  const isFail = resultData.main.includes("실패");
  resultTags.innerHTML = resultData.tags
    .map((tag) => `<span class="tag">#${tag}</span>`)
    .join("");
  if (isFail) {
    resultCard?.classList.remove("is-fail");
    void resultCard?.offsetWidth;
    resultCard?.classList.add("is-fail");
    resultCard?.classList.remove("is-success");
    app?.classList.remove("is-storm");
    void app?.offsetWidth;
    app?.classList.add("is-storm");
  } else {
    resultCard?.classList.remove("is-fail");
    resultCard?.classList.add("is-success");
    app?.classList.remove("is-storm");
  }
}

function handleChoice(score) {
  totalScore += score;
  currentIndex += 1;
  if (currentIndex < activeQuestions.length) {
    renderQuestion();
    return;
  }
  hide(quiz);
  renderResult();
  show(result);
}

function startQuiz() {
  currentIndex = 0;
  totalScore = 0;
  activeQuestions = QUESTIONS.map((question) => ({
    ...question,
    choices: shuffle(question.choices).slice(0, 3),
  }));
  hide(intro);
  hide(result);
  show(quiz);
  renderQuestion();
}

startBtn.addEventListener("click", startQuiz);
retryBtn.addEventListener("click", startQuiz);

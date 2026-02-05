const ANSWERS = ["YES", "NO"];
const TAROT_CARDS = [
  {
    id: 0,
    name: "광대",
    en: "The Fool",
    emoji: "🧳",
    accent: "#38bdf8",
    keywords: ["새로운 출발", "모험", "순수"],
    summary: "과감한 첫걸음의 에너지. 무모함보다 준비가 필요해요.",
  },
  {
    id: 1,
    name: "마법사",
    en: "The Magician",
    emoji: "🪄",
    accent: "#6366f1",
    keywords: ["재능", "의지", "중재"],
    summary: "하늘과 땅을 잇는 조력자. 스스로의 능력을 믿어보세요.",
  },
  {
    id: 2,
    name: "여사제",
    en: "The High Priestess",
    emoji: "🌙",
    accent: "#0ea5e9",
    keywords: ["직관", "내면", "잠재력"],
    summary: "조용한 지혜가 답을 알려줘요. 내면을 들여다보세요.",
  },
  {
    id: 3,
    name: "여왕",
    en: "The Empress",
    emoji: "🌾",
    accent: "#22c55e",
    keywords: ["풍요", "성장", "만족"],
    summary: "풍성한 결실과 생명력. 새로운 활력을 찾아볼 때예요.",
  },
  {
    id: 4,
    name: "황제",
    en: "The Emperor",
    emoji: "👑",
    accent: "#f97316",
    keywords: ["권위", "질서", "성공"],
    summary: "엄격한 기준과 책임감이 목표 달성을 돕습니다.",
  },
  {
    id: 5,
    name: "교황",
    en: "The Hierophant",
    emoji: "⛪",
    accent: "#8b5cf6",
    keywords: ["전통", "가르침", "안내"],
    summary: "신뢰할 수 있는 안내자와 배움. 기본을 돌아보세요.",
  },
  {
    id: 6,
    name: "연인들",
    en: "The Lovers",
    emoji: "💞",
    accent: "#ec4899",
    keywords: ["사랑", "선택", "유혹"],
    summary: "사랑과 선택의 갈림길. 유혹과 책임을 함께 봐야 해요.",
  },
  {
    id: 7,
    name: "전차",
    en: "The Chariot",
    emoji: "🐎",
    accent: "#3b82f6",
    keywords: ["야망", "의지", "승리"],
    summary: "뚜렷한 목표와 추진력. 의지가 결과를 만듭니다.",
  },
  {
    id: 8,
    name: "힘",
    en: "Strength",
    emoji: "🦁",
    accent: "#f59e0b",
    keywords: ["용기", "내면의 힘", "온화함"],
    summary: "부드럽지만 강한 힘. 마음의 균형이 시련을 넘겨요.",
  },
  {
    id: 9,
    name: "은둔자",
    en: "The Hermit",
    emoji: "🕯️",
    accent: "#64748b",
    keywords: ["탐구", "지혜", "길잡이"],
    summary: "빛을 들고 길을 찾는 시기. 답은 내면에 있어요.",
  },
  {
    id: 10,
    name: "운명의 수레바퀴",
    en: "Wheel of Fortune",
    emoji: "🎡",
    accent: "#14b8a6",
    keywords: ["변화", "순환", "전환점"],
    summary: "상승과 하강의 순환. 흐름에 맞춰 적응하세요.",
  },
  {
    id: 11,
    name: "정의",
    en: "Justice",
    emoji: "⚖️",
    accent: "#0f172a",
    keywords: ["균형", "공정", "숙고"],
    summary: "옳고 그름을 따지는 시기. 균형을 되찾아야 합니다.",
  },
  {
    id: 12,
    name: "매달린 사람",
    en: "The Hanged Man",
    emoji: "🙃",
    accent: "#84cc16",
    keywords: ["희생", "관점 전환", "인내"],
    summary: "자발적 멈춤과 관점의 전환. 기다림이 의미를 줍니다.",
  },
  {
    id: 13,
    name: "죽음",
    en: "Death",
    emoji: "☠️",
    accent: "#64748b",
    keywords: ["종결", "변화", "새 시작"],
    summary: "끝은 새로운 시작. 낡은 집착을 내려놓아야 해요.",
  },
  {
    id: 14,
    name: "절제",
    en: "Temperance",
    emoji: "🧪",
    accent: "#10b981",
    keywords: ["조화", "절제", "평온"],
    summary: "극단을 피하고 균형을 찾는 시기입니다.",
  },
  {
    id: 15,
    name: "악마",
    en: "The Devil",
    emoji: "😈",
    accent: "#ef4444",
    keywords: ["집착", "속박", "유혹"],
    summary: "스스로 만든 쇠사슬일 수 있어요. 집착을 살펴보세요.",
  },
  {
    id: 16,
    name: "탑",
    en: "The Tower",
    emoji: "🗼",
    accent: "#f97316",
    keywords: ["붕괴", "각성", "변화"],
    summary: "갑작스러운 변화가 진실을 드러냅니다.",
  },
  {
    id: 17,
    name: "별",
    en: "The Star",
    emoji: "⭐",
    accent: "#60a5fa",
    keywords: ["희망", "치유", "평온"],
    summary: "혼란 후의 회복과 평온. 희망을 놓지 마세요.",
  },
  {
    id: 18,
    name: "달",
    en: "The Moon",
    emoji: "🌕",
    accent: "#a855f7",
    keywords: ["무의식", "직관", "불안"],
    summary: "희미한 길을 비추는 달빛. 직관을 믿어보세요.",
  },
  {
    id: 19,
    name: "태양",
    en: "The Sun",
    emoji: "☀️",
    accent: "#f59e0b",
    keywords: ["기쁨", "성취", "활력"],
    summary: "밝은 에너지와 성취의 카드. 기쁨을 누리세요.",
  },
  {
    id: 20,
    name: "심판",
    en: "Judgement",
    emoji: "📯",
    accent: "#4f46e5",
    keywords: ["결단", "각성", "재탄생"],
    summary: "결단이 필요한 시기. 새로운 방식으로 깨어납니다.",
  },
  {
    id: 21,
    name: "세계",
    en: "The World",
    emoji: "🌍",
    accent: "#22c55e",
    keywords: ["완성", "성취", "순환"],
    summary: "여정의 마무리와 새로운 시작의 문턱입니다.",
  },
];

const cardGrid = document.getElementById("cardGrid");
const questionInput = document.getElementById("questionInput");
const resultModal = document.getElementById("resultModal");
const resultValue = document.getElementById("resultValue");
const resultNote = document.getElementById("resultNote");
const resultCard = document.getElementById("resultCard");
const resultOptions = document.getElementById("resultOptions");
const interpretText = document.getElementById("interpretText");
const interpretTags = document.getElementById("interpretTags");
const resultAdvice = document.getElementById("resultAdvice");
const shareBtn = document.getElementById("shareBtn");
const shareNote = document.getElementById("shareNote");
const resetBtn = document.getElementById("resetBtn");
const closeBtn = document.getElementById("closeBtn");
const resetBar = document.getElementById("resetBar");
const resetFloatingBtn = document.getElementById("resetFloatingBtn");

let selectedIndex = null;
let deck = [];
let currentCard = null;
let currentAnswer = null;
let selectedDepth = "simple";
let selectedTone = "neutral";
let shareTimer = null;

const DEPTH_LABELS = {
  simple: "간단",
  detail: "자세히",
};

const TONE_LABELS = {
  positive: "긍정",
  neutral: "중립",
  warning: "경고",
};

const TONE_LINES = {
  positive: "밝은 흐름이 우세해요. 자신감을 가져도 좋아요.",
  neutral: "흐름은 중립적이에요. 선택과 행동이 결과를 좌우해요.",
  warning: "변수를 점검해야 해요. 서두르기보다 확인이 필요해요.",
};

const TONE_ORDER = ["positive", "neutral", "warning"];

function shuffle(list) {
  const array = [...list];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function cardBackTemplate() {
  return `
    <div class="card-back">
      <div class="card-back-title">TARO</div>
      <div class="card-back-emoji">✨</div>
    </div>
  `;
}

function cardFrontTemplate(card) {
  return `
    <div class="card-front" style="--accent: ${card.accent}">
      <div class="card-emoji">${card.emoji}</div>
      <div class="card-title">${card.name}</div>
      <div class="card-sub">No. ${card.id} · ${card.en}</div>
      <div class="card-tags">
        ${card.keywords.map((tag) => `<span class="card-tag">${tag}</span>`).join("")}
      </div>
      <p class="card-desc">${card.summary}</p>
    </div>
  `;
}

function setActiveOption(attrName, value) {
  resultOptions.querySelectorAll(`[${attrName}]`).forEach((button) => {
    if (button.getAttribute(attrName) === value) {
      button.classList.add("is-active");
    } else {
      button.classList.remove("is-active");
    }
  });
}

function buildInterpretation(card) {
  const question = questionInput.value.trim();
  const questionLine = question ? `질문인 "${question}"에 대해` : "현재 상황에 대해";
  const keywordText = card.keywords.join(", ");
  const toneLine = TONE_LINES[selectedTone];

  if (selectedDepth === "detail") {
    return `${card.summary} ${questionLine} ${toneLine} 핵심 키워드는 ${keywordText}예요.`;
  }
  return question
    ? `${card.summary} ${questionLine} 차분히 방향을 잡아보세요.`
    : card.summary;
}

function pickAdvice(card) {
  const key = card.keywords[0];
  const templates = {
    positive: [
      `${key}의 기운을 믿고 가볍게 시작해보세요.`,
      `${key}이(가) 당신 편이에요. 한 걸음 내딛어도 좋아요.`,
      `${key}을 살리면 더 밝은 흐름이 열려요.`,
    ],
    neutral: [
      `${key}을 기준으로 작은 선택부터 정리해보세요.`,
      `${key}에 집중해 균형을 잡아보세요.`,
      `${key}을 체크리스트처럼 하나씩 확인해보세요.`,
    ],
    warning: [
      `${key}에 과몰입하지 말고 속도를 조절하세요.`,
      `${key} 관련 변수부터 먼저 점검해보세요.`,
      `${key}을 이유로 무리하지 않도록 주의하세요.`,
    ],
  };
  const pool = templates[selectedTone] || templates.neutral;
  return pool[Math.floor(Math.random() * pool.length)];
}

function updateResult(card) {
  if (!card) return;
  interpretText.textContent = buildInterpretation(card);
  interpretTags.innerHTML = card.keywords
    .map((tag) => `<span class="card-tag">${tag}</span>`)
    .join("");
  resultAdvice.textContent = pickAdvice(card);
  resultNote.textContent = `${DEPTH_LABELS[selectedDepth]} · ${TONE_LABELS[selectedTone]} 톤`;
}

function buildCards() {
  selectedIndex = null;
  deck = shuffle(TAROT_CARDS);
  cardGrid.innerHTML = "";
  deck.forEach((card, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "card";
    button.setAttribute("aria-label", `${card.name} 카드 선택`);
    button.style.setProperty("--accent", card.accent);
    button.innerHTML = cardBackTemplate();
    button.addEventListener("click", () => handleSelect(index));
    cardGrid.appendChild(button);
  });
}

function handleSelect(index) {
  if (selectedIndex !== null) return;
  selectedIndex = index;
  currentCard = deck[index];

  const cards = [...cardGrid.querySelectorAll(".card")];
  cards.forEach((cardButton, i) => {
    if (i === index) {
      cardButton.classList.add("selected");
      cardButton.innerHTML = cardFrontTemplate(deck[i]);
    } else {
      cardButton.classList.add("disabled");
      cardButton.setAttribute("disabled", "true");
    }
  });

  const answer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
  currentAnswer = answer;
  selectedDepth = "simple";
  selectedTone = TONE_ORDER[Math.floor(Math.random() * TONE_ORDER.length)];
  setActiveOption("data-depth", selectedDepth);
  resultValue.textContent = currentAnswer;
  resultCard.innerHTML = cardFrontTemplate(currentCard);
  updateResult(currentCard);
  resetBar.classList.add("is-visible");
  openModal();
}

function reset() {
  resultValue.textContent = "-";
  resultNote.textContent = "카드를 선택하면 결과가 보여요.";
  resultCard.innerHTML = '<div class="result-empty">선택된 카드가 없어요</div>';
  interpretText.textContent = "카드를 선택하면 해석이 보여요.";
  interpretTags.innerHTML = "";
  resultAdvice.textContent = "한 줄 조언이 여기에 표시돼요.";
  shareNote.textContent = "";
  currentCard = null;
  currentAnswer = null;
  selectedTone = "neutral";
  resetBar.classList.remove("is-visible");
  buildCards();
  closeModal();
}

resetBtn.addEventListener("click", reset);
resetFloatingBtn.addEventListener("click", reset);
closeBtn.addEventListener("click", closeModal);
resultModal.addEventListener("click", (event) => {
  if (event.target && event.target.matches("[data-close]")) {
    closeModal();
  }
});

questionInput.addEventListener("input", () => {
  if (currentCard) {
    updateResult(currentCard);
  }
});

resultOptions.addEventListener("click", (event) => {
  const button = event.target.closest(".option-chip");
  if (!button) return;

  if (button.dataset.depth) {
    selectedDepth = button.dataset.depth;
    setActiveOption("data-depth", selectedDepth);
  }

  updateResult(currentCard);
});

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function buildShareText() {
  if (!currentCard) return "";
  const question = questionInput.value.trim();
  return [
    "[타로 Yes/No 결과]",
    question ? `질문: ${question}` : null,
    `카드: ${currentCard.name} (${currentCard.en})`,
    `답변: ${currentAnswer}`,
    `해석 깊이: ${DEPTH_LABELS[selectedDepth]}`,
    `톤: ${TONE_LABELS[selectedTone]}`,
    `해석: ${interpretText.textContent}`,
    `한 줄 조언: ${resultAdvice.textContent}`,
  ].filter(Boolean).join("\n");
}

shareBtn.addEventListener("click", async () => {
  if (!currentCard) {
    shareNote.textContent = "먼저 카드를 선택해 주세요.";
    return;
  }

  try {
    await copyToClipboard(buildShareText());
    shareNote.textContent = "클립보드에 복사했어요.";
  } catch (error) {
    shareNote.textContent = "복사에 실패했어요. 다시 시도해 주세요.";
  }

  if (shareTimer) {
    clearTimeout(shareTimer);
  }
  shareTimer = setTimeout(() => {
    shareNote.textContent = "";
  }, 2400);
});

function openModal() {
  resultModal.classList.add("is-open");
  resultModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  resultModal.classList.remove("is-open");
  resultModal.setAttribute("aria-hidden", "true");
}

buildCards();

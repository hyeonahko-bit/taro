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
const resultValue = document.getElementById("resultValue");
const resultNote = document.getElementById("resultNote");
const resultCard = document.getElementById("resultCard");
const resetBtn = document.getElementById("resetBtn");

let selectedIndex = null;
let deck = [];

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
  resultValue.textContent = answer;
  resultNote.textContent = "상징과 느낌을 함께 읽어보세요.";
  resultCard.innerHTML = cardFrontTemplate(deck[index]);
}

function reset() {
  resultValue.textContent = "-";
  resultNote.textContent = "카드를 선택하면 결과가 보여요.";
  resultCard.innerHTML = '<div class="result-empty">선택된 카드가 없어요</div>';
  buildCards();
}

resetBtn.addEventListener("click", reset);

buildCards();

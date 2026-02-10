export interface Award {
  year: number;
  contest: string;
  contestFull: string;
  result: string;
}

export interface Work {
  id: string;
  title: string;
  image: string;
  year: number;
  description: string;
  specs?: {
    dimensions?: string;
    volume?: string;
    plants?: string[];
    fish?: string[];
    hardscape?: string[];
    lighting?: string;
    filtration?: string;
    substrate?: string;
    co2?: string;
  };
  judgeComments?: string[];
  awards: Award[];
}

export const works: Work[] = [
  {
    id: "sprout-again",
    title: "Sprout Again",
    image: "/works/sprout-again-kiac2025.jpg",
    year: 2025,
    description:
      "2025년 KIAC에 출품한 대형 수조 작품. 120cm 수조에서 펼쳐지는 웅장한 자연 풍경을 담았습니다.",
    specs: {
      dimensions: "W120 × D60 × H45 cm",
    },
    awards: [
      {
        year: 2025,
        contest: "KIAC",
        contestFull: "Korea International Aquascaping Contest",
        result: "World Ranking 22위",
      },
    ],
  },
  {
    id: "forest-of-fading-time",
    title: "Forest Of Fading Time",
    image: "/works/forest-of-fading-time-aga2025.png",
    year: 2025,
    description:
      "오래된 숲을 표현하고자 한 작품. 중앙의 큰 나무는 오래된 숲에서 본 사슴뿔을 떠올리며 제작했으며, 강렬한 X자 구도로 시선을 집중시키면서도 소실점을 활용해 편안한 수경 뷰를 만들어냈습니다.",
    specs: {
      dimensions: "90 × 45 × 38 cm",
      volume: "153L",
      plants: [
        "Eleocharis acicularis 'Mini'",
        "Marsilea crenata",
        "Micranthemum callitrichoides 'Cuba'",
        "Micranthemum sp. 'Monte Carlo'",
        "Staurogyne repens",
        "Hydrocotyle maritima",
        "Vesicularia ferriei 'Weeping'",
        "Riccardia chamedryfolia",
        "Bucephalandra sp.",
        "Eleocharis montevidensis",
      ],
      fish: ["Cardinal Tetra (Paracheirodon axelrodi)"],
      hardscape: ["Driftwood"],
      lighting: "Metal Lite Real Ver 2",
      filtration: "QQ1500 + Neo Media",
      substrate: "Neo Plants Soil",
      co2: "고압 CO₂, 초당 3방울",
    },
    judgeComments: [
      "Ismael Aguilar Soria: \"Magnificent work... the overall result is very good.\"",
      "Dave Chow: 유목 배치와 현대적인 식재 디자인을 높이 평가.",
    ],
    awards: [
      {
        year: 2025,
        contest: "IAPLC",
        contestFull: "International Aquatic Plants Layout Contest (Japan)",
        result: "77개국 1,533명 중 78위",
      },
      {
        year: 2025,
        contest: "AGA",
        contestFull: "Aquatic Gardeners Association International Contest (USA)",
        result: "52개국 426작품 중 전체 22위 / 90~220L 1위",
      },
    ],
  },
  {
    id: "boundary-of-life",
    title: "Boundary of Life",
    image: "/works/boundary-of-life-aga2024.jpg",
    year: 2024,
    description:
      "생명의 경계를 탐구하는 작품. 돌과 수초의 조화를 통해 물속과 육상의 경계를 표현했습니다.",
    specs: {
      dimensions: "90 × 45 × 38 cm",
      volume: "153L",
      plants: [
        "Micranthemum sp. 'Monte Carlo'",
        "Vesicularia ferriei",
        "Rotala rotundifolia sp. Green",
      ],
      fish: ["Rasbora hengeli"],
      hardscape: ["Dragon stone"],
      lighting: "Metal Lite Real 2",
      filtration: "QQ1500",
    },
    awards: [
      {
        year: 2024,
        contest: "AGA",
        contestFull: "Aquatic Gardeners Association International Contest (USA)",
        result: "80-161L 부분 2위",
      },
      {
        year: 2024,
        contest: "CIAC",
        contestFull: "China International Aquascaping Contest",
        result: "35위",
      },
    ],
  },
  {
    id: "overcomes",
    title: "Overcomes",
    image: "/works/overcomes-kiac2023.jpg",
    year: 2023,
    description:
      "왼쪽의 큰 유목과 그 아래 그림자에 주목하고, 오른쪽은 방사형으로 자연스러움을 표현하고자 했습니다. 수초 종류를 최소한으로 사용하면서도 최대한 자연스러운 모습을 목표로 했으며, 소실점 옆에 헤어 글라스를 전경초로 식재한 것이 좋은 선택이었습니다.",
    specs: {
      dimensions: "90 × 45 × 45 cm",
      volume: "180L",
      plants: [
        "Rotala rotundifolia Green",
        "Potamogeton franchetii",
        "Micranthemum sp. 'Monte Carlo'",
        "Vesicularia ferriei",
      ],
      fish: ["Black Neon Tetra (Hyphessobrycon herbertaxelrodi)"],
      hardscape: ["Dragon stone", "Driftwood"],
      filtration: "QQ1500",
    },
    judgeComments: [
      "\"유목의 형태를 효과적으로 활용하여 아름답고 유기적인 느낌을 만들어냈다.\"",
      "\"자연의 힘에 의존하는 것이 걸작을 탄생시키는 것 같다.\"",
      "\"수초의 배치가 매우 잘 되어 있고 세심하게 관리되어 있다.\"",
    ],
    awards: [
      {
        year: 2023,
        contest: "KIAC",
        contestFull: "Korea International Aquascaping Contest",
        result: "42개국 301명 중 7위 (한국인 1위)",
      },
      {
        year: 2023,
        contest: "AGA",
        contestFull: "Aquatic Gardeners Association International Contest (USA)",
        result: "162-220L 부분 TOP 10",
      },
      {
        year: 2023,
        contest: "ITAC",
        contestFull: "Italian Aquascaping Contest",
        result: "6위",
      },
      {
        year: 2023,
        contest: "IIAC",
        contestFull: "ISTA International Aquascaping Contest",
        result: "15위",
      },
      {
        year: 2023,
        contest: "AIAC",
        contestFull: "Aquair International Aquascape Contest",
        result: "10위",
      },
    ],
  },
];

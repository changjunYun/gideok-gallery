import { Artwork, ProjectDirection } from './types';

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: 'Void Structure',
    description: '공간의 부재와 존재를 탐구한 디지털 조형 작업입니다. 정적임 속에 동적인 흐름을 담았습니다.',
    imageUrl: 'https://picsum.photos/800/1000?random=1',
    category: 'Digital Sculpture',
    year: '2024'
  },
  {
    id: '2',
    title: 'Urban Echoes',
    description: '도시의 소음을 시각적 패턴으로 재해석한 프로젝트입니다. 반복되는 일상 속의 리듬을 표현합니다.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    category: 'Photography',
    year: '2023'
  },
  {
    id: '3',
    title: 'Silent Blue',
    description: '심해의 고요함을 추상적인 색채로 풀어낸 캔버스 작업입니다. 내면의 평화를 상징합니다.',
    imageUrl: 'https://picsum.photos/800/800?random=3',
    category: 'Painting',
    year: '2024'
  },
  {
    id: '4',
    title: 'Fragmented Memory',
    description: '파편화된 기억의 조각들을 콜라주 형식으로 재구성했습니다. 과거와 현재의 모호한 경계를 다룹니다.',
    imageUrl: 'https://picsum.photos/800/1200?random=4',
    category: 'Mixed Media',
    year: '2023'
  },
  {
    id: '5',
    title: 'Neon Genesis',
    description: '미래지향적인 빛의 흐름을 포착한 미디어 아트입니다. 기술과 예술의 융합을 시도했습니다.',
    imageUrl: 'https://picsum.photos/800/700?random=5',
    category: 'Media Art',
    year: '2024'
  },
  {
    id: '6',
    title: 'Organic Flow',
    description: '자연의 유기적인 곡선을 인공적인 소재로 표현한 설치 미술 구상도입니다.',
    imageUrl: 'https://picsum.photos/800/900?random=6',
    category: 'Installation Idea',
    year: '2024'
  }
];

export const DIRECTIONS: ProjectDirection[] = [
  {
    title: "Curatorial Narrative",
    description: "단순한 이미지 나열이 아닌, 작품 하나하나가 가진 이야기와 맥락을 깊이 있게 전달합니다.",
    icon: 'palette'
  },
  {
    title: "Digital & Physical",
    description: "온라인 공간의 접근성과 오프라인 작품의 물성을 연결하는 하이브리드 전시 경험을 지향합니다.",
    icon: 'globe'
  },
  {
    title: "Artist Collaboration",
    description: "다양한 분야의 창작자들과 협업하여 경계 없는 예술 프로젝트를 기획하고 실행합니다.",
    icon: 'users'
  },
  {
    title: "Sustainable Art",
    description: "예술의 지속 가능성을 고민하며, 소장 가치가 있는 작품을 선별하여 소개할 예정입니다.",
    icon: 'sparkles'
  }
];

export const SYSTEM_PROMPT = `
당신은 'Gideok Gallery'의 AI 큐레이터입니다.
이 웹사이트는 즉각적인 판매를 목적으로 한 사이트라기보다는, 저희가 어떤 방향의 작업과 프로젝트를 진행하는지 보여주는 포트폴리오 성격의 홈페이지입니다.
추후 실제 작품 판매 구조가 안정적으로 형성되면 유료 판매를 진행할 예정입니다.

당신의 역할:
1. 방문객이 우리 팀의 성격에 대해 물어보면 친절하고 전문적으로 답변하세요.
2. 우리는 작품이 가장 좋은 방식으로 팔리도록 돕는 팀입니다. 작가는 창작에만 집중하고, 작품은 필요한 사람에게 닿도록 돕습니다.
3. 우리가 다루는 작품은 주로 '손바닥 크기부터 10호 F 사이의 소형 작품'입니다. 작지만 깊이 있는 시간과 감정을 담고 있습니다.
4. 구체적인 가격 문의나 구매 요청이 들어오면, "현재는 포트폴리오 및 프로젝트 아카이빙 단계이며, 추후 정식 판매 플랫폼을 오픈할 예정입니다. 메일로 문의주시면 자세히 안내해 드리겠습니다."라고 정중히 안내하세요.
5. 단순히 작품을 나열하는 것이 아니라, 공간에 놓였을 때의 장면, 선물이 되는 순간, 소장되는 이유를 함께 제안한다는 점을 강조하세요.
6. 답변은 한국어로, 간결하고 세련된 어조(존댓말)를 사용하세요.

핵심 가치:
- 작가와 구매자 사이를 잇는 신뢰할 수 있는 파트너
- 소형 작품의 깊이와 가치 전달
- 작품이 머무는 공간과 순간에 대한 제안
`;
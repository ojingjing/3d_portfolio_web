import { m } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  project01,
  project01_main,
  project02,
  page1,
  aivel,
  kyu,
  mcs,
  python,
  project01_page,
  project02_main,
  project03_main,
  project02_page_main,
  project02_detail_page,
  project03_detail_page,
  project03,
  project03_page,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Web Developer",
  //   icon: web,
  // },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "DX Consultants",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Kyungsung University",
    company_name: "University",
    icon: kyu,
    iconBg: "#ffffff",
    date: "March 2019 - Feb 2024",
    points: [
      "소프트웨어학과 졸업",
      "전국 대학생을 위한 커뮤니케이션앱 '과끼리' 출시",
      "경성대학교 재학생을 위한 학교앞 맛집 추천 앱 'BABYAG' 개발",
      "8호관의 빈 세미나실 예약을 위해 오픈소스를 이용해 72시간 내에 개발한 'Chkit' 서비스 우수상 수상 ",
    ],
  },
  {
    title: "DX Consultants",
    company_name: "KT Aivle school Bootcamp",
    icon: aivel,
    iconBg: "#ffffff",
    date: "Feb 2024 - Aug 2024",
    points: [
      "AI와 Cloud를 활용해 DX 주도 교육을 수료.",
      "데이터 분석 / AI모델링 / Cloud / DX기획 / 제안 프로젝트 수행 가능.",
      "8번의 미니프로젝트로 기반을 다지고, KT 사업 연계프로젝트 주제 도출 및 산출물 구현과 제안으로 빅프로젝트에서 수상을 거둠. ",
      "2번의 코딩 마스터즈에서 우수상을 수상함.",
    ],
  },
  {
    title: "App Development Intern",
    company_name: "한전 MCS",
    icon: mcs,
    iconBg: "#ffffff",
    date: "July 2024 - Sep 2024",
    points: [
      "팀장으로 활동하며 비전공자 팀원들에게 코딩 기초 교육을 진행하고, 목표했던 프로젝트를 성공적으로 완수",
      "장애인 불법 주차 문제를 해결하기 위한 앱의 프론트엔드 서비스를 기획 및 개발",
      "한국장애인 개발원과의 협업 미팅을 통해 서비스 개선 아이디어를 제안하고 긍정적인 피드백을 수집",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "과끼리 (Maphant-App)",
    date: "2023.07-2023.08 (8주)",
    people: "21명 (BE 8명, FE 6명, APP 6명,팀장 1명)",
    description:
      "대학생들이 전국의 같은 학과 학생들과 소통할 수 있는 커뮤니케이션 앱입니다. 학생들 간의 공감과 지식을 공유하고, 학과별 정보를 실시간으로 나눌 수 있는 플랫폼을 제공합니다.",
    detailedRoles: [
      "다크모드 전환 기능",
      "양방향 실시간 채팅 기능 구현",
      "채팅방 실시간 목록 및 알림 업데이트 기능",
      "채팅방 삭제 기능 구현",
      "UI/UX 개발",
    ],
    TroubleShooting: [
      {
        title: "Context API로 전역 상태 문제 해결.",
        description:
          "다크모드 구현 시 개별 컴포넌트에서 상태를 관리하다 보니 <strong style='color: white;'>특정 페이지에서만 적용</strong>되거나 <strong style='color: white;'>상태 동기화 문제</strong>가 발생하는 어려움을 겪음. 이를 <strong style='color: white;'>React의 Context API와 useContext 훅</strong>으로 전환해 테마 상태를 전역에서 효율적으로 관리한 결과, <strong style='color: white;'>코드량이 30% 감소하고 다크모드가 모든 컴포넌트에서 일관되게 적용</strong>되게 개선함",
      },
    ],
    outcome: [
      "👥 <strong style='color: white;'>300명의 사용자 테스트</strong>를 진행해 <strong style='color: white;'>평균4.5의</strong> ⭐ 긍정적 평가를 받음",
      "useContext를 이용해 <strong style='color: white;'>코드량 📉 30% 감소</strong>",
      "데이터 요청 및 응답 시간을 ⏳<strong style='color: white;'> 500ms -> 300ms</strong>로 감소",
      "협업을 통해 개발자들의 코드 통합에 어려움을 겪고, 클린코드의 규칙을 지키기 위해 <strong style='color: white;'>코드스타일을 개선</strong>함",
      "👨‍💻 21명의 개발자들과 <strong style='color: white;'>부서별로 소통하며 협업</strong> 하며 📌 실무 경험을 할 수 있었음",
    ],
    phoneScreen: project01,

    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Expo",
        color: "pink-text-gradient",
      },
    ],
    main_image: page1,

    pageimage: project01_page,
    image: project01_main,
    source_code_link: "https://github.com/",
  },
  {
    name: "BABYAG",
    description:
      "경성대학교 재학생들이 대연동의 숨은 맛집을 쉽게 찾고 공유할 수 있도록 지도형 맛집 추천 어플을 개발했습니다. 학생들은 맛집 선택 시 길 안내를 받을 수 있으며, 직접 맛집을 등록하고 평가를 남기는 기능을 이용할 수 있습니다.",
    date: "2023.07-2023.08 (8주)",
    people: "2명 (FE 1명, BE 1명)",
    detailedRoles: [
      "앱 UI/UX 디자인",
      "전체 앱 UI/UX 개발",
      "Google Map API를 활용한 지도 구축 및 음식점 위치 핀 표시",
      "데이터 카테고리 분류 기능 개발 (한식, 중식, 일식 등)",
      "사용자 참여형 맛집 등록 및 평가 기능",
      "로그인한 사용자 토큰 기반 인증 및 식별 시스템 구축",
    ],
    TroubleShooting: [
      {
        title: "비동기 처리(Promise.all)로 지도 핀 표시 로딩 최적화",
        description:
          "Google Map API로 등록된 맛집 데이터를 핀으로 표시하는 기능을 처리하던 중 <strong style='color: white;'>로딩 속도가 느려지고 화면 렌더링이 지연되는 문제</strong>가 발생. 이를 해결하기 위해 <strong style='color: white;'>비동기 처리(Promise.all)</strong>을 사용해 데이터를 병렬로 가져와 로딩 시간을 <strong style='color: white;'>40% 단축</strong>하고 전체 맛집 핀 표시 속도를 개선함",
      },
    ],
    outcome: [
      "🔗 API를 활용해 복잡한 기능을 <strong style='color: white;'>간단하게 구현하는 경험</strong>을 함",
      "⚡ 비동기 트러블 슈팅을 해결하며 <strong style='color: white;'>동기와 비동기를 개념을 이해함</strong>",
      "🌐 fetch를 사용해 <strong style='color: white;'>백엔드 데이터를 가져오고, 응답 코드를 확인하는 경험</strong>을 함",
    ],
    phoneScreen: project02,
    main_image: project02_page_main,
    pageimage: project02_detail_page,

    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "Google API",
        color: "pink-text-gradient",
      },
    ],

    image: project02_main,
    source_code_link: "https://github.com/",
  },
  {
    name: "CHKIT",
    description:
      "경성대학교 공과대학 8호관의 빈 세미나실을 학생들이 자유롭고 편리하게 사용할 수 있도록 오픈소스를 이용해 72시간만에 개발한 세미나실 예약 시스템",
    date: "2023.11-2023.011 (3일)",
    people: "2명 (FE 1명, BE 1명)",
    detailedRoles: [
      "모듈 UI/UX 디자인",
      "모듈 개발",
      "사용자 테스트 및 수정 요청 반영",
      "wordpress 설치 및 테마 플러그인 설정",
    ],
    TroubleShooting: [
      {
        title: "웹 -> 앱 UI 전환시 발생한 레이아웃 문제 해결",
        description:
          "웹 화면을 기준으로 UI를 구성했지만, 앱으로 줄이며 <strong style='color: white;'>UI/UX가 저하 문제</strong>가 발생. 모바일에서 가독성과 조작성이 떨어졌고, 이를 해결하기 위해 <strong style='color: white;'>모바일 맞춤형 UI재설계를 진행</strong>, 하지만 목표했던 시간의 <strong style='color: white;'>두 배</strong> 더 걸림. 이를 통해 화면개발시 <strong style='color: white;'>px로만 고정하는게 아닌 웹과 앱을 동시에 생각하며 유연하게 개발</strong>해야한다는 것을 깨달았음",
      },
    ],
    outcome: [
      "오픈소스를 통해 개발시간을 약 ⏳ <strong style='color: white;'>672시간 단축</strong>",
      "워드프레스의 플러그인을 활용해 <strong style='color: white;'>개발 생산성 향상</strong> 🚀 ",
      "웹 앱 UI/UX 개발시 동적처리를 위한 <strong style='color: white;'>유연한 개발</strong>을 해야한다는 것을 깨달음 ✅ ",
      "<strong style='color: white;'>빠른시간 내 정해진 요구사항을 분석하고 개발</strong>하는 프로세스 습득",
    ],

    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "CloudPanel",
        color: "green-text-gradient",
      },
      {
        name: "CloudFlare",
        color: "pink-text-gradient",
      },
    ],
    image: project03_main,
    source_code_link: "https://github.com/",
    pageimage: project03_detail_page,
    phoneScreen: project03,
    main_image: project03_page,
  },
];

export { services, technologies, experiences, testimonials, projects };

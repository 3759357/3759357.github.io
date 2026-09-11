export const profile = {
  name: "원승혁",
  updated: "2026.09.09",
  email: "3759357won@gmail.com",
  summary: "연구 도구를 운영 가능한 서비스로 통합하는 Java/Spring 백엔드 개발자입니다. 고려대학교 소프트웨어보안연구소에서 분석 도구 약 10종을 통합하고, Kafka 분석 파이프라인 유지보수와 배포 자동화를 담당했습니다.",
};

export const skills = [
  { label: "BACKEND", items: ["Java · Spring Boot", "Spring Data JPA", "Spring Security", "Python · Django", "REST API"] },
  { label: "DATA & MESSAGING", items: ["MySQL · PostgreSQL", "Redis · SQLite", "Kafka · 운영·유지보수", "SBOM · CycloneDX", "VEX · CVE 데이터"] },
  { label: "PLATFORM", items: ["Docker · Docker Compose", "Gitea · Jenkins", "GitHub Actions", "GitLab Runner · Nexus3", "Linux · NGINX"] },
  { label: "PROJECT EXPERIENCE", items: ["AWS · EC2 / RDS / VPC", "Kubernetes · NCP", "React · JavaScript", "Git · Swagger", "Preview / UAT"] },
];

export const career = [
  { title: "연구 도구 약 10종을 서비스로 통합", text: "CLI·컨테이너·언어가 다른 도구를 업로드–분석–결과 조회 흐름에 연결하고, 입력 파일 유형에 맞는 분석 도구 선택 로직을 개발했습니다." },
  { title: "기존 Kafka 분석 파이프라인 운영·유지보수", text: "Spring Boot Producer·Result Listener와 Python Consumer로 구성된 파이프라인을 유지보수하고, BinBOM 2.0을 기존 요청·결과 처리 흐름에 마이그레이션했습니다." },
  { title: "배포 10분 → 1분 30초", text: "Gitea·Jenkins CI/CD와 운영·개발 경로를 분리한 Preview/UAT 환경을 구축했습니다. 도구 실행 자산은 Docker와 별도 저장소로 분리했습니다." },
];

export interface Project {
  slug: string;
  index: string;
  type: string;
  title: string;
  subtitle?: string;
  summary: string;
  role: string;
  period: string;
  tags: string[];
  highlights: string[];
  accent: string;
  href?: string;
  context: string;
  sections: { title: string; status?: string; paragraphs: string[] }[];
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "iotcube", index: "01", type: "WORK / BACKEND PLATFORM", title: "IoTcube / HatBOM",
    summary: "보안취약점·SBOM 분석 플랫폼에서 연구 도구 통합, 기존 Kafka 분석 파이프라인 유지보수, 데이터 검증과 배포 자동화를 담당했습니다.",
    role: "백엔드 · 플랫폼 개발", period: "2026.01 — 현재",
    tags: ["Spring Boot", "Kafka", "Python", "Docker", "Jenkins", "MySQL"],
    highlights: ["연구 도구 약 10종 통합", "Kafka 파이프라인 유지보수", "배포 시간 약 85% 단축"], accent: "blue",
    context: "고려대학교 산학협력단 · 소프트웨어보안연구소 연구원. 언어와 실행환경이 다른 연구 도구를 외부 사용자가 웹에서 사용할 수 있도록 통합하고, 기존 플랫폼의 기능과 운영 환경을 개선했습니다.",
    sections: [
      { title: "입력부터 결과 조회까지 연결", status: "구현·유지보수", paragraphs: ["DEBUN, BOLT, Unified SBOM, VEXCO 등 약 10종의 도구를 업로드–분석–결과 조회 흐름으로 통합했습니다. 각 도구의 실행 조건과 입출력을 분석하고, 파일 언어·형식에 맞춰 실행 도구를 선택하는 로직을 개발했습니다.", "ZIP·TAR 입력과 분석 결과를 처리하고, VEX 통계 저장 모델·Top CVE·기간별 추세·CVSS 조회 API와 화면을 구현했습니다."] },
      { title: "기존 Kafka 파이프라인 유지보수", status: "운영·유지보수", paragraphs: ["Spring Boot Producer·Result Listener와 Python Consumer로 구성된 기존 Kafka 비동기 분석 파이프라인을 유지보수했습니다. BinBOM 2.0을 기존 요청·결과 처리 흐름에 마이그레이션하고, 파일·아카이브 호환성과 분석 결과를 검증했습니다."] },
      { title: "데이터와 분석 결과 검증", status: "구현·검증", paragraphs: ["약 1,500만 건의 C/C++ OSS 해시 데이터 기반 분석·조회 기능을 유지보수하고, DB 마이그레이션 전후 결과를 비교했습니다. 이 수치는 다룬 데이터 규모입니다.", "Maven·Gradle 의존성을 CycloneDX SBOM에 보강해 Spring·Lombok·MySQL Connector 미탐지를 개선하고, CVE의 패치 여부와 오탐 가능성을 검토했습니다."] },
      { title: "배포 자동화와 실행 자산 분리", status: "구축·운영", paragraphs: ["로컬 빌드·셸 스크립트 배포를 Gitea·Jenkins CI/CD로 전환해 배포 시간을 약 10분에서 1분 30초로 줄였습니다. main·develop 브랜치를 운영·/dev 경로에 독립 배포해 반영 전 검증 환경을 마련했습니다.", "Spring 코드에 삽입된 도구 실행 스크립트를 Docker·환경변수 기반으로 정리하고 실행 자산을 별도 저장소로 분리했습니다. 관리자 인증·세션·CSRF/CORS 정책과 설정 분리 등 보안점검 후속 조치도 반영했습니다."] },
      { title: "IoTcube 2.0 독립 Worker 전환", status: "설계·문서화", paragraphs: ["일부 도구를 요청 처리 흐름에서 동기 실행하는 구조의 HTTP 지연·자원 점유·배포 결합을 분석했습니다. Kafka 작업 큐와 도구별 독립 Docker Worker로 실행 책임을 분리하는 전환안을 설계했습니다.", "작업 상태·공통 스키마·timeout·retry·dead-letter 처리와 8주 단계별 전환 로드맵을 문서화했습니다. 기존 Kafka 운영·유지보수 경험과 별개인 전환 설계이며, 전체 전환 완료 성과로 기재하지 않았습니다."] },
    ],
    outcome: "도구 약 10종을 하나의 서비스 흐름으로 연결했고, 배포 시간을 약 85% 단축했습니다. 데이터 마이그레이션과 도구 입력·결과 호환성을 검증하며 운영 가능한 형태로 정리했습니다.",
  },
  {
    slug: "interlock", index: "02", type: "PERSONAL / TRADING SYSTEM", title: "Interlock",
    subtitle: "Multi-Broker Order Control Plane",
    summary: "KIS와 토스증권의 API를 연결하고 주문 상태·리스크 검사·이벤트 기록을 관리하는 개인 투자 관제 시스템을 개발하고 있습니다.",
    role: "아키텍처 · 백엔드 개발", period: "2026.06 — 현재",
    tags: ["Python", "KIS Open API", "Toss Open API", "WebSocket", "SQLite"],
    highlights: ["브로커별 Adapter·Gateway", "중앙 Risk Engine·Kill Switch", "Event Outbox·알림 Worker"], accent: "control-plane",
    context: "개인 프로젝트. 증권사마다 다른 인증·시세·계좌·주문 API를 하나의 처리 흐름으로 연결하고, 주문 전 검증과 처리 이력을 관리하는 시스템입니다.",
    sections: [
      { title: "증권사별 차이를 분리", paragraphs: ["KIS WebSocket과 토스증권 REST API의 차이를 Adapter·Gateway 계층으로 분리했습니다. 주문 후보–리스크 승인–제출 직전 재검증–주문 전송–체결 대사를 상태 머신으로 관리합니다."] },
      { title: "주문 전 리스크 검사", paragraphs: ["현금·단일 종목·레버리지·미체결 주문 노출을 합산하는 중앙 Risk Engine을 구현했습니다. 호가 괴리·슬리피지·매수 가능 금액·매도 가능 수량을 재검증하고, 조건을 벗어난 주문은 API 호출 전에 차단합니다.", "환경변수 승인값·명시적 실행 옵션·중앙 Kill Switch를 조합해 주문 실행 조건을 제어했습니다."] },
      { title: "이벤트 기록과 후속 처리", paragraphs: ["주문·체결·차단·오류 이벤트를 SQLite Event Outbox에 기록하고 중복 방지·재시도·알림 Worker를 구현했습니다. Docker Compose로 시세 감시·주문 대사·알림 Worker를 분리했습니다."] },
    ],
    outcome: "소량 매수·매도 왕복 체결 흐름을 검증했습니다. 개인 프로젝트로 개발을 이어가고 있으며, 주문 제어와 기록·대사 구조를 중심으로 개선하고 있습니다.",
  },
  {
    slug: "kyobo", index: "03", type: "TEAM / CLOSED NETWORK", title: "교보DTS 정보보호포털",
    summary: "12인 기업 연계 교육 프로젝트에서 백엔드 PL을 맡아 인증·권한과 폐쇄망 배포 환경을 구성하고, AWS 리소스를 당시 무료 사용 범위에 맞춰 조정했습니다.",
    role: "백엔드 PL · 인프라", period: "2025.03 — 2025.05",
    tags: ["Spring Boot", "Redis", "GitLab Runner", "Nexus3", "AWS"],
    highlights: ["Redis 세션·관리자 RBAC", "폐쇄망 CI/CD 구축", "AWS 무료 사용 범위에 맞춘 비용 조정"], accent: "ink",
    context: "SK플래닛 웹풀스택 개발자 과정의 교보DTS 기업 연계 프로젝트입니다. 총 12명이 고객사 요청–내부 검토–완료 과정을 전산화하는 포털을 개발했고, 백엔드 PL로 참여했습니다.",
    sections: [
      { title: "인증·권한과 업무 API", paragraphs: ["Redis 기반 세션 인증과 관리자 RBAC를 설계하고, 정보보호 컴플라이언스 처리 과정과 관리자 기능을 REST API로 구현했습니다. 고객사·프론트엔드·기획 인원과 요구사항과 접근 권한을 조율했습니다."] },
      { title: "환경별 배포 흐름", paragraphs: ["개발 환경에는 Docker·GitHub Actions를, 폐쇄망 운영 환경에는 GitLab Runner·Nexus3를 사용해 배포 흐름을 구성했습니다. 환경별 설치 제약을 반영하고 아키텍처·API·운영 절차를 문서화했습니다."] },
      { title: "접근 경로와 비용 조정", paragraphs: ["EC2 프록시·포트 포워딩으로 외부 개발 환경에서 Private RDS에 접근하는 경로를 구성하고, VPC 라우팅·보안 그룹을 정리했습니다.", "AWS 리소스 구성을 당시 적용 가능한 무료 사용 범위에 맞춰 조정해 운영 비용을 최소화했습니다. 무료 사용 혜택을 반영한 구성 조정 경험입니다."] },
    ],
    outcome: "12인 팀이 사용할 인증·권한과 환경별 배포 기반을 마련했습니다. 폐쇄망 제약, 개발 접근성, 비용 조건을 함께 고려해 구성을 조정했습니다.",
  },
  {
    slug: "jocketdan", index: "04", type: "TEAM / CLOUD NATIVE", title: "K-PaaS 공모전",
    summary: "공공 API를 결합한 여행정보 플랫폼에서 서비스 경계, API Gateway JWT 인증과 Kubernetes 배포 환경을 구성했습니다.",
    role: "백엔드 · 인프라", period: "2025.08 — 2025.10",
    tags: ["Spring Boot", "JWT", "Kubernetes", "NCP", "MSA"],
    highlights: ["5인 팀 공모전 프로젝트", "Gateway 인증 흐름", "서비스별 배포 환경"], accent: "paper", href: "https://github.com/JocketDan",
    context: "제9회 개방형 클라우드 플랫폼(K-PaaS) 활용 공모전에서 5인 팀으로 공공 데이터 기반 여행정보 서비스를 개발했습니다.",
    sections: [
      { title: "서비스 경계와 인증", paragraphs: ["서비스별 책임과 통신 경계를 정의하고 MSA 구조를 설계했습니다. API Gateway에서 JWT 인증을 처리하는 흐름을 구현했습니다."] },
      { title: "클라우드 배포 환경", paragraphs: ["Docker·Kubernetes·Naver Cloud Platform 기반으로 배포 환경을 구성했습니다. 서비스별 독립 배포와 공공기관 도입을 고려한 보안·확장성 요구를 설계에 반영했습니다."] },
    ],
    outcome: "공공 API를 통합한 팀 프로젝트에서 서비스 경계·인증·배포를 함께 다뤘습니다. 서비스 분리에 따르는 통신과 운영 복잡성도 경험했습니다.",
  },
];

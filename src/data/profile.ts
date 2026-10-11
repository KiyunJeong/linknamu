export const profile = {
  name: "정상클로",
  bio: "자율주행 Full Stack 개발자 | 요즘에는 AI 개발 및 활용에 관심이 많아요",
  photo: "/profile.svg",
};

export type LinkItem = { id: string; title: string; url: string };

export const links: LinkItem[] = [
  { id: "github", title: "🐙 GitHub", url: "https://github.com/kiyunjeong" },
  { id: "blog", title: "📝 블로그", url: "https://velog.io" },
  { id: "instagram", title: "📸 Instagram", url: "https://www.instagram.com" },
  { id: "youtube", title: "▶️ YouTube", url: "https://www.youtube.com" },
];

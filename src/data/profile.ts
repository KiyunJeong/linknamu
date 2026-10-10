export const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  photo: "/profile.svg",
};

export type LinkItem = { id: string; title: string; url: string };

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "blog", title: "블로그", url: "https://velog.io" },
  { id: "instagram", title: "Instagram", url: "https://www.instagram.com" },
  { id: "youtube", title: "YouTube", url: "https://www.youtube.com" },
];

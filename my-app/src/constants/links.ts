const LINKS = {
  GITHUB: "https://github.com",
  LINKEDIN: "https://linkedin.com",
  MAIL: "mailto:sanan@hustlers.co.kr",
} as const;

type LINKS = keyof typeof LINKS;

export default LINKS;

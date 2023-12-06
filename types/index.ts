export type LinkProps = {
  href: string;
  label: string;
};

export type SocialProps = {
  name: string;
  url: string;
  icon: string;
};

export type TechStackGroupProps = {
  title: string;
  items: string[];
};

export type ProjectProps = {
  name: string;
  description: string;
  website?: string;
  github?: string;
  tags: string[];
};

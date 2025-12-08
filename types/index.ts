export interface user {
  id:number,
  name: string,
  email:string,
  password:string
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  readTime: number;
  publishedAt: string;
  coverImage: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  featured: boolean;
  projectUrl?: string;
  githubUrl?: string;
}

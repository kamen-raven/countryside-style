interface MetaImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface OpenGraph {
  title: string;
  description: string;
  siteName: string;
  type: 'website' | 'article';
  url: string;
  images?: MetaImage[];
}

export interface MetaInterface{
  title: string;
  description?: string;
  keywords?: string;
  viewport?: string;
  openGraph?: OpenGraph;
}

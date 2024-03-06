export interface ApiBlogInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: BlogInterface[];
}

export interface BlogInterface {
  uuid: string;
  tags: TagInterface[] | null;
  author: string;
  name: string;
  body: string;
  photos: PhotoInterface[];
}

export interface TagInterface {
  uuid: string;
  tag: {
    uuid: string;
    name: string;
  };
  post: string;
}

export interface PhotoInterface {
  uuid: string;
  image: string;
  post: string;
}

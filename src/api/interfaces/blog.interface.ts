export interface ApiBlogInterface{
  count: number;
  next: string | null;
  previous: string | null;
  results: BlogInterface[];
}

export interface BlogInterface {
  uuid: string;
  tags: TagInterface[] | null;
  author:  string | null;
  name: string;
  body: string;
}

export interface TagInterface {
  uuid: string;
  tag: {
    uuid: string;
    name: string;
  };
  post: string;
}


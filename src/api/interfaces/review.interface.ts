export interface ApiReviewInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: ReviewInterface[];
}

export interface ReviewInterface {
  text: string;
  author_name: string;
  date_sale: string | null;
  link_to_src: string | null;
  photos: ReviewPhotosInterface[];
}

interface ReviewPhotosInterface {
  uuid: string;
  image: string;
  review: string;
}

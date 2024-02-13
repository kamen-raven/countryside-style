export interface ReviewInterface {
    text: string,
    author_name: string,
    date_sale: string | null,
    link_to_src: string | null,
    photos: [
      {
        uuid: string,
        image: string,
        review: string
      }
    ]
}

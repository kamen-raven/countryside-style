import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { getBlogArticleByID } from "~api/Blog/getBlogArticleByID";

export const size = {
  width: 968,
  height: 504,
};

export const alt = 'Агентство недвижимости "Загородный стиль"';


export default async function Image({ params }: { params: { uuid: string } }) {
  const blogArticleItem = await getBlogArticleByID(params.uuid); // конкретная статья, переданная из запроса по id

  if (!blogArticleItem) {
    notFound();
  }


  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            maxWidth: '968px',
            maxHeight: '504px'
          }}
          width='100%'
          height="100%"
          src={blogArticleItem.photos[0].image}
        />
      </div>
    ),
    { ...size }
  );
}

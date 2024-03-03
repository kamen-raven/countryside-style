import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogArticle } from "~api/Blog/getBlogArticle";
import { getBlogArticleByID } from "~api/Blog/getBlogArticleByID";
import { BlogInterface } from "~interfaces/blog.interface";
import { BlogArticlePage } from "~pages/index";

export const metadata: Metadata = {
  title: 'Блог | Загородный стиль',
  description: 'Статья о нашей работе и сфере недвижимости',
};




export async function generateStaticParams() {
  const apiBlogData = await getBlogArticle(100); //! 100 чтобы бралось максимально много для отрисовки
  const uuidArray: { uuid: string }[] = apiBlogData.results.map((blog: BlogInterface) => ({ uuid: blog.uuid }));
  return uuidArray;
}



export default async function PageBlogArticle({ params }: { params: { uuid: string } }) {
  const blogArticleItem = await getBlogArticleByID(params.uuid); // конкретная статья, переданная из запроса по id

  if (!blogArticleItem) {
    notFound();
  }

  return (
    <BlogArticlePage blogArticleItem={blogArticleItem} />
  );
}

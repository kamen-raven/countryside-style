import { Metadata } from "next";
import { getBlogArticle } from "~api/Blog/getBlogArticle";
import { getObjects } from "~api/Objects/getObjects";
import { BlogPage } from "~pages/index";

export const metadata: Metadata = {
  title: 'Блог | Загородный стиль',
  description: 'Статьи о нашей работе и сфере недвижимости',
};





export default async function PageBlogL() {

  const blogPostsData = await getBlogArticle(); // посты из блога

  return (
    <BlogPage blogPostsData={blogPostsData} />
  );
}

import { Metadata } from "next";

import { BlogPage } from "~pages/index";

export const metadata: Metadata = {
  title: 'Блог | Загородный стиль',
  description: 'Статьи о нашей работе и сфере недвижимости',
};





export default function PageBlog() {

/*   const blogPostsData = (await getBlogArticle()).results; // посты из блога
 */



  return (
    <BlogPage /* blogPostsData={blogPostsData} */ />
  );
}

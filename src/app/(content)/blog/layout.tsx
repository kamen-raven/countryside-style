import { getBlogArticle } from "~api/Blog/getBlogArticle";
import { LayoutBlog } from "~pages/05_ContentPages/Blog";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const blogPostsData = (await getBlogArticle()).results.reverse(); // посты из блога   //* fix reverse

  return (
    <LayoutBlog blogPostsData={blogPostsData}>
      {children}
    </LayoutBlog>
  );
}

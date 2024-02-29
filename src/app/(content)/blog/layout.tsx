import { getBlogArticle } from "~api/Blog/getBlogArticle";
import { LayoutBlog } from "~pages/05_ContentPages/Blog";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const blogPostsData = await getBlogArticle(); // посты из блога

  return (
    <LayoutBlog blogPostsData={blogPostsData}>
      {children}
    </LayoutBlog>
  );
}

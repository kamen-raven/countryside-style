import { Metadata } from "next";
import { getBlogArticle } from "~api/Blog/getBlogArticle";
import { metaBlog } from "~meta/metadataPages";
import { LayoutBlog } from "~pages/05_ContentPages/Blog";



export const metadata: Metadata = {
  title: metaBlog.title,
  description: metaBlog.description,
  keywords: metaBlog.keywords,
  openGraph: {
    title: metaBlog.title,
    description: metaBlog.description,
    siteName: metaBlog.openGraph.siteName,
    type: 'website',
    url: metaBlog.openGraph.url,
    images: [
      {
        url: '../../opengraph-image.png',
        width:  metaBlog.openGraph.images.width,
        height:  metaBlog.openGraph.images.height,
        alt:  metaBlog.openGraph.images.alt,
      },
    ],
  },
};






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

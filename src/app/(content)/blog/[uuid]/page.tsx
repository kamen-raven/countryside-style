import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogArticle } from "~api/Blog/getBlogArticle";
import { getBlogArticleByID } from "~api/Blog/getBlogArticleByID";
import { getUserByID } from "~api/Users/getUserByID";
import { BlogInterface } from "~interfaces/blog.interface";
import { metaBlogArticle } from "~meta/metadataPages";
import { BlogArticlePage } from "~pages/index";

export async function generateMetadata({ params }: { params: { uuid: string } }): Promise<Metadata> {
  const blogArticleItem = await getBlogArticleByID(params.uuid); // конкретная статья, переданная из запроса по id

  if (!blogArticleItem) {
    notFound();
  }

  const authorData =  await getUserByID(blogArticleItem.author);
/*   const tags = (blogArticleItem.tags !== null) ? `${blogArticleItem.tags.map((i) => i.tag.name)}` : ''; */

  return {
    title: `${blogArticleItem.name} | ${metaBlogArticle.title}`,
    description: metaBlogArticle.description,
    openGraph: {
      title: `${blogArticleItem.name} | ${metaBlogArticle.title}`,
      description: metaBlogArticle.description,
      siteName: metaBlogArticle.openGraph.siteName,
      url: `https://${metaBlogArticle.openGraph.url}/blog/${params.uuid}`,
      type: 'article',
/*       tags: tags, */
      authors: `${authorData.first_name} ${authorData.last_name}`
    },
  };
}




export async function generateStaticParams() {
  const apiBlogData = await getBlogArticle(500); //! 100 чтобы бралось максимально много для отрисовки
  const uuidArray: { uuid: string }[] = apiBlogData.results.map((blog: BlogInterface) => ({ uuid: blog.uuid }));
  return uuidArray;
}



export default async function PageBlogArticle({ params }: { params: { uuid: string } }) {
  const blogArticleItem = await getBlogArticleByID(params.uuid); // конкретная статья, переданная из запроса по id


  if (!blogArticleItem) {
    notFound();
  }

  return (
    <BlogArticlePage
    blogArticleItem={blogArticleItem}/>
  );
}

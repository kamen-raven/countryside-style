import { Metadata } from "next";
/* import { notFound } from "next/navigation"; */
import { CatalogPage } from "~pages/CatalogPage/CatalogPage";


/* interface paths {
  type: string,
  alias: string
}

 */
export const metadata: Metadata = {
  title: 'COURSES'
};



export default async function PageType({ params }:  {params: {type: string}}) {


/*   if (!) {
    notFound();
  } */

  return (
    <>
      <CatalogPage type={params.type} />
    </>
  );
}

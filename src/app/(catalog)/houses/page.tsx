import { Metadata } from "next";
import generalContactsData from "~data/constant/generalContacts/generalContactsData";
import objectsTemplate from "~data/temp/objectsTemplateList/objectsDataTemplate";
/* import { notFound } from "next/navigation"; */
import { CatalogPage } from "~pages/02_CatalogPages/CatalogPage/CatalogPage";


/* interface paths {
  type: string,
  alias: string
}

 */
export const metadata: Metadata = {
  title: 'HOUSES',
  description: 'CATALOG PAGE',
};




export default async function PageType({ params }:  {params: {type: string}}) {


/*   if (!) {
    notFound();
  } */

  return (
      <CatalogPage type={params.type}
    generalContactsData={generalContactsData}
    objectsData={objectsTemplate}/>
  );
}

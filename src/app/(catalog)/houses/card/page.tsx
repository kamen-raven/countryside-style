import { Metadata } from "next";
/* import { notFound } from "next/navigation"; */
import { CardPage } from "~pages/index";


/* interface paths {
  type: string,
  alias: string
}

 */
export const metadata: Metadata = {
  title: 'CARD',
  description: 'CARD PAGE',
};




export default async function CardType({ params }:  {params: {type: string}}) {


/*   if (!) {
    notFound();
  } */

  return (
    <CardPage type={params.type} />
  );
}

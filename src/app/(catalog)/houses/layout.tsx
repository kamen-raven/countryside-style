import { Metadata } from "next";
import styles from "./layout.module.scss";

import reviews from "~utils/temp/reviewsData/reviewsData";
import { ReviewsBlock } from "~widgets/index";
import { ContactUsBlock } from "~widgets/CatalogBlocks/ContactUsBlock/ContactUsBlock";


/*
export async function generateMetadata({ params }) {
  return {
    title: '...',
  }
} */





export default function GeneralCatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className = {styles.mainContainer}>
      {children}
      <ContactUsBlock/>
      <ReviewsBlock reviewsDataItem={reviews} />
    </main>

  );
}

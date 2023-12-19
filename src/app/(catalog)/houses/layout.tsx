import { Metadata } from "next";
import styles from "./layout.module.scss";

import reviews from "~utils/temp/reviewsData/reviewsData";
import { ReviewsBlock } from "~widgets/index";

export const metadata: Metadata = {
  title: 'HOUSES',
  description: 'CATALOG PAGE',
};


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
      <ReviewsBlock reviewsDataItem={reviews} />
    </main>

  );
}

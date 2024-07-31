import { openSans, gothamPro } from '~fonts';
import '~styles/index.scss';
import styles from "./layout.module.scss";
import { Metadata } from 'next';


import { menuList } from '~data/constant/navMenu/menuList';
import generalContactsData from '~data/constant/generalContacts/generalContactsData';
import { ScrollToTopButton } from '~features/index';
import { Header, Navbar, Footer } from '~common/index';

import { MainPopups } from '~features/Popups/MainPopups';
import { SupportPopups } from '~features/Popups/SupportPopups';
import { metaLayout } from '~meta/metadataPages';


export const metadata: Metadata = {
  title: metaLayout.title,
  description: metaLayout.description,
  keywords: metaLayout.keywords,
  metadataBase: new URL(`https://${metaLayout.openGraph.url}/`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: metaLayout.openGraph.title,
    description: metaLayout.openGraph.description,
    siteName: metaLayout.openGraph.siteName,
    type: 'website',
    url: `https://${metaLayout.openGraph.url}/`,
    images: [
      {
        url: './opengraph-image.png',
        width:  metaLayout.openGraph.images.width,
        height:  metaLayout.openGraph.images.height,
        alt:  metaLayout.openGraph.images.alt,
      },
    ],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${openSans.variable} ${gothamPro.variable}`} lang="ru" >
      <body className={` ${styles.page}`}>
        <div className={styles.container} >
          <Header />
          <Navbar listItems={menuList} generalContactsData={generalContactsData} />
          {children}
          <Footer listItems={menuList} generalContactsData={generalContactsData} />
          <ScrollToTopButton />
        </div>
        <MainPopups />
        <SupportPopups />
      </body>
    </html>
  );
}

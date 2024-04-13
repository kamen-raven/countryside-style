import type { Metadata } from 'next';

import { openSans, gothamPro } from '~fonts';
import '~styles/index.scss';
import styles from "./layout.module.scss";


export const metadata: Metadata = {
  title: 'Загородный стиль',
  description: 'Generated by create next app',
  viewport: 'width=device-width',
  /*   viewport: {
      initialScale: 0.8,
    } */
};
import { menuList } from '~data/constant/navMenu/menuList';
import generalContactsData from '~data/constant/generalContacts/generalContactsData';
import { ScrollToTopButton } from '~features/index';
import { Header, Navbar, Footer } from '~common/index';

import { MainPopups } from '~features/Popups/MainPopups';
import { SupportPopups } from '~features/Popups/SupportPopups';



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
          <Navbar listItems={menuList} />
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

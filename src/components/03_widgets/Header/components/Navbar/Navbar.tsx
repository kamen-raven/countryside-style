import React from 'react';
import { NavbarProps } from './Navbar.props';
import styles from './Navbar.module.scss';
import Link from 'next/link';


const Navbar = ({ listItems }: NavbarProps): JSX.Element => {
  return (
        <>
          <ul className = {styles.list}>
            {listItems.map((item) => (
              <li className = {styles.listItem} key={item.name}>
                <Link className = {styles.link} href={`${item.link}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
  );
};

export { Navbar };

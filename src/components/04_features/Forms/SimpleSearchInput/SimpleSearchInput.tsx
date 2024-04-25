import React from "react";
import { SimpleSearchInputInterface } from './SimpleSearchInput.interface.ts';
import styles from "./SimpleSearchInput.module.scss";
import SearchIcon from "~svg/search/searchIcon.svg";



const SimpleSearchInput: React.FC<SimpleSearchInputInterface> = ({ innerText, place = 'header' }) => {

  const setStyle = {
    container: {
      header: styles.container_header,
      blog: styles.container_blog,
    },
    input: {
      header: styles.input_header,
      blog: styles.input_blog,
    },
    icon: {
      header: styles.icon_header,
      blog: styles.icon_blog,
    }
  };


  return (
    <div className={`${styles.container} ${setStyle.container[place]}`} >
      <input className={`${styles.input} ${setStyle.input[place]}`} placeholder={innerText} />
      <div className={`${styles.icon} ${setStyle.icon[place]}`}> {/* onClick */}
        <SearchIcon  />
      </div>
    </div>
  );
};

export { SimpleSearchInput };

import { Preloader } from "~shared/index";
import styles from "./loading.module.scss";


export default function Loading() {
  return (
    <div className={styles.container}>
      <Preloader />
      <div className={styles.text}>
        Загрузка...
      </div>
    </div>
  );
}




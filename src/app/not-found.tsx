import Link from "next/link";
import styles from "./notFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Что-то пошло не так</h2>
      <p className={styles.description}>Страницы не существует, либо она еще не создана</p>
      <Link className={styles.returnBtn} href="/">Вернуться на главную</Link>
    </div>
  );
}

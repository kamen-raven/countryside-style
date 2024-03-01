import Link from "next/link";
import styles from "./notFound.module.scss";

export default function NotFound() {
  return (
    <div className = {styles.wrapper}>
      <h2 className = {styles.title}>Упс...что-то пошло не так</h2>
      <p className = {styles.description}>Страницы либо не существует, либо она еще не создана...</p>
      <Link className = {styles.returnBtn} href="/">Вернитесь на ГЛАВНУЮ</Link>
    </div>
  );
}

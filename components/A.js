import Link from "next/dist/client/link";
import styles from "../styles/A.module.css";

export default function ({ text, href }) {
  return (
    <Link href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
}

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="heading--primary">Heading primary (main header)</h1>
      <h2 className="heading--secondary">Heading Secondary (medium header)</h2>
      <h3 className="heading--tertiary">Heading tertiary (secondary header)</h3>
    </main>
  );
}

import styles from "./layout.module.css";

const layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <main>
      <h2 className={`heading--secondary ${styles.logo}`}>capture events</h2>
      {props.children}
    </main>
  );
};

export default layout;

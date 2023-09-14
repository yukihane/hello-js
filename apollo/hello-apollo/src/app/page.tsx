import styles from "./page.module.css";
import User from "./components/User";
import WithApollo from "./components/WithApollo";

export default function Home() {
  return (
    <main className={styles.main}>
      <WithApollo>
        <User />
      </WithApollo>
    </main>
  );
}

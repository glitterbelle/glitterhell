import Image from "next/image";
import Timeline from "../components/Timeline"; // Assuming the 'timeline' component is located in the '../components' directory
import Header from "../components/Header"; 
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
  
      <Header />

      <div className={styles.logoWrapper}>
        <Image
          className={styles.mainLogo}
          src="/maschinen_krieger_logo.png"
          alt="Maschinen Krieger Logo"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.cardTitle}>
            Docs{" "}
            <span className={styles.arrow}>
              -&gt;
            </span>
          </h2>
          <p className={styles.cardDescription}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.cardTitle}>
            Learn{" "}
            <span className={styles.arrow}>
              -&gt;
            </span>
          </h2>
          <p className={styles.cardDescription}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.cardTitle}>
            Templates{" "}
            <span className={styles.arrow}>
              -&gt;
            </span>
          </h2>
          <p className={styles.cardDescription}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.cardTitle}>
            Deploy{" "}
            <span className={styles.arrow}>
              -&gt;
            </span>
          </h2>
          <p className={styles.cardDescription}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}


import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Import the CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link href="/timeline">
              <span className={styles.navLinkText}>Timeline</span>
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link href="../pages/factions">
              <span className={styles.navLinkText}>Factions</span>
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link href="/series">
              <span className={styles.navLinkText}>Series</span>
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link href="/machines">
              <span className={styles.navLinkText}>Machines</span>
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

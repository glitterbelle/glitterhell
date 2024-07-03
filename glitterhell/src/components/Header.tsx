import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Import the CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link href="/factions"><a className={styles.navLinkText}>Factions</a></Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link href="/series"><a className={styles.navLinkText}>Series</a></Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link href="/machines"><a className={styles.navLinkText}>Machines</a></Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
"use client"
import styles from '@/styles/main_header.module.scss';
export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.header}>
      {children}
    </div>
  );
}

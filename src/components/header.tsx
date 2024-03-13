"use client"
import styles from '@/styles/header.module.scss';
import { useHeaderContext } from '@/contexts/HeaderContext';
import MainHeader from "@/components/main_header";
import SubHeader from "@/components/sub_header";
export default function Header() {

  const { isMainHeader } = useHeaderContext();

  return (
    <div className={styles.header}>
      {isMainHeader ? <MainHeader /> : <SubHeader />}
    </div>
  );
}

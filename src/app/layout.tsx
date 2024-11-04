import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import styles from "../styles/Layout.module.css";

export const metadata = {
  title: "My Next.js App",
  description: "An example app using App Router with TypeScript",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <TopBar />
          <div className={styles.mainContent}>
            <Sidebar />
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}

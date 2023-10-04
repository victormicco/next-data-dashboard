import styles from "./page.module.css";
import Dashboard from "./dashboard/page";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Login from "../components/Login/page";
import SessionProvider from "../components/SessionProvider/_app";

export default function Home() {
	return (
		<main className={styles.main}>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
			<Header />
			<SideMenu />
			<Dashboard />
			<Login />
		</main>
	);
}

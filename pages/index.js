import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<>
			<Head>
				<title>Página principal</title>
			</Head>
			<div>
				<h1 className={styles.title}>Home</h1>
			</div>
		</>
	)
}

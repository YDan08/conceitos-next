import Head from "next/head"
import styles from "../styles/Home.module.css"
import Image from "next/image"
import city from "../public/images/city.jpg"

export default function Home() {
	return (
		<>
			<Head>
				<title>Página principal</title>
			</Head>
			<div>
				<h1 className={styles.title}>Home</h1>
				<Image src={city} width={400} height={500} alt='Cidade a noite' />
			</div>
		</>
	)
}

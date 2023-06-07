import Link from "next/link"
import styles from "../styles/NavBar.module.css"

export const NavBar = () => {
	return (
		<ul className={styles.navbar}>
			<li>
				<Link href='/'>Home</Link>
			</li>
			<li>
				<Link href='/todos'>Todos</Link>
			</li>
			<li>
				<Link href='products'>Produtos</Link>
			</li>
			<li>
				<Link href='about'>Sobre</Link>
			</li>
			<li>
				<Link href='contact'>Contato</Link>
			</li>
		</ul>
	)
}

export default NavBar

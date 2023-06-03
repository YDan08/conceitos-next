import Footer from "./Footer"
import NavBar from "./NavBar"
import styles from "../styles/MainContainer.module.css"

export const MainContainer = ({ children }) => {
	return (
		<>
			<NavBar />
			<div className={styles.container}>{children}</div>
			<Footer />
		</>
	)
}

export default MainContainer

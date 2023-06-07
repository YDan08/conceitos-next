import Link from "next/link"
import styles from "../../styles/Todos.module.css"

export const getStaticProps = async () => {
	const data = await fetch("https://jsonplaceholder.typicode.com/todos")
	const todos = await data.json()
	return {
		props: {
			todos,
		},
	}
}

export const Todos = ({ todos }) => {
	return (
		<>
			<h1>Tarefas para fazer</h1>
			<ul className={styles.todolist}>
				{todos?.map(todo => (
					<li key={todo.id}>
						<Link href={`/todos/${todo.id}`}>{todo.title}</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default Todos

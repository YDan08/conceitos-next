import Link from "next/link"

export const getStaticProps = async context => {
	const { params } = context

	const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoid}`)

	const todo = await data.json()

	return {
		props: {
			todo,
		},
	}
}

export const getStaticPaths = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos")

	const data = await response.json()

	const paths = data.map(todo => {
		return {
			params: {
				todoid: `${todo.id}`,
			},
		}
	})

	return { paths, fallback: false }
}

export const Todo = ({ todo }) => {
	return (
		<>
			<h1>Exibindo o todoid: {todo.id}</h1>
			<h3>{todo.title}</h3>
			<p>
				Comentario: lalalal <Link href={`/todos/${todo.id}/comments/1`}>detalhes</Link>
			</p>
			<p>
				Comentario: lalalal <Link href={`/todos/${todo.id}/comments/2`}>detalhes</Link>
			</p>
			<Link href='/todos'>Voltar</Link>
		</>
	)
}

export default Todo

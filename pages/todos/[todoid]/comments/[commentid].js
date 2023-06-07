import Link from "next/link"
import { useRouter } from "next/router"

export const Comment = () => {
	const router = useRouter()
	const todoid = router.query.todoid
	const commentid = router.query.commentid

	return (
		<>
			<h1>Exibindo o commentid: {commentid}</h1>
			<Link href={`/todos/${todoid}`}>Voltar</Link>
		</>
	)
}

export default Comment

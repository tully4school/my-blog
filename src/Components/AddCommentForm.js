import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
	const [username, setUsername] = useState("");
	const [commentText, setCommentText] = useState("");

	const addComment = async () => {
		const res = await fetch(
			`http://localhost:8000/api/articles/${articleName}/add-comment/`,
			{
				method: "POST",
				body: JSON.stringify({ username, text: commentText }),
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		const body = await res.json();
		setArticleInfo(body);
		setUsername("");
		setCommentText("");
	};

	return (
		<div id='add-comment-form'>
			<h3>Add A Comment</h3>
			<label>
				Name:
				<input
					type='text'
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
			</label>
			<label>
				Comment:
				<textarea
					cols='50'
					rows='4'
					value={commentText}
					onChange={e => setCommentText(e.target.value)}
				/>
			</label>
			<button onClick={() => addComment()}>Add Comment</button>
		</div>
	);
};
export default AddCommentForm;

// const addComment = () => {
// 	const result = axios(
// 		`http://localhost:8000/api/articles/${articleName}/add-comment`,
// 		{
// 			method: "POST",
// 			body: { username, commentText },
// 			headers: {
// 				"Content-Type": "application/json"
// 			}
// 		}
// 	);
// 	setArticleInfo(result.data);
// };

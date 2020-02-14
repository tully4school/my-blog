import React from "react";
import axios from "axios";

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
	const upvoteArticle = async () => {
		// const result = await fetch(`/api/articles/${articleName}/upvote`, {
		// 	method: "post"
		// });
		// const body = await result.json();

		// setArticleInfo(body);
		axios
			.post(`http://localhost:8000/api/articles/${articleName}/upvote`)
			.then(res => setArticleInfo(res.data));
		// console.log(res);
	};
	return (
		<div id='upvotes-section'>
			<button onClick={() => upvoteArticle()}>Add Upvote</button>
			<p>This post has been upvoted {upvotes} times</p>
		</div>
	);
};

export default UpvotesSection;

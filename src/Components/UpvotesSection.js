import React from "react";
// import axios from "axios";

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
	const upvoteArticle = async () => {
		const res = await fetch(
			`http://localhost:8000/api/articles/${articleName}/upvote`,
			{
				method: "POST"
			}
		);
		const body = await res.json();
		setArticleInfo(body);
	};
	return (
		<div id='upvotes-section'>
			<button onClick={() => upvoteArticle()}>Add Upvote</button>
			<p>This post has been upvoted {upvotes} times</p>
		</div>
	);
};

export default UpvotesSection;
// const upvoteArticle = async () => {
// 	axios
// 		.post(``)
// 		.then(res => setArticleInfo(res.data));
// };

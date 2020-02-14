import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticlesList from "../Components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import articleContent from "./article-content";

const ArticlePage = ({ match }) => {
	const name = match.params.name;
	const article = articleContent.find(article => article.name === name);

	let [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const res = await fetch(`http://localhost:8000/api/articles/${name}`);
	// 		console.log(res);
	// 		const body = await res.json();
	// 		setArticleInfo(body);
	// 	};
	// 	fetchData();
	// 	// console.log(res.json());
	// }, [name]);
	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/articles/${name}`)
			.then(res => setArticleInfo(res.data));
		// console.log(res);
	}, [name]);

	if (!article) return <NotFoundPage />;

	const otherArticles = articleContent.filter(article => article.name !== name);

	return (
		<>
			<h1>{article.title}</h1>
			<p>This post has been upvoted {articleInfo.upvotes} times</p>
			{article.content.map((paragraph, key) => (
				<p key={key}>{paragraph}</p>
			))}
			<h3>Other Articles:</h3>
			<ArticlesList articles={otherArticles} />
		</>
	);
};

export default ArticlePage;

import React from "react";
import "./News.css";
function News({ news }) {
	return (
		<div class='container'>
			<img class='image' src={news.urlToImage} alt={news.title} />
			<div class="data">
				{" "}
				<h2 class='title'>{news.title}</h2>
				<p class='para'>{news.description}</p>
				<button className='btn-read-more' onClick={() => window.open(news.url)}>
					Read More
				</button>
			</div>
		</div>
	);
}

export default News;

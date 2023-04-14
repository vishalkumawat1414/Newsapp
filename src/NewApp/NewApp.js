import React, { useState, useEffect, useRef } from "react";
import News from "./News";
import "./Newsapp.css";

function NewApp() {
	const apiKey = "232f26a7b0274b568a7388e86bd33eac";
	const [Newslist, setNewslist] = useState([]);
	const [query, setquery] = useState("tesla");

	const apiURL = `https://newsapi.org/v2/everything?q=${query}&from=2023-04-12&sortBy=publishedAt&apiKey=${apiKey}`;

	const queryref = useRef(null);

	useEffect(() => {
		fetchData();
	}, [query]);

	async function fetchData() {
		try {
			const response = await fetch(apiURL);
			const jsonData = await response.json();
			setNewslist(jsonData.articles);
			console.log(jsonData);
		} catch (e) {
			console.log(e, "error occured");
		}
	}

	 function Handelsubmit(event){
	         event.preventDefault();
	         const queryVal = queryref.current.value;
	         setquery(queryVal);
             console.log(queryVal)
	}

	return (
		<div class='container'>
			<div class='intro'>
				<h2>E-news-paper</h2>
				<p>Made by Himanshu Mishra</p>
			</div>

			<form class="searchBox">
				<input  type='text' placeholder="Enter Topic" ref={queryref} />
                <button class="button" onClick={Handelsubmit}>Search</button>
                
			</form>

			<div>
				{Newslist?.map((news) => {
					// return <p>{news.title}</p>;
					return (
						<li key={news.index}>
							<News news={news} />
						</li>
					);
				})}
			</div>
		</div>
	);
}

export default NewApp;

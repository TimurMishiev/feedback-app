// import "./App.css";

function App() {
	const title = "Blog Post";
	const body = " this is my blog post ";
	return (
		<div>
			<h1>Hello from the app component</h1>
			<p>
				{body}, {title}
			</p>
		</div>
	);
}

export default App;

import logo from './logo.svg';
import './App.css';
import ClickButton from './components/Button';
import ImageComponent from './components/ImageComponent';

function App() {
	return (
		<>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
				</header>
				<div>
					<ClickButton content="Click me!" />
					<ClickButton content="Hey! I'm a second button" />
					<ClickButton content="And I'm a third one!" />
				</div>
				<div>
					<ImageComponent
						src="https://images.pexels.com/photos/1852914/pexels-photo-1852914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="cute cat"
					/>
				</div>
			</div>
		</>
	);
}

export default App;

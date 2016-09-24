import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';
import ChoiceColor from './ChoiceColor';
import AddColor from './AddColor';

var config = {
	apiKey: "9d8fJmfg1cUUZ9q3DUnzhAIZFqtTTMa8xJoXzWbG",
	databaseURL: "https://colors-react.firebaseio.com/",

}

Firebase.initializeApp(config);

class Main extends React.Component {
	render() {
		return (
			<div className="sidebar">
				<ChoiceColor />
				<AddColor />
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('main'));

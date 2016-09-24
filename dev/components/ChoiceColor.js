import React from 'react';
import ReactMixin from 'react-mixin';
import Firebase from 'firebase';
import ReactFire from 'reactfire';

export default class ChoiceColor extends React.Component {
	constructor(){
		super();
		this.state = {
			colores: []
		}
	}

	componentDidMount(){
		this.bindAsArray(Firebase.database().ref().child("color"), "colores");
	}

	_choiceColor(e) {
		e.preventDefault();
		document.body.style.background = this;
	}

	_dellColor(id){
		Firebase.database().ref().child("color").child(id).remove();
	}

	render() {
		let colorList;
		if (this.state.colores.length > 0) {
			colorList = <div><p>Colors:</p><div className="choice">
				{
					this.state.colores.map((coloer, index) => {
						return (<div key={index}>
							<a href="#" className="color" key={index} onClick={this._choiceColor.bind('#'+coloer.color)}>#{coloer.color}</a>
							<a className="xx" onClick={this._dellColor.bind(this, coloer['.key'])}>X</a>
						</div>)
					})
				}

			</div></div>
		} else {
			colorList = "";
		}
		return (
			<div>
				{colorList}
			</div>
		);
	}
}

ReactMixin(ChoiceColor.prototype, ReactFire);

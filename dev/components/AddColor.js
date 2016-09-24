import React from 'react';
import Firebase from 'firebase';
import ReactFire from 'reactfire';

export default class AddColor extends React.Component {
	_addColor(e){
		e.preventDefault();
		let notCorrect = '';
		let text = this.refs.ololo.value.toUpperCase();
		let len = text.length;
		if (len == 3 || len == 6) {
			for (let i=0; i<len; i++){
				if(!/[0-9A-F]/g.test(text[i])){
					this.refs.text.style.color = "red";
					return;
				}
			}
			Firebase.database().ref().child("color").push({color: text});
			this.refs.text.style.color = "black";
		}else{
			this.refs.text.style.color = "red";
			return;
		}
	}

	render() {
		return (
			<form className="add" onSubmit={this._addColor.bind(this)}>
				<p ref="text">Напиши код цвета в шестнадцатеричном формате (3 или 6 букв и цифр от 0 до F. Например: "3367aa", "fff")</p>
				<input type="text"  ref="ololo" />
				<input type="submit" value="add" />
			</form>
		);
	}
}

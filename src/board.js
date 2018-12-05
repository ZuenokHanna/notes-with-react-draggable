import React from "react";
import Note from "./note";

export default class Board extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			notes: []
		}
			this.addNote = this.addNote.bind(this);
			this.updateData = this.updateData.bind(this);
			this.deleteData = this.deleteData.bind(this);
	}

	genId(){
		this.uId = this.uId || 0;
		return this.uId++;
	}

	addNote(){
		let notes = [...this.state.notes];
		let newNote = {
			text: "New Note",
			id: this.genId(),
		};
		notes.push(newNote);
		this.setState({notes}, () => {
			console.log(this.state);
		});
	}

	updateData(index, text){
		let notes = [...this.state.notes];
		notes[index].text = text;
		this.setState({notes}, () => {
			console.log(this.state);
		});
	}

	deleteData(index){
		let notes = [...this.state.notes];
		notes.splice(index,1);
		this.setState({notes});
	}


	render() {

		let allNotes = this.state.notes.map( (note, index) => {
			return <Note 
				key={note.id} 
				text={note.text}
				itemIndex={index}
				updateData={this.updateData}
				deleteData={this.deleteData}
				 />			
		} );


		return(
			<div style={{height: "100%"}}>
				<button
					onClick={this.addNote} 
					className="newnote">+</button>
				<div id="board" className="board">
					{allNotes}
				</div>
				</div>
		)
	}
}

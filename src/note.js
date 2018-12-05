import React from "react";
import Draggable from 'react-draggable'; // The default
// import * as edit from 'react-edit';



export default class Note extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			userText: "",
			currentView: true,
			// editing : false
		}
		this.changeView = this.changeView.bind(this);
		this.getText = this.getText.bind(this);
		this.deleteMe = this.deleteMe.bind(this);
		// this.edit = this.edit.bind(this);
		// this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount()
    {
        this.style = {
            right : this.randomBetween(0, window.innerWidth-150) + 'px',
            top : this.randomBetween(0, window.innerHeight - 150) + 'px',
            transform : 'rotate( ' + this.randomBetween(-15, 15) + 'deg)',
						position : 'absolute',
					  width : '200px',
					  height : '200px',
					  font : '16px Arial',
					  background : 'linear-gradient(rgb(216, 215, 85), rgb(250, 248, 45))',
					  boxShadow : '5px 0 10px rgb(203, 160, 41)'               
        };                           
    }

  randomBetween(min, max)
    {
        return (min + Math.ceil(Math.random() * max));
    }

	componentDidMount(){
		this.setState({userText: this.props.text})
	}

	changeView(){
		if(!this.state.currentView){
			this.props.updateData(this.props.itemIndex, this.state.userText);
		}
		this.setState({currentView: !this.state.currentView});
	}
	 // edit()
  //   {
  //     this.setState({editing : true});
  //   }

	getText({target:{value:userText}}){
		this.setState({userText});
	}

	deleteMe(){
		this.props.deleteData(this.props.itemIndex);
	}

	render(){
		return (
			<Draggable  cancel=".not-draggable">
			<div 
			className="note"
			style = {this.style}
			>
					<button
						onClick={this.deleteMe}
					 style={{
						position: "absolute",
						bottom: 10,
						right: 10,
						zIndex: 100,
					}}
					 >X</button>
					<div 
						onDoubleClick={this.changeView}
						style={{display: this.state.currentView ? "block" : "none"}}
					>
						{this.state.userText}
					</div>
					<textarea 
						className="not-draggable"
						onDoubleClick={this.changeView}
						onChange={this.getText}
						value={this.state.userText}
						style={{display: this.state.currentView ? "none" : "block"}}
						>
					</textarea>
				</div>
				</Draggable>
			)
	}
}
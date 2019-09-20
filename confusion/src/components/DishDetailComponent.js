import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
	constructor(props){
		super(props)
	}

	renderDish(dish){
		if(dish != null){
			return(
				<Card>
					<CardImg width = "100%" src = {dish.image} alt = {dish.name}/>
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			)
		}
		else{
			return(
				<div></div>
			)
		}
	}

	renderComments(dish){
		if(this.props.selectedDish !== null){
			if(this.props.selectedDish.comments.length !== 0 ){
				const comments = this.props.selectedDish.comments.map(comment => {
					return(
						<li key = {comment.id}>
							<p>{comment.comment}</p>
							<p>{`-- ${comment.author} , ${comment.date}`}</p>
						</li>
					)
				})
				return(
					<div>
						<h4>Comments</h4>
						<ul className = "list-unstyled">
							{comments}
						</ul>

					</div>
				)
			}
			else{
				return(
					<div></div>
				)
			}
		}
		else{
			return(
				<div></div>
			)
		}
	}

	render(){
		return(
			<div className="row">
	        	<div  className="col-12 col-md-5 m-1">
	        		{this.renderDish(this.props.selectedDish)}
	        	</div>
	        	<div  className="col-12 col-md-5 m-1">
	        		{this.renderComments(this.props.selectedDish)}
	        	</div>
            </div>
		)
	}
}

export default DishDetail;
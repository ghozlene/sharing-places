import React from 'react';
import './PlaceItem.css';
import Card from '../../shared/components/UIElement/Card';
import Button from '../../shared/components/formElements/Button';

const PlaceItem = (props) => {
	return (
		<li className='place-item'>
			<Card className='place-item__content'>
				<div className='place-item__image'>
					<img src={props.image} alt={props.title} />
				</div>
				<div className='place-item__info'>
					<h2>{props.title}</h2>
					<h3>{props.address}</h3>
					<h3>{props.description}</h3>
				</div>
				<div className='place-item__actions '>
					<Button inverse>View on map</Button>
					<Button to={`/places/${props.id}`}>Edit</Button>
					<Button danger>Delete</Button>
				</div>
			</Card>
		</li>
	);
};

export default PlaceItem;

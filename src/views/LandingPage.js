import React from 'react';
import NavBar from '../components/NavBar.js';
import ToDoApp from '../components/ToDoApp.js';

export default function LandingPage(props) {
	return (
		<React.Fragment>
			<NavBar {...props} title={'React Login System'} />
			<div className='justify-content-center text-center mt-3'>
				{!props.isLogined ? (
					<div>
						<h1 className='mb-4'>Welcome</h1>
						<h4>Please login to manage your to-do list</h4>
					</div>
				) : (
					<ToDoApp />
				)}
			</div>
		</React.Fragment>
	);
}

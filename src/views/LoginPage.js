import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from '../components/NavBar.js';

export default function LoginPage(props) {
	const [loginid, setLoginid] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = (evt) => {
		evt.preventDefault();
		fetch('http://localhost:3001/api/authentication', {
			method: 'POST',
			body: JSON.stringify({ loginid, password }),
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((res) => {
				if (res.status === 200) {
					props.history.push('/');
				} else {
					const error = new Error(res.error);
					throw error;
				}
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<React.Fragment>
			<NavBar {...props} title={'React Login System'} />
			<div className='d-flex justify-content-center text-center mt-3'>
				<Form className='w-100 col-md-6 col-xl-3 ' onSubmit={onSubmit}>
					<h1 className='mb-4'>Login Page</h1>
					<Form.Group
						controlId='formLoginid'
						onChange={(evt) => setLoginid(evt.target.value)}
					>
						<Form.Label>Login ID</Form.Label>
						<Form.Control type='text' placeholder='Enter Login ID' />
					</Form.Group>
					<Form.Group
						controlId='formPassword'
						onChange={(evt) => setPassword(evt.target.value)}
					>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Enter Password' />
					</Form.Group>
					<Button variant='primary' type='submit'>
						Login
					</Button>
				</Form>
			</div>
		</React.Fragment>
	);
}

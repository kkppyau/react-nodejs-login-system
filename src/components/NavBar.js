import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar(props) {
	const { title, isLogined } = props;

	const onLogout = () => {
		fetch('http://localhost:3001/api/logout', {
			method: 'POST',
			credentials: 'include',
			redirect: 'follow',
		})
			.then((res) => {
				if (res.status === 200) {
					window.location.href = '/';
				}
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<Navbar bg='light' expand='lg'>
			<Navbar.Brand href='/'>{title}</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
				{isLogined ? (
					<Nav>
						<Nav.Link onClick={onLogout}>logout</Nav.Link>
					</Nav>
				) : (
					<Nav>
						<Nav.Link href='/login'>login</Nav.Link>
						<Nav.Link href='/register'>register</Nav.Link>
					</Nav>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
}

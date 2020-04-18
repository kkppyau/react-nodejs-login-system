import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import NavBar from './components/NavBar.js';

export default function isAuthenticated(Page) {
	return class extends Component {
		state = {
			loading: true,
			redirect: false,
		};

		componentDidMount() {
			fetch('http://localhost:3001/api/verification', {
				credentials: 'include',
			})
				.then((res) => {
					if (res.status === 200) {
						this.setState({ loading: false });
					} else {
						this.setState({ loading: false, redirect: true });
					}
				})
				.catch((err) => {
					console.error(err);
					this.setState({ loading: false, redirect: true });
				});
		}

		render() {
			const { loading, redirect } = this.state;
			if (loading) {
				return (
					<React.Fragment>
						<NavBar title={'React Login System'} />
						<div className='justify-content-center text-center mt-3'>
							<Spinner animation='border' />
						</div>
					</React.Fragment>
				);
			}
			if (redirect) {
				return <Redirect to='/login' />;
			}
			return <Page isLogined={true} />;
		}
	};
}

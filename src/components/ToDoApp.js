import React, { useState, useEffect } from 'react';

export default function ToDoApp(props) {
	const [loading, setLoading] = useState(true);
	const [toDoItem, setToDoItem] = useState(null);
	const [toDoList, setToDoList] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/api/getToDoList', {
			method: 'GET',
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((result) => {
				setToDoList(result);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	useEffect(() => {
		if (loading === false)
			fetch('http://localhost:3001/api/editToDoList', {
				method: 'POST',
				body: JSON.stringify({ todolist: toDoList }),
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}).catch((err) => {
				console.error(err);
			});
	}, [toDoList]);

	return (
		<React.Fragment>
			<div className='d-flex justify-content-center mt-3'>
				<div className='w-100 col-md-6 col-xl-5 '>
					<h1 className='mb-4 text-center'>To Do List</h1>
					<div className='input-group mt-4 mb-1'>
						<input
							type='text'
							className='form-control'
							placeholder='Enter your todo Item'
							onChange={(evt) => setToDoItem(evt.target.value)}
						/>
						<div className='input-group-append'>
							<button
								onClick={() =>
									setToDoList([
										...toDoList,
										{ id: toDoList.length, content: toDoItem },
									])
								}
								className='btn btn-danger'
								type='button'
							>
								Add Item
							</button>
						</div>
					</div>
					{toDoList
						? toDoList.map((todo) => (
								<div className='card mt-3' key={todo.id}>
									<div className='card-body text-left'>
										{todo.content}
										<button
											data-id={todo.id}
											onClick={() =>
												setToDoList(
													toDoList.filter((item) => item.id !== todo.id)
												)
											}
											type='button'
											className='close'
											aria-label='Close'
										>
											<span aria-hidden='true'>&times;</span>
										</button>
									</div>
								</div>
						  ))
						: ''}
				</div>
			</div>
		</React.Fragment>
	);
}

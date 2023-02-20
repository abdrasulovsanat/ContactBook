import React, { useEffect, useContext } from 'react'
import { usersContext } from '../../ContactContext';
import { useParams } from 'react-router-dom'

const Details = () => {
	const { getOneUser, oneUser } = useContext(usersContext)
	const params = useParams();

	useEffect(() => {
		getOneUser(params.id);
	}, []);

	return (
		<div className="container">
			{oneUser ? (
				<>
					<div>{oneUser.name}</div>
					<div>{oneUser.lastName}</div>
					<div>{oneUser.number}</div>
				</>
			) : (
					<span className="visually-hidden">Loading...</span>
			)}
		</div>
	)
}

export default Details
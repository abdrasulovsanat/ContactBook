import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usersContext } from '../../ContactContext'
const ContactList = () => {
	const { getUsers, users ,deleteUser} = useContext(usersContext)
	const navigate = useNavigate()
	
	useEffect(() => {
		getUsers()
	}, [])

	return (
		<div>
			{users.map(item => (
				<div key={item.id} style={{ margin: '10px' }}>
					name: {item.name};
					<br />
					last name: {item.lastName};
					<br />
					Phone Number: {item.number};
					<br />
					<button onClick={()=>deleteUser(item.id)}>Delete</button>
					<button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
					<button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
				</div>
			))}
		</div>
	)
}



export default ContactList;
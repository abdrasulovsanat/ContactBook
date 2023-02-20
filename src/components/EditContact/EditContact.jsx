import React, { useReducer, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { usersContext } from '../../ContactContext'

const INIT_STATE = {
	name: '',
	lastName: '',
	number: '',
}
function reducer(state, action) {
	switch (action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.payload,
			}
		case 'CHANGE_LAST_NAME':
			return {
				...state,
				lastName: action.payload,
			}
		case 'CHANGE_NUMBER':
			return {
				...state,
				number: action.payload,
			}
		default:
			return state
	}
}

const EditForm = () => {
	const { getOneUser, oneUser, updateUser } = useContext(usersContext)
	const { id } = useParams()
	const navigate = useNavigate()
	const [state, dispatch] = useReducer(reducer, INIT_STATE)
	useEffect(() => {
		getOneUser(id)
	}, [])
	useEffect(() => {
		if (oneUser) {
			dispatch({
				type: 'CHANGE_NAME',
				payload: oneUser.name,
			})
			dispatch({
				type: 'CHANGE_LAST_NAME',
				payload: oneUser.lastName,
			})
			dispatch({
				type: 'CHANGE_NUMBER',
				payload: oneUser.number,
			})
		}
	}, [oneUser])
	function saveChanges() {
		let editedUser = {
			name: state.name,
			lastName: state.lastName,
			number: state.number
		}
		updateUser(id, editedUser)
		navigate('/users')
	}

	return oneUser ? (
		<>
			<input type="text"
				placeholder='Enter Name'
				value={state.name}
				onChange={(e) => dispatch({
						type: 'CHANGE_NAME',
						payload: e.target.value
					})} />
			<input type="text"
				placeholder='Enter Last Name'
				value={state.lastName}
				onChange={(e) => dispatch({
						type: 'CHANGE_LAST_NAME',
						payload: e.target.value
					})} />
			<input type="text"
				placeholder='Enter Phone Number'
				value={state.number}
				onChange={(e) => dispatch({
						type: 'CHANGE_NUMBER',
						payload: e.target.value
					})}/>
			<button onClick={saveChanges}>Save</button>
		</>
	) : (
		<h2>Loading ...</h2>
	)
}

export default EditForm
import React, { useContext, useReducer } from 'react'
import { usersContext } from '../../ContactContext'

const INIT_STATE = {
	name: '',
	lastName: '',
	number: '',
}
function reducer(state, action) {
	switch (action.type) {
		case 'CHANGE_NAME':
			return {...state,name: action.payload}
		case 'CHANGE_LAST_NAME':
			return {...state,lastName: action.payload}
		case 'CHANGE_NUMBER':
			return {...state,number: action.payload}
		default:
			return state
	}
}

const AddContact = () => {
	const { createUser } = useContext(usersContext)
	const [state, dispatch] = useReducer(reducer, INIT_STATE)
	const { name, lastName, number } = state
	const handleSubmit = (e) => {
		createUser(state)
		dispatch({ type: 'CHANGE_NAME', payload: '' })
		dispatch({ type: 'CHANGE_LAST_NAME', payload: '' })
		dispatch({ type: 'CHANGE_NUMBER', payload: '' })
	}
	return (
		<div id='block'>
			<input onChange={(e) => dispatch({type: 'CHANGE_NAME', payload: e.target.value})} type="text" placeholder='Name' value={name} />
            <input onChange={(e) => dispatch({type: 'CHANGE_LAST_NAME', payload: e.target.value})}  type="text" placeholder='Last Name' value={lastName} />
            <input onChange={(e) => dispatch({type: 'CHANGE_NUMBER', payload: e.target.value})}  type="text" placeholder='Number' value={number} />
            <button onClick={handleSubmit}>Add Contact</button>
		</div>
	)
}
export default AddContact
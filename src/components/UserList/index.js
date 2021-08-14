import { useState, useEffect } from 'react';
import './index.css';

export const UserList = ({users}) => {
	const [list, setList] = useState([]);

	useEffect(() => {
		console.log('Users list results ', users);
		if(users) {
			setList(users);
		};
	}, [users]);

	return (
		<ul className="list-group"  id="result-container">
		{ list.map(user => (
				<li key={user.id} className="list-group-item border-0">
					<a href={`/users/${user.login}`}>{user.login} - {user.id}</a>
				</li>
			))}
		</ul>
	)
};

export default UserList;
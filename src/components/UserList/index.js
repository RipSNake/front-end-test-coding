import { useState, useEffect } from 'react';

export const UserList = ({users}) => {
	const [list, setList] = useState([]);

	useEffect(() => {
		if(users) {
			setList(users);
		};
	}, [users]);

	return (
		<ul>
			FROM USER LIST
		{ list.map(user => (
				<li key={user.id}>
					<a href={`/users/${user.login}`}>{user.login} - {user.id}</a>
				</li>
			))}
		</ul>
	)
};

export default UserList;
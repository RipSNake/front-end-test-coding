import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import httpService from '../../services/httpService';

export const ProfileScreen = () =>{
	const {id} = useParams();
	const [user, setUser] = useState({name: 'NOmbrerbebr'})

	const fetchData = async () => {
			return await httpService({id});
	}

	useEffect(() => {
		if(id) {
			fetchData().then( 
				result => setUser(result), 
				error => console.log('Error ', error));
		};
	}, [id])

	return (
		<>
			<h1>From Profile Screen</h1>
			{	!user ?
				<p>Fetching Data...</p>
				:
				<>
				<img src={`${user.avatar_url}`} alt={`${user.name}'s Profile Pic`}/>
				<ul>
					<li>Name: {user.name ? user.name : 'Unknown'}</li>
					<li>Company: {user.company ? user.company : 'Unknown'}</li>
					<li>Location: {user.location ? user.location : 'Unknown'}</li>
					<li>Email: {user.email ? user.location : 'Unknown'}</li>
					<li>Hireable: {user.hireable ? user.hireable : 'Unknown'}</li>
					<li>Bio: {user.bio ? user.bio : 'Unknown'}</li>
				</ul>	
				</>
			}
			
			

		</>
	)
};

export default ProfileScreen;
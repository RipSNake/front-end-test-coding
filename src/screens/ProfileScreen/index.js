import './index.css';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import httpService from '../../services/httpService';

export const ProfileScreen = ({addToast}) =>{
	const {id} = useParams();
	const [user, setUser] = useState({name: 'NOmbrerbebr'})
	const history = useHistory();

	const fetchData = async () => {
			return await httpService({id});
	}

	const goBack = () => {history.goBack() }

	useEffect(() => {
		if(id) {
			fetchData().then( 
				result => {return setUser(result)}, 
				error => console.log('Error ', error));
		};
	}, [id])

	return (
		<div className="my-2 col-8 col-sm-6 col-md-4 mx-auto" style={{minWidth:'380px'}} id="profile">
			<button onClick={goBack} id="back-btn"><i class="fas fa-arrow-left"></i></button>
			{	!user ?
				<p>Fetching Data...</p>
				:
				<div className="card shadow border-0  mx-auto" style={{backgroundColor: '#eee'}}>
					<img className="mx-auto my-2" style={{borderRadius: '50%', maxHeight: '350px',maxWidth: '350px'}} src={`${user.avatar_url}`} alt={`${user.name}'s Profile Pic`}/>
					<div className="card-body">
					<ul className="list-group" style={{listStyleType: 'none'}}>
						<li className="list-group-item border-0"><h5 className="border-0 card-title"><i className="fas fa-user-alt"></i> {user.name ? user.name : 'Unknown'}</h5></li>
						<li className="list-group-item border-0"><h6 className="border-0 card-subtitle"><i className="fas fa-building"></i> {user.company ? user.company : 'Unknown'}</h6></li>						
						<li className="list-group-item border-0"><i className="fas fa-map-marker-alt"></i> {user.location ? user.location : 'Unknown'}</li>
						<li className="list-group-item border-0"><i className="fas fa-envelope"></i> {user.email ? user.location : 'Unknown'}</li>
						<li className="list-group-item border-0">Bio: {user.bio ? user.bio : 'Unknown'}</li>
						
					</ul>	
					</div>
				</div>
			}
			
			

		</div>
	)
};

export default ProfileScreen;
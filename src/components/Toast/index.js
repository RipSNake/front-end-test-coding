import React, { useState, useEffect } from 'react';
import './index.css';

export const Toast = ({toastList}) => {
	const [list, setList] = useState([]);

	const handleClick = (index) => {
		console.log('Handle click TOAST Index ', index);
		let newList = list;
		console.log(newList)
		setList(newList.filter((item, ind) => ind !== index));
	}

	useEffect(() => {
		
			setList(toastList);
		
		console.log('Toast Component ', toastList);
	}, [toastList]);

	return (
		<div className="notification-container bottom-right">
		{ list.map((item, index) => 
			<div key={index} className="notification toast show" style={{backgroundColor: `${item.backgroundColor}`}}>
				<button onClick={(e) => handleClick(index)}>
		        X
		    </button>
		    <div className="notification-image">
		        <img src="" alt="Toast IMG" />
		    </div>
		    <div>
		        <p className="notification-title">Title</p>
		        <p className="notification-message">Message</p>
		    </div>
			</div>
			)
		}
		</div>	
	)
}

export default Toast;
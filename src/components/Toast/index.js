import React, { useState, useEffect } from 'react';
import './index.css';

export const Toast = ({toastList}) => {
	const [list, setList] = useState([]);

	const handleClick = (index) => {
		console.log('Handle click TOAST Index ', index);
		let newList = list;
		setList(newList.filter((item, ind) => ind !== index));
	}

	useEffect(() => {
		
			setList(toastList);
		
		console.log('Toast Component ', toastList);
	}, [toastList]);

	return (
		<div className="notification-container bottom-right">
		{ list.map((item, index) => 
			<div key={index} className="notification toast show" style={{backgroundColor: `${item.bgColor}`}}>
				<button onClick={(e) => handleClick(index)}>
		        X
		    </button>
		    <div className="notification-image">
		        <img src={item.img} alt="IMG" />
		    </div>
		    <div>
		        <p className="notification-title">{item.title}</p>
		        <p className="notification-message">{item.message}</p>
		    </div>
			</div>
			)
		}
		</div>	
	)
}

export default Toast;
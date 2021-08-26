import './index.css';
import ToastItem from '../ToastItem';

export const Toasts = ({toastList, setToast}) => {
	// remove toast item onClick
	const handleClick = (index) => {
		setToast(toastList.filter((item, ind) => ind !== index));
	}

	return (
		<div className="notification-container bottom-right">
			{ toastList.map((item, index) => <ToastItem key={index} item={item} index={index} setToast={setToast} handleClick={(e) => handleClick(index)}/>	)}
		</div>	
	)
}

export default Toasts;

/*<div key={index} onClick={(e) => handleClick(index)} className="notification toast show" 
				style={{backgroundColor: `${item.bgColor}`,opacity:`${item.opacity}`}} >
		    <div className="notification-image">
		    { item.img === 'check' ? <img src={check} alt={`${item.img}`} /> : null }
		    { item.img === 'error' ? <img src={error} alt={`${item.img}`} /> : null }
		    { item.img === 'info' ? <img src={info} alt={`${item.img}`} /> : null }
		    { item.img === 'warning' ? <img src={warning} alt={`${item.img}`} /> : null }
		    </div>
		    <div>
		        <p className="notification-title">{item.title}</p>
		        <p className="notification-message">{item.message}</p>
		    </div>
			</div>*/
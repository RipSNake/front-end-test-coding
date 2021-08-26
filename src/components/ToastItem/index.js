import { useOpacity } from '../../Hooks/useOpacity';

// Toast Images
import check from '../../assets/check.svg';
import error from '../../assets/error.svg';
import info from '../../assets/info.svg';
import warning from '../../assets/warning.svg';

export const ToastItem = ({item, index, setToast, handleClick}) => {
	const opacity = useOpacity();

	if(opacity <= 0) { handleClick(index) };

	return (
			<div onClick={ handleClick/*(e) => handleClick(index)*/} className="notification toast show" 
				style={{backgroundColor: `${item.bgColor}`,opacity:`${opacity}`}} >
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
			</div>
	)
}

export default ToastItem;
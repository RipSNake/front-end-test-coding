import './index.css';
import check from '../../assets/check.svg';
import error from '../../assets/error.svg';
import info from '../../assets/info.svg';
import warning from '../../assets/warning.svg';

const IMGS = [check, error, info, warning];

export const Toast = ({toastList, setToast}) => {

	const handleClick = (index) => {
		let newList = toastList;
		setToast(newList.filter((item, ind) => ind !== index));
	}

	return (
		<div className="notification-container bottom-right">
		{ toastList.map((item, index) => 
			<div key={index} onClick={(e) => handleClick(index)} className="notification toast show" style={{backgroundColor: `${item.bgColor}`,opacity:`${item.opacity}`}}>
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
		</div>	
	)
}

export default Toast;
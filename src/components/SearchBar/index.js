import './index.css';
import { useState } from 'react';
import httpService from '../../services/httpService';

export const SearchBar = ({setList, addToast}) => {
	const [error, setError] = useState('');

	const validator = (string) => {
		if(string !== 'noloro') {
			if(string.length >= 4) {
				setError('');
				return true;
			} else {
				setError('Search value must have at least 4 characters');
				return false;
			}	
		} else {
			setError('Search value DENIED');
			// addToast({title:'Denied', message:'Search Value Denied',bgColor:'red',img:'error'})
			return false;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(validator(e.target['q'].value)) {
			const results = await httpService({searchParams: `${e.target['q'].value}`});
			if(results.items.length > 0) {
				let firsts = [];
				for(let i = 0; i < 10; i++) {
					firsts.push(results.items[i]);
				}
				setList(firsts);
				addToast({title:'Success',message:'Search completed',bgColor:'green',img:'check',opacity:'.5'})
			}	else {
				addToast({title:'No matches',message:'No coincidences found',bgColor:'yellow',img:'info',opacity:'1'})
			}
		} else {
			addToast({title:'Error fetching users', message:`${error}`, bgColor:'red', img:'error',opacity:'1'})
		}
	}

	return (
		<>
			<form  onSubmit={handleSubmit}>
				<input name="q" type="text" placeholder="Search user..." className="w-75"/>
				<button type="submit" className="search-btn w-25"><i className="fas fa-search"></i></button>
			</form>
			{ error ? <div style={{color: 'red', paddingTop: '5px'}}>{error}</div> : null }
		</>
	)
};

export default SearchBar;
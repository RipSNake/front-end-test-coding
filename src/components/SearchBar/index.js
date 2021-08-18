import './index.css';
import httpService from '../../services/httpService';

export const SearchBar = ({setList, addToast}) => {

	const validator = (string) => {
		console.log('The validation ', string);
		if(string !== 'noloro') {
			if(string.length >= 4) {
				return true;
			} else {
				console.log('String is too short');
				return false;
			}	
		} else {
			console.log('Search value DENIED');
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
				addToast({title:'New Toast',message:'This is so great !',bgColor:'green',img:'check'})
			}	else {
				addToast({title:'NULO',message:'resultado nulo',bgColor:'red',img:'error'})
			}
		} else {
			addToast({title: 'Error fetching users', message: 'No se pudo completar la busqueda',bgColor:'red',img:'error'})
			console.log('ERROR EN EL VALOR DE BUSQUEDA');
		}
	}

	return (
		<form  onSubmit={handleSubmit}>
			<input name="q" type="text" placeholder="Search user..." className="w-75"/>
			<button type="submit" className="search-btn w-25"><i className="fas fa-search"></i></button>
		</form>
	)
};

export default SearchBar;
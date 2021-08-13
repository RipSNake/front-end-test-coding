import httpService from '../../services/httpService';

export const SearchBar = ({setList}) => {

	const validator = (string) => {
		if(string.length >= 4 && string !== 'noloro') {
			return true;
		} else {
			return false;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(validator) {
			const results = await httpService({searchParams: `${e.target['q'].value}`});
			if(results) {
				let firsts = [];
				for(let i = 0; i < 10; i++) {
					firsts.push(results.items[i]);
				}
				if(setList) { setList(firsts) }
			}	
		} else {
			console.log('ERROR EN EL VALOR DE BUSQUEDA');
		}
		
	}

	return (
		<form  onSubmit={handleSubmit}>
			<input name="q" type="text" placeholder="Search user..." />
			<button type="submit">Search</button>
		</form>
	)
};

export default SearchBar;
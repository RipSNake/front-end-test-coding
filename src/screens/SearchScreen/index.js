import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import UserList from '../../components/UserList';

export const SearchScreen = () => {
	const [results, setResults] = useState([]);

	return (
		<div className="my-5 col-8 col-sm-6 mx-auto">
			<SearchBar setList={setResults}/>
			<hr />
			<UserList users={results}/>
		</div>
	)
};

export default SearchScreen;
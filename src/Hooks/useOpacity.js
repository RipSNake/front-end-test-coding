import { useState, useEffect } from 'react';
//custom hook to set opacity of Toast Element
export const useOpacity = () => {
	const [opacity, setOpacity] = useState(1);
	
	useEffect(() => {
		setTimeout(() => setOpacity(() => opacity -0.067), 200);
	}, [opacity])

	return opacity;
}

export default useOpacity;
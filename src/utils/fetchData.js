/*export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7813e38168msh0284022be07d850p152550jsnca3a879ee687',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};*/
export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.EXERCISEOPTIONS_REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};


/*export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7813e38168msh0284022be07d850p152550jsnca3a879ee687',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};*/
export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json()

    return data;
}


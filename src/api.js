import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ODBkE3uo_bHmn0D7wd-4y5Wd_845xNRszPEK0UMbGgE',
        },
        params: {
            query: term,
        },
    });
    
    
    return response.data.results;
};

export default searchImages;
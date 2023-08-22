import axios from "axios";

const SearchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos/', {
        headers: {
            Authorization: 'Client-ID ofWDUR7uBcf6UYxOxgAUhL0D7XYkGq7kZJf4KEEGruM'
        },
        params: {
            query: term,
            per_page: 20
        }
    });

    return response.data.results;
}

export default SearchImages;

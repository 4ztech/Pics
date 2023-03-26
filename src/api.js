import axios from "axios";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID zr_vCPl0hD66rymj9oPGI1KpwbcApf2uc1dVAqAZhco'
        },
    params:{
        query: 'cars'
    }
    });
    console.log(response);
    return response;
};

export default searchImages;
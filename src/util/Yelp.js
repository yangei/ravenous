const apiKey = 'apiKey';

export const Yelp = {
  search(term, location, sortBy, offset, limit) {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const url = `${corsAnywhere}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&offset=${offset}&limit=${limit}`;
    return fetch(url, {headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => {
      if(response.ok){
        return response.json();
      }
      throw new Error(response.status+', '+response.status);
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map( bussiness => {
          return {
            id: bussiness.id,
            imageSrc: bussiness.image_url,
            name: bussiness.name,
            address: `${bussiness.location.address1} ${bussiness.location.address2} ${bussiness.location.address3}`,
            city: bussiness.location.city,
            state: bussiness.location.state,
            zipCode: bussiness.location.zip_code,
            category: bussiness.categories.title,
            rating: bussiness.rating,
            reviewCount: bussiness.review_count
          }
        });
      }
    })
  }

}

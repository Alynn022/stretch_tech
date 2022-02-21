const apiKey = "Ad0_XGC0yivo6Othpb0K30Z_KvuGmbz8B1ZNnqP5C0lQSP8SwrVXCSaLLxNwVCWe9DyUojQ6a42vz1KdOmMshvFgTzc-t1uO2XDl1c8_i-bn53L3zRZfXEaI1CIUYnYx"
const url = `https://api.yelp.com/v3/businesses/search?location=Denver&categories=food&limit=50`

// const getAllRestaurants = () => {
//   return fetch('https://fe-cors-proxy.herokuapp.com', {
//     headers: {
//     "Target-URL": "https://api.yelp.com/v3/businesses/search?location=Denver&categories=food",
//     "Authorization": "Bearer AH6TkVNX-YvTWJNUDUWrGhPCWRjzowhc6chQ6pvs4uhx251m3PAI0UoMZT5jRW1IyQFG0DifaEmk6F3Iz64u4myxtcZRuGThLO9OHp_zAGCp7yGsEorWWz3lhLIOYnYx"
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))
// }

const getAllRestaurants = (offset: number = 0) => {
  const newUrl = `https://cors-anywhere.herokuapp.com/${url}` + `&offset=${offset}`
  console.log("fetch URL: ", newUrl)
  return fetch(newUrl, {
    headers: {
    Authorization: `Bearer ${apiKey}`
  }
})
  .then(response => {
    console.log("fetch request ran")
    return response.json()
  })
  // .then(data => console.log(data))
  .catch(error => console.error(error))
}


export {getAllRestaurants};
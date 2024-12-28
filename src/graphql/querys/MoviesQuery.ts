export const moviesQuery = `
query ($page: Int, $search: String, $isAdult: Boolean, $genre: String) {
  Page (page: $page) {
    pageInfo {
      currentPage
      hasNextPage
      perPage
    }
    media (search: $search, isAdult: $isAdult, genre: $genre) {
       id
       siteUrl
       format
       episodes
       genres
       coverImage {
         extraLarge
       }
       title {
         english
         native
       }
       description
       status  
       meanScore
       isAdult
     }
   }
}
`;

export const moviesQuery = `
query ($page: Int, $search: String, $isAdult: Boolean) {
  Page (page: $page) {
    pageInfo {
      currentPage
      hasNextPage
      perPage
    }
    media (search: $search, isAdult: $isAdult) {
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

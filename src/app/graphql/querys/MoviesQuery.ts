export const moviesQuery = `
query ($page: Int, $search: String) {
  Page (page: $page) {
    pageInfo {
      currentPage
      hasNextPage
      perPage
    }
    media (search: $search) {
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
     }
   }
}
`;
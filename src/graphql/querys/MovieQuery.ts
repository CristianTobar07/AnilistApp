export const MovieQuery = `
    query ($id: Int!) {
      Page {
        media(id: $id) {
          id
          format
          episodes
          genres
          coverImage {
            extraLarge
            color
          }
          meanScore
          title {
            english
            native
          }
          description
          status
          endDate {
            day
            month
            year
          }
          season
          duration
          bannerImage
        }
      }
    }
  `;
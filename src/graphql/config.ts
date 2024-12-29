import { GraphQLClient } from "graphql-request";

// Configuration of global client
const httpClient = new GraphQLClient("https://graphql.anilist.co");
export default httpClient;

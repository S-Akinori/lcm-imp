import { GraphQLClient } from "graphql-request";
import { getSdk, RootQueryToPostConnection } from "lib/generated/client";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string);
const sdk = getSdk(client);

export default sdk;
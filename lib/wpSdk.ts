import { GraphQLClient } from "graphql-request";
import { getSdk } from "lib/generated/client";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
  headers: {
    Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`,
  },
});
const sdk = getSdk(client);

export default sdk;
import steem from "../connectors/steemjs.connector.js";
import _ from "lodash";

const UserResolvers = {
  Query: {
    // Get user via steem.
    async user(root, args, context) {
      const users = await steem.api.getAccounts([args.username]);
      console.log(users);
      return _.head(users);
    }
  }
};

export default UserResolvers;
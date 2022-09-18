import { nodeDefinitions, fromGlobalId } from "graphql-relay";
import { users } from "../entities/User/utils";
import { IUser } from "../entities/User/userType";

const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
  async (globalId: string) => {
    const { id: userGlobalID, type } = fromGlobalId(globalId);
    if (type === "User")
      return await users.find(
        ({ id }: IUser) => (id as string) === userGlobalID
      );
    return null;
  }
);

export { nodeInterface, nodeField, nodesField };

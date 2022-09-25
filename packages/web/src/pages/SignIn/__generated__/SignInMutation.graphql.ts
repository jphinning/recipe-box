/**
 * @generated SignedSource<<6162f6283161d0ba46d799df18717ff7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type loginUserInput = {
  clientMutationId?: string | null;
  email: string;
  password: string;
};
export type SignInMutation$variables = {
  input: loginUserInput;
};
export type SignInMutation$data = {
  readonly loginUser: {
    readonly error: string | null;
    readonly token: string | null;
    readonly user: {
      readonly email: string | null;
      readonly fullName: string | null;
    } | null;
  } | null;
};
export type SignInMutation = {
  response: SignInMutation$data;
  variables: SignInMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "token",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SignInMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "loginUserPayload",
        "kind": "LinkedField",
        "name": "loginUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignInMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "loginUserPayload",
        "kind": "LinkedField",
        "name": "loginUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "002e50e9e510a0dd2f15393b4143812c",
    "id": null,
    "metadata": {},
    "name": "SignInMutation",
    "operationKind": "mutation",
    "text": "mutation SignInMutation(\n  $input: loginUserInput!\n) {\n  loginUser(input: $input) {\n    user {\n      email\n      fullName\n      id\n    }\n    token\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "0935caa4d8d42130ddef38cdbcb6bdbd";

export default node;

/**
 * @generated SignedSource<<c2d709cdf3218f8ddeb2e504057dcb2e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AllUsersQuery$variables = {
  first?: number | null;
};
export type AllUsersQuery$data = {
  readonly findAllUsers: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly email: string | null;
        readonly fullName: string | null;
        readonly id: string;
        readonly password: string | null;
      } | null;
    } | null> | null;
  } | null;
};
export type AllUsersQuery = {
  response: AllUsersQuery$data;
  variables: AllUsersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "first",
        "variableName": "first"
      }
    ],
    "concreteType": "UserConnection",
    "kind": "LinkedField",
    "name": "findAllUsers",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "password",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fullName",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AllUsersQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AllUsersQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fcda8e3c36b3586fd57bf95b23a575f4",
    "id": null,
    "metadata": {},
    "name": "AllUsersQuery",
    "operationKind": "query",
    "text": "query AllUsersQuery(\n  $first: Int\n) {\n  findAllUsers(first: $first) {\n    edges {\n      node {\n        id\n        email\n        password\n        fullName\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2e01c63279d8a0794c281ad9ab46cf17";

export default node;

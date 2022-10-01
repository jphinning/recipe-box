/**
 * @generated SignedSource<<eceea36e210f7db67658dc9e9f4a7da0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OnePostQuery$variables = {
  id: string;
};
export type OnePostQuery$data = {
  readonly findOneRecipe: {
    readonly " $fragmentSpreads": FragmentRefs<"RecipeCardFragment_recipes">;
  } | null;
};
export type OnePostQuery = {
  response: OnePostQuery$data;
  variables: OnePostQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OnePostQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Recipes",
        "kind": "LinkedField",
        "name": "findOneRecipe",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecipeCardFragment_recipes"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OnePostQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Recipes",
        "kind": "LinkedField",
        "name": "findOneRecipe",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ingredients",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "instructions",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "userId",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
                "name": "fullName",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3d70aa11b3b760a0cf7b7824807489c4",
    "id": null,
    "metadata": {},
    "name": "OnePostQuery",
    "operationKind": "query",
    "text": "query OnePostQuery(\n  $id: ID!\n) {\n  findOneRecipe(id: $id) {\n    ...RecipeCardFragment_recipes\n    id\n  }\n}\n\nfragment RecipeCardFragment_recipes on Recipes {\n  id\n  title\n  description\n  ingredients\n  instructions\n  createdAt\n  updatedAt\n  userId {\n    id\n    email\n    fullName\n  }\n}\n"
  }
};
})();

(node as any).hash = "fa7f2c9b8625c47ed0403d554fae2489";

export default node;

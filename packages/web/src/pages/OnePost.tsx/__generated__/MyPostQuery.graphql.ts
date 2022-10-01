/**
 * @generated SignedSource<<896d4ebe0955e9ffca834ba5fb3f2365>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyPostQuery$variables = {
  id: string;
};
export type MyPostQuery$data = {
  readonly findOneRecipe: {
    readonly " $fragmentSpreads": FragmentRefs<"RecipeCardFragment_recipes">;
  } | null;
};
export type MyPostQuery = {
  response: MyPostQuery$data;
  variables: MyPostQuery$variables;
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
    "name": "MyPostQuery",
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
    "name": "MyPostQuery",
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
    "cacheID": "c57d7212b5771150697b5fa04de13eae",
    "id": null,
    "metadata": {},
    "name": "MyPostQuery",
    "operationKind": "query",
    "text": "query MyPostQuery(\n  $id: ID!\n) {\n  findOneRecipe(id: $id) {\n    ...RecipeCardFragment_recipes\n    id\n  }\n}\n\nfragment RecipeCardFragment_recipes on Recipes {\n  id\n  title\n  description\n  ingredients\n  instructions\n  createdAt\n  updatedAt\n  userId {\n    id\n    email\n    fullName\n  }\n}\n"
  }
};
})();

(node as any).hash = "d081bb7c996870fa003b208fec5fedef";

export default node;

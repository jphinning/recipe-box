/**
 * @generated SignedSource<<5c21a7621152f685275d36a9faf150ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type updateRecipeInput = {
  clientMutationId?: string | null;
  description?: string | null;
  globalId?: string | null;
  ingredients: ReadonlyArray<string | null>;
  instructions: ReadonlyArray<string | null>;
  title: string;
};
export type EditFormMutation$variables = {
  connections: ReadonlyArray<string>;
  input: updateRecipeInput;
};
export type EditFormMutation$data = {
  readonly updateRecipe: {
    readonly error: string | null;
    readonly recipe: {
      readonly " $fragmentSpreads": FragmentRefs<"RecipeCardFragment_recipes">;
    } | null;
  } | null;
};
export type EditFormMutation = {
  response: EditFormMutation$data;
  variables: EditFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "updateRecipePayload",
        "kind": "LinkedField",
        "name": "updateRecipe",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Recipes",
            "kind": "LinkedField",
            "name": "recipe",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RecipeCardFragment_recipes"
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "EditFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "updateRecipePayload",
        "kind": "LinkedField",
        "name": "updateRecipe",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Recipes",
            "kind": "LinkedField",
            "name": "recipe",
            "plural": false,
            "selections": [
              (v4/*: any*/),
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
                  (v4/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "recipe",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "RecipesEdge"
              }
            ]
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b72560d370a1085df6f6f99debb84e28",
    "id": null,
    "metadata": {},
    "name": "EditFormMutation",
    "operationKind": "mutation",
    "text": "mutation EditFormMutation(\n  $input: updateRecipeInput!\n) {\n  updateRecipe(input: $input) {\n    recipe {\n      ...RecipeCardFragment_recipes\n      id\n    }\n    error\n  }\n}\n\nfragment RecipeCardFragment_recipes on Recipes {\n  id\n  title\n  description\n  ingredients\n  instructions\n  createdAt\n  updatedAt\n  userId {\n    id\n    email\n    fullName\n  }\n}\n"
  }
};
})();

(node as any).hash = "7ae4a5cfaba49415d8be39b8fd707c2b";

export default node;

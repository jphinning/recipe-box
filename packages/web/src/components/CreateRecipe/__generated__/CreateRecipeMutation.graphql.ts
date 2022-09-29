/**
 * @generated SignedSource<<c076a38109b078ab66d9b389a2ef2469>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type createRecipeInput = {
  clientMutationId?: string | null;
  description?: string | null;
  ingredients: ReadonlyArray<string | null>;
  instructions: ReadonlyArray<string | null>;
  title: string;
};
export type CreateRecipeMutation$variables = {
  connections: ReadonlyArray<string>;
  input: createRecipeInput;
};
export type CreateRecipeMutation$data = {
  readonly createRecipe: {
    readonly error: string | null;
    readonly recipe: {
      readonly " $fragmentSpreads": FragmentRefs<"RecipeCardFragment_recipes">;
    } | null;
  } | null;
};
export type CreateRecipeMutation = {
  response: CreateRecipeMutation$data;
  variables: CreateRecipeMutation$variables;
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
    "name": "CreateRecipeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "createRecipePayload",
        "kind": "LinkedField",
        "name": "createRecipe",
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
    "name": "CreateRecipeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "createRecipePayload",
        "kind": "LinkedField",
        "name": "createRecipe",
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
    "cacheID": "9fd7dac79404539c040a81e6b2ceb9df",
    "id": null,
    "metadata": {},
    "name": "CreateRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation CreateRecipeMutation(\n  $input: createRecipeInput!\n) {\n  createRecipe(input: $input) {\n    recipe {\n      ...RecipeCardFragment_recipes\n      id\n    }\n    error\n  }\n}\n\nfragment RecipeCardFragment_recipes on Recipes {\n  id\n  title\n  description\n  ingredients\n  instructions\n  createdAt\n  updatedAt\n  userId {\n    id\n    email\n    fullName\n  }\n}\n"
  }
};
})();

(node as any).hash = "cf54ce444d394c7bcc77269e1432e562";

export default node;

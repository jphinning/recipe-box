/**
 * @generated SignedSource<<bbc6ecff15a78c9de8d139a29b060cb3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
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
      readonly description: string | null;
      readonly id: string;
      readonly ingredients: ReadonlyArray<string | null>;
      readonly instructions: ReadonlyArray<string | null>;
      readonly title: string;
      readonly userId: {
        readonly email: string | null;
        readonly fullName: string | null;
        readonly id: string;
      };
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
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Recipes",
  "kind": "LinkedField",
  "name": "recipe",
  "plural": false,
  "selections": [
    (v3/*: any*/),
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
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "userId",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fullName",
          "storageKey": null
        },
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
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
          (v4/*: any*/),
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
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3c7c6fb8dcdd67ea8bfa91dc8e1a8139",
    "id": null,
    "metadata": {},
    "name": "CreateRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation CreateRecipeMutation(\n  $input: createRecipeInput!\n) {\n  createRecipe(input: $input) {\n    recipe {\n      id\n      title\n      description\n      ingredients\n      instructions\n      userId {\n        fullName\n        id\n        email\n      }\n    }\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "f7359e159d53df7df1ee1aae3a6a8902";

export default node;

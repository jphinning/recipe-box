/**
 * @generated SignedSource<<f77b1dd0efea8a5e697669bcc32039de>>
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
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
          (v1/*: any*/),
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
              (v1/*: any*/),
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
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
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
    "name": "CreateRecipeMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateRecipeMutation",
    "selections": (v2/*: any*/)
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

(node as any).hash = "5da2a2101f38d0466f2c0b00ea931d17";

export default node;

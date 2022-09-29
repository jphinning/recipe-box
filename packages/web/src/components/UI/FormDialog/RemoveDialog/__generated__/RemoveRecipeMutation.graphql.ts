/**
 * @generated SignedSource<<7c32ff6d7c90daa163df6c91ad880d0a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type deleteRecipeInput = {
  clientMutationId?: string | null;
  globalId?: string | null;
};
export type RemoveRecipeMutation$variables = {
  connections: ReadonlyArray<string>;
  input: deleteRecipeInput;
};
export type RemoveRecipeMutation$data = {
  readonly deleteRecipe: {
    readonly error: string | null;
    readonly recipeId: string | null;
  } | null;
};
export type RemoveRecipeMutation = {
  response: RemoveRecipeMutation$data;
  variables: RemoveRecipeMutation$variables;
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
  "name": "recipeId",
  "storageKey": null
},
v4 = {
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
    "name": "RemoveRecipeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "deleteRecipePayload",
        "kind": "LinkedField",
        "name": "deleteRecipe",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "RemoveRecipeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "deleteRecipePayload",
        "kind": "LinkedField",
        "name": "deleteRecipe",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "recipeId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b2c60459e5dcd04c4f46f4c4267bbbfe",
    "id": null,
    "metadata": {},
    "name": "RemoveRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation RemoveRecipeMutation(\n  $input: deleteRecipeInput!\n) {\n  deleteRecipe(input: $input) {\n    recipeId\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "e82b58abc14bfa1fd2ddda3b51232f5c";

export default node;

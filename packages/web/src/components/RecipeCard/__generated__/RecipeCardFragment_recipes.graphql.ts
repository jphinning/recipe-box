/**
 * @generated SignedSource<<6ae8b75069ed9923df704a0a1c826e02>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecipeCardFragment_recipes$data = {
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
  readonly " $fragmentType": "RecipeCardFragment_recipes";
};
export type RecipeCardFragment_recipes$key = {
  readonly " $data"?: RecipeCardFragment_recipes$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecipeCardFragment_recipes">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecipeCardFragment_recipes",
  "selections": [
    (v0/*: any*/),
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
        (v0/*: any*/),
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
  "type": "Recipes",
  "abstractKey": null
};
})();

(node as any).hash = "2fd18ef34ab0a4631fe865766618f56b";

export default node;

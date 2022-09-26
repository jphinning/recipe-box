/**
 * @generated SignedSource<<f9456bbaa3d716ab9c925d65e5d067d3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecipeCardFragment_recipes$data = {
  readonly createdAt: string | null;
  readonly description: string | null;
  readonly id: string;
  readonly title: string;
  readonly userId: {
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
      "name": "createdAt",
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

(node as any).hash = "238481a43ced4e303f126d2938492911";

export default node;

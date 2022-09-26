import { Schema, model, Types } from 'mongoose';

export interface IRecipes {
  _id: Types.ObjectId;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  userId: Types.ObjectId;
}

const recipesSchema = new Schema<IRecipes>(
  {
    title: { type: String, required: true },
    description: { type: String },
    ingredients: { type: [String], required: true },
    instructions: { type: [String], required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true },
);

export const RecipesModel = model<IRecipes>('Recipes', recipesSchema);

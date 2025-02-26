export interface IRecipe {
  id: number
  title: string
  imageUrl: string
  shortDescription: string
  steps: string[]
  ingredients: string[]
  preparationTime: string
}

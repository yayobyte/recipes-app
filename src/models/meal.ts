export type Id = string
export type CategoryIds = string[]
export type Title = string
export type Affordability = string
export type Complexity = string
export type ImageUrl = string
export type Duration = number
export type Ingredients = string[]
export type Steps = string[]
export type IsGlutenFree = boolean
export type IsVegan = boolean
export type IsVegetarian = boolean
export type IsLactoseFree = boolean

export class Meal {
  id: Id
  categoryIds: CategoryIds
  title: Title
  imageUrl: ImageUrl
  ingredients: Ingredients
  steps: Steps
  duration: Duration
  complexity: Complexity
  affordability: Affordability
  isGlutenFree: IsGlutenFree
  isVegan: IsVegan
  isVegetarian: IsVegetarian
  isLactoseFree: IsLactoseFree

  constructor(
    id: Id,
    categoryIds: CategoryIds,
    title: Title,
    affordability: Affordability,
    complexity: Complexity,
    imageUrl: ImageUrl,
    duration: Duration,
    ingredients: Ingredients,
    steps: Steps,
    isGlutenFree: IsGlutenFree,
    isVegan: IsVegan,
    isVegetarian: IsVegetarian,
    isLactoseFree: IsLactoseFree,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

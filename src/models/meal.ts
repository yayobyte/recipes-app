type Id = string
type CategoryIds = string[]
type Title = string
type Affordability = string
type Complexity = string
type ImageUrl = string
type Duration = number
type Ingredients = string[]
type Steps = string[]
type IsGlutenFree = boolean
type IsVegan = boolean
type IsVegetarian = boolean
type IsLactoseFree = boolean

export class Meal {
  id: Id
  categoryIds: CategoryIds
  title: Title
  imageUrl: Affordability
  ingredients: Complexity
  steps: ImageUrl
  duration: Duration
  complexity: Ingredients
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

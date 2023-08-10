As a user,
So I can choose my meal category,
I want to see all categories.

As a user,
So I can choose a particular meal from chosen category,
I want to see all meals in the category.

As a user,
So I don't have to choose what to eat,
I want to generate a random meal.

As a user,
So I can know how to make the chosen meal,
I want see the recipe of this meal.

As a user,
So I can have favourite meals,
I want to add a meal to favourites.

As a user,
So I can change my favourites,
I want to remove a meal from favourites.


Method - scenario: 
getRandomMeal() - when user wants to generate a random meal
fetchAllCategories() - when user wants to see all categories
fetchMealsByCatrgory(category: string) - when user wants to see all meals in the category
fetchMeal(id: string) - when user wants to see the recipe of the meal
addToFavourites(meal: Meal) - when user wants to add a meal to the favourites
getFavourites() - when user wants to see the favourites
removeFromFavourites(meal: Meal) - when user wants to remove a meal from the favourites
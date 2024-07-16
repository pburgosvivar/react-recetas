import axios from 'axios';

const getMealsByCategory = async (categoryName) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    const meals = response.data.meals || [];  // Asegurarse de retornar un array vacío si no hay resultados

    // Obtener detalles completos de cada comida
    const detailedMealsPromises = meals.map(async (meal) => {
      const mealDetails = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
      return mealDetails.data.meals[0];
    });

    const detailedMeals = await Promise.all(detailedMealsPromises);
    return detailedMeals;
  } catch (error) {
    console.error("Error al obtener las comidas por categoría:", error);
    return [];
  }
};

export default getMealsByCategory;

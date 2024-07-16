import axios from 'axios';

const getMealsByName = async (mealName) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    return response.data.meals || [];  // Asegurarse de retornar un array vacío si no hay resultados
  } catch (error) {
    console.error("Error al obtener las comidas:", error);
    return [];
  }
};

export default getMealsByName;

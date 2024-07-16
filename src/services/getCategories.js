import axios from 'axios';

const getCategories = async () => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    return response.data.categories;
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
  }
};

export default getCategories;

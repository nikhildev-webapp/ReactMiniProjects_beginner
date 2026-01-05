import React from 'react';

const RecipeViewr = () => {
  const recipes = [
    { id: 1, name: "Masala Dosa", time: "25 mins", ingredients: ["Rice", "Potato", "Oil", "Daal"] },
    { id: 2, name: "Paneer Butter Masala", time: "30 mins", ingredients: ["Paneer", "Butter", "Cream", "Spices"] },
    { id: 3, name: "Pasta Alfredo", time: "20 mins", ingredients: ["Pasta", "Cream", "Cheese", "Garlic"] },
    { id: 4, name: "Chow Mein", time: "15 mins", ingredients: ["Noodles", "Veggies", "Sauce"] },
    { id: 5, name: "Butter Chicken", time: "40 mins", ingredients: ["Chicken", "Butter", "Tomato Puree", "Cream", "Spices"] },
    { id: 6, name: "Chana Masala", time: "25 mins", ingredients: ["Chickpeas", "Onion", "Tomato", "Ginger", "Garlic"] },
    { id: 7, name: "Palak Paneer", time: "30 mins", ingredients: ["Spinach", "Paneer", "Cream", "Cumin", "Garlic"] },
    { id: 8, name: "Aloo Gobi", time: "20 mins", ingredients: ["Potato", "Cauliflower", "Turmeric", "Ginger", "Coriander"] },
    { id: 9, name: "Dal Tadka", time: "25 mins", ingredients: ["Lentils", "Ghee", "Cumin", "Garlic", "Red Chili"] },
    { id: 10, name: "Vegetable Biryani", time: "45 mins", ingredients: ["Basmati Rice", "Mixed Veggies", "Yogurt", "Saffron", "Spices"] },
    { id: 11, name: "Tandoori Chicken", time: "50 mins", ingredients: ["Chicken", "Yogurt", "Lemon Juice", "Tandoori Masala"] },
    { id: 12, name: "Chicken Tikka Masala", time: "35 mins", ingredients: ["Chicken Tikka", "Tomato Gravy", "Cream", "Bell Peppers"] },
    { id: 13, name: "Prawn Curry", time: "20 mins", ingredients: ["Prawns", "Coconut Milk", "Tamarind", "Mustard Seeds"] },
    { id: 14, name: "Mutton Rogan Josh", time: "60 mins", ingredients: ["Lamb", "Kashmiri Chili", "Yogurt", "Fennel", "Ginger"] },
    { id: 15, name: "Fish Amritsari", time: "15 mins", ingredients: ["White Fish", "Besan (Gram Flour)", "Ajwain", "Lemon"] },
    { id: 16, name: "Margherita Pizza", time: "25 mins", ingredients: ["Pizza Dough", "Mozzarella", "Tomato Sauce", "Basil"] },
    { id: 17, name: "Chicken Stir-Fry", time: "15 mins", ingredients: ["Chicken Breast", "Broccoli", "Soy Sauce", "Ginger", "Honey"] },
    { id: 18, name: "Classic Beef Burger", time: "20 mins", ingredients: ["Beef Patty", "Burger Buns", "Lettuce", "Tomato", "Cheese"] },
    { id: 19, name: "Greek Salad", time: "10 mins", ingredients: ["Cucumber", "Feta Cheese", "Olives", "Tomato", "Olive Oil"] },
    { id: 20, name: "Ramen Soup", time: "15 mins", ingredients: ["Noodles", "Chicken Stock", "Egg", "Soy Sauce", "Scallions"] },
  ];

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Recipe Viewer</h3>
      {/* Container for the grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded shadow-sm">
            <h4 className="font-bold">Recipe Name: {recipe.name}</h4>
            <p>Time: {recipe.time}</p>
            <p className="font-semibold mt-2">Ingredients:</p>
            <ul className="list-none ml-5">
              {recipe.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeViewr;

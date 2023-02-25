import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

function App() {
  const [drinkname, setDrinkname] = useState("");
  const [glass, setGlass] = useState("");
  const [image, setImage] = useState("");
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  const [ingredient4, setIngredient4] = useState("");
  const [ingredient5, setIngredient5] = useState("");
  const [ingredient6, setIngredient6] = useState("");
  const [ingredient7, setIngredient7] = useState("");
  const [ingredient8, setIngredient8] = useState("");
  const [ingredient9, setIngredient9] = useState("");
  const [ingredient10, setIngredient10] = useState("");
  const [instructions, setInstructions] = useState("");
  const [measurement1, setMeasurement1] = useState("");
  const [measurement2, setMeasurement2] = useState("");
  const [measurement3, setMeasurement3] = useState("");
  const [measurement4, setMeasurement4] = useState("");
  const [measurement5, setMeasurement5] = useState("");
  const [measurement6, setMeasurement6] = useState("");
  const [measurement7, setMeasurement7] = useState("");
  const [measurement8, setMeasurement8] = useState("");
  const [measurement9, setMeasurement9] = useState("");
  const [measurement10, setMeasurement10] = useState("");

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        console.log(response.data.drinks[0])

        const DATA = response.data.drinks[0]

        setDrinkname(DATA.strDrink)
        setGlass(DATA.strGlass)
        setImage(DATA.strDrinkThumb)
        setIngredient1(DATA.strIngredient1)
        setIngredient2(DATA.strIngredient2)
        setIngredient3(DATA.strIngredient3)
        setIngredient4(DATA.strIngredient4)
        setIngredient5(DATA.strIngredient5)
        setIngredient6(DATA.strIngredient6)
        setIngredient7(DATA.strIngredient7)
        setIngredient8(DATA.strIngredient8)
        setIngredient9(DATA.strIngredient9)
        setIngredient10(DATA.strIngredient10)
        setInstructions(DATA.strInstructions)
        setMeasurement1(DATA.strMeasure1)
        setMeasurement2(DATA.strMeasure2)
        setMeasurement3(DATA.strMeasure3)
        setMeasurement4(DATA.strMeasure4)
        setMeasurement5(DATA.strMeasure5)
        setMeasurement6(DATA.strMeasure6)
        setMeasurement7(DATA.strMeasure7)
        setMeasurement8(DATA.strMeasure8)
        setMeasurement9(DATA.strMeasure9)
        setMeasurement10(DATA.strMeasure10)

      }).catch(error => {
        alert(error)
      })
  }, [])

  return (
    <div>
      <h1>Todays Cocktail</h1>
      <h2>{drinkname}</h2>
      <h3>Glass</h3>
      <p>{glass}</p>
      <img src={image} width="250" />
      <h3>Ingredients</h3>
      <p>{ingredient1}</p>
      <p>{ingredient2}</p>
      <p>{ingredient3}</p>
      <p>{ingredient4}</p>
      <p>{ingredient5}</p>
      <p>{ingredient6}</p>
      <p>{ingredient7}</p>
      <p>{ingredient8}</p>
      <p>{ingredient9}</p>
      <p>{ingredient10}</p>
      <h3>Instrcutions</h3>
      <p>{instructions}</p>
      <h3>Measurements</h3>
      <p>{measurement1} {ingredient1}</p>
      <p>{measurement2} {ingredient2}</p>
      <p>{measurement3} {ingredient3}</p>
      <p>{measurement4} {ingredient4}</p>
      <p>{measurement5} {ingredient5}</p>
      <p>{measurement6} {ingredient6}</p>
      <p>{measurement7} {ingredient7}</p>
      <p>{measurement8} {ingredient8}</p>
      <p>{measurement9} {ingredient9}</p>
      <p>{measurement10} {ingredient10}</p>
    </div>
  );
}

export default App;

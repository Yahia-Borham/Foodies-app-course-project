









import classes from "./MealsGride.module.css"
import MealItem from "./MealItem"

function MealsGride({ meals }) {


    return (

        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>

    )
}

export default MealsGride
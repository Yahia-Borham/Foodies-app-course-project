



import Image from "next/image"


import classes from "./page.module.css"
import { HandelGetMeal } from "@/DataBase/meals"
import { notFound } from "next/navigation"




export async function generateMetadata({ params }) {

    const { slug } = await params
    const meal = await HandelGetMeal(slug)
    if (!meal)
        notFound()
    return {
        mealTitle: meal.title,
        mealSummary: meal.summary
    }
}


async function MealDetails({ params }) {

    const { slug } = await params
    const meal = await HandelGetMeal(slug)

    if (!meal)
        notFound()
    meal.instructions = meal.instructions.replace(/\n/g, <br />)

    return (
        <>
            <header>
                <div className={classes.image}>
                    <Image src={meal.image} alt="Meal Image" fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                </div>
                <p className={classes.creator}>
                    By <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                </p>
                <p className={classes.summary}>{meal.summary}</p>
            </header>
            <main>
                <p className={classes.instructions}
                    dangerouslySetInnerHTML={{ __html: meal.instructions, }}>

                </p>
            </main>



        </>

    )
}

export default MealDetails
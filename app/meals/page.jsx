

import Link from "next/link"
import { Suspense } from "react"

import classes from "./page.module.css"
import MealsGride from "@/component/Meals/MealsGride"

import { getMealsFromFile } from "@/DataBase/meals"






const Meals = async () => {
    const meals = await getMealsFromFile()

    return <MealsGride meals={meals} />
}


async function page() {

    //const meals = await GetMeals()


    return (

        <>
            <header className={classes.header}>
                <h1>
                    precious shared meals, created{" "}
                    <span className={classes.highlight}></span>
                </h1>
                <p>
                    Choose your favourite recipe, cook it with love bitch
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your favourites
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Loading page, plz wait...</p>}>
                    <Meals />
                </Suspense>
            </main>




        </>


    )
}

export default page
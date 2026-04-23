





import fs from "node:fs"
import path from "node:path"
import xss from "xss"
import slugify from "slugify"
import sql from "better-sqlite3"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache"

const mealsFilePath = path.join(process.cwd(), "meals.json")

export const getMealsFromFile = async () => {
    try {
        const mealsData = await fs.promises.readFile(mealsFilePath, "utf-8")
        return JSON.parse(mealsData)
    } catch (error) {
        console.error("Error reading meals file:", error)
        return []
    }
}


const module = sql("meals.db")

export const GetMeals = async () => {

    await new Promise((resolve) => setTimeout(resolve, 2000))
    return module.prepare("SELECT * FROM meals").all()

}

export const HandelGetMeal = async (slug) => {
    const meals = await getMealsFromFile()
    return meals.find((meal) => meal.slug === slug)
}



export const HandleSaveFormData = async (formData) => {

    formData.slug = slugify(formData.title, { lower: true })
    formData.instructions = xss(formData.instructions)
    const extension = formData.image.name.split(".").pop()
    const fileName = `${formData.slug}.${extension}`
    const bufferedImage = await formData.image.arrayBuffer()
    await new Promise((resolve, reject) => {
        fs.writeFile(`public/images/${fileName}`, Buffer.from(bufferedImage), (error) => {
            if (error) reject(new Error("Failed to save image"))
            else resolve()
        })
    })

    formData.image = `/images/${fileName}`

    // Read current meals from file
    const currentMeals = await getMealsFromFile()

    // Create new meal object
    const newMeal = {
        id: Date.now(),
        slug: formData.slug,
        creator: formData.creator,
        creator_email: formData.creator_email,
        title: formData.title,
        instructions: formData.instructions,
        summary: formData.summary,
        image: formData.image,
    }

    // Add new meal to array
    currentMeals.push(newMeal)

    // Write updated meals to file
    await fs.promises.writeFile(mealsFilePath, JSON.stringify(currentMeals, null, 2))

    revalidatePath("/meals", "layout")
    redirect("/meals")
}


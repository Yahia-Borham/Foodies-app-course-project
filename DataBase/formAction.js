
"use server"

import { HandleSaveFormData } from "./meals"


export const HandelFormAction = async (prevState, data) => {


    const CheckFormData = (stringData) => {
        return !stringData || stringData.trim() === " "
    }

    const formData = {
        creator: data.get("name"),
        creator_email: data.get("email"),
        title: data.get("title"),
        instructions: data.get("instructions"),
        summary: data.get("summary"),
        image: data.get("image"),
    }

    if (CheckFormData(formData.creator) ||
        CheckFormData(formData.creator_email) ||
        !formData.creator_email.includes("@") ||
        CheckFormData(formData.title) ||
        CheckFormData(formData.instructions) ||
        CheckFormData(formData.summary) ||
        !formData.image ||
        formData.image.size === 0
    ) {
        return {
            message: 'Please fill in all fields correctly!',
            values: {
                title: meal.title || '',
                summary: meal.summary || '',
                instructions: meal.instructions || '',
                image: meal.image || null,
                creator: meal.creator || '',
                creator_email: meal.creator_email || '',
            }
        }


    }
    await HandleSaveFormData(formData)
}

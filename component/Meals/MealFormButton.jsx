


"use client"

import { useFormStatus } from "react-dom"






function MealFormButton() {

    const { pending } = useFormStatus()
    return (

        <button disabled={pending}>
            {pending ? "Submitting..." : 'Share meal'}
        </button>
    )
}

export default MealFormButton
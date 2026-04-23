


"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import classes from "./ImagePicker.module.css"



function ImagePicker({ label, name, defaultValue }) {

    const imageRef = useRef()
    const [previewImage, setPreviewImage] = useState()

    const HandelPickImage = () => {

        imageRef.current.click()

    }

    const HandelPreviewImage = (e) => {

        const file = e.target.files[0]
        if (!file) {
            setPreviewImage(null)
            return
        }

        const reader = new FileReader()
        reader.onload = () => {
            const preview = reader.result
            console.log(reader.result)
            setPreviewImage(preview)
        }
        reader.readAsDataURL(file)

    }


    return (

        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!previewImage && <p>you didn't pick an image</p>}
                    {previewImage && <Image
                        src={previewImage}
                        alt="Preview Image"
                        defaultValue={defaultValue}
                        fill />}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    name={name}
                    accept="image/png, image/jpeg"
                    ref={imageRef}
                    onChange={HandelPreviewImage} />
                <button
                    type="button"
                    className={classes.button}
                    onClick={HandelPickImage}>

                    Pick an Image
                </button>

            </div>

        </div>



    )
}

export default ImagePicker
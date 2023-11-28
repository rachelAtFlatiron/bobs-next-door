import React, { useState } from "react"

function NewStoreForm({ addStore }) {

    const formOutline = {
        name: '',
        image: '',
        episode: 0,
        season: 0
    }

    // view -> event -> state/re-render 
    const [form, setForm] = useState(formOutline)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //get the new store (from the form) up to App's stores state
        addStore(form)
        setForm(formOutline) //reset form
    }


    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={form.name} type="text" id="name" name="name" placeholder="Store Name"/>

            <input onChange={handleChange} value={form.image} type="text" id="image" name="image" placeholder="Image URL" />
            <input onChange={handleChange} value={form.season} type="number" id="season" name="season" placeholder="Season" step="1"/>
            <input onChange={handleChange} value={form.episode} type="number" id="episode" name="episode" placeholder="Episode" step="1"/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;
import { useState } from "react";
import BookShow from "./BookShow";

function BookCreate({ onCreate }) {

    const [ title, setTitle ] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return (
        <div>
            <BookShow showValue={handleChange} />

            <div className="book-create">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input className="input" value={title} onChange={handleChange} />
                    <button className="button">Create!</button>
                </form>
            </div>
        </div>
    )
}

export default BookCreate;

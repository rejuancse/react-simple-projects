import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState('');

    const handleDeleteClick = () => {
        return onDelete(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, newTite) => {
        setShowEdit(false);
        onEdit(id, newTite);
    }

    let content = <h3>{book.title}</h3>
    if(showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />
    }

    return (
        <div>
            <div className="book-show">
                <img alt="book show" src={`https://picsum.photos/seed/${book.id}/300/200`} />

                <div>{content}</div>
                <div className="actions">
                    <button className="edit" onClick={handleEditClick}>
                        Edit
                    </button>

                    <button className="delete" onClick={handleDeleteClick}>
                        Delete!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookShow;

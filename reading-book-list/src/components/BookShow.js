import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete }) {
    const [showEdit, setShowEdit] = useState('');

    const handleDeleteClick = () => {
        return onDelete(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    let content = <h3>{book.title}</h3>
    if(showEdit) {
        content = <BookEdit book={book} />
    }

    return (
        <div>
            <div className="book-show">
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

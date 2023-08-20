import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import SearchImages from './api';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const results = await SearchImages(term);

    setImages(results);
  }

  return <div>
    <SearchBar onSubmit={handleSubmit} />
    <ImageList images={images} />
  </div>;
}

export default App;

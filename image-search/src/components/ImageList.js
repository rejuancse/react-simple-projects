import './imageShow.css';
import ImageShow from "./ImageShow";

function ImageList({ images }) {

  const rendaredImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />
  });

  return (
    <div className="image-list">{rendaredImages}</div>
  );
}

export default ImageList;

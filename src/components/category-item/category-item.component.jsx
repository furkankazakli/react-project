import './category-item.styles.css';

const CategoryItem = ({category}) => {
  const { title,price,buton,imageUrl } = category;
  return (
    <div className='card-container'>
    <img className='img'
      src={imageUrl}
      alt="Kaşar"
    />
    <h1>{title}</h1>
    <h2>{price}</h2>
      <button class="b1"><span class="text">{buton}</span></button>
    </div>
  );
  
}

export default CategoryItem;

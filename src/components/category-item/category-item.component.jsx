import './category-item.styles.css';

const CategoryItem = ({category}) => {
    const { title,buton,imageUrl } = category;
    return (
      <div className='card-container'>
      <img className='img'
        src={imageUrl}
        alt="Kaşar"
      />
      <div>
      </div>
      <h1>{title}</h1>
        <button class="b1"><span class="text">{buton}</span></button>
      </div>
    );
    
}

export default CategoryItem;

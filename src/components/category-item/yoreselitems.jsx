import './category-item.styles.css';

const YoreselItem = ({yores}) => {
  const { title,buton,imageUrl } = yores;
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

export default YoreselItem;

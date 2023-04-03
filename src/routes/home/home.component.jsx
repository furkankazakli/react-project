import Categories from "../../components/categories/categories.component";
import {Outlet} from 'react-router-dom';

const Home = () => {
    const categories = [
        {
          "id": 1,
          "title": "Eski Kaşar",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/eski-kasar-peyniri-kars-krsmetinbey-500x500.jpg",
          "buton":"Satın al"
        },
        {
          "id": 2,
          "title": "Taze Kaşar",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/0003-500x500.jpg",
          "buton":"Tıkla Al"
        },
        {
          "id": 3,
          "title": "Gravyer",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/gravyer-peyniri-500x500.jpg",
          "buton":"Satın al"
        },
        {
          "id": 4,
          "title": "Petek Bal",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/PETEK-C%C4%B0CEK-BAL%C4%B0-KARS-C%C4%B0LD%C4%B0R-PERVAR%C4%B0-SEMD%C4%B0NL%C4%B0-500x500.jpg",
          "buton":"Hemen al"
        },
        {
          "id": 5,
          "title": "Göbek Kaşar",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/gobek-kasar-peyniri-kars-metinbey-500x500.jpg",
          "buton":"Sepete Ekle"
        }
      ]
  return (
    <div>
        <Outlet/>
        <Categories categories={categories}/>
    </div>
  );
}

export default Home;
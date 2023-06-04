import Categories from "../../components/categories/categories.component";
import {Outlet} from 'react-router-dom';

const Home = () => {
    const categories = [
        {
          "id": 1,
          "title": "Eski Kaşar",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/eski-kasar-peyniri-kars-krsmetinbey-500x500.jpg",
          "price":"300 TL",
          "buton":"Satın al"
        },
        {
          "id": 2,
          "title": "Taze Kaşar",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/0003-500x500.jpg",
          "price":"220 TL",
          "buton":"Tıkla Al"
        },
        {
          "id": 3,
          "title": "Gravyer",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/gravyer-peyniri-500x500.jpg",
          "price":"400 TL",
          "buton":"Satın al"
        },
        {
          "id": 4,
          "title": "Petek Bal",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/PETEK-C%C4%B0CEK-BAL%C4%B0-KARS-C%C4%B0LD%C4%B0R-PERVAR%C4%B0-SEMD%C4%B0NL%C4%B0-500x500.jpg",
          "price":"350 TL",
          "buton":"Hemen al"
        },
        {
          "id": 5,
          "title": "Göbek Kaşar",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/gobek-kasar-peyniri-kars-metinbey-500x500.jpg",
          "price":"180 TL",
          "buton":"Sepete Ekle"
        },
        {
          "id": 6,
          "title": "Isırgan Otlu Peynir",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/isirgan-otlu-peynir-500x500.jpg",
          "price":"150 TL",
          "buton":"Sepete Ekle"
        },
        {
          "id": 7,
          "title": "Örgü Peynir",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/emir/orgu-peynir-500x500.jpg",
          "price":"200 TL",
          "buton":"Sepete Ekle"
        },
        {
          "id": 8,
          "title": "Kars Manda Yağı",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/emir/manda-yagi-kars-krsmetinbey-500x500.jpg",
          "price":"250 TL",
          "buton":"Sepete Ekle"
        },
        {
          "id": 9,
          "title": "Malakan Peyniri",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/malakan-gobek-peyniri-500x500.jpg",
          "price":"350 TL",
          "buton":"Sepete Ekle"
        },
        {
          "id": 10,
          "title": "Keçi Koyun Peyniri",
          "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/keci-koyun-kasari-500x500.jpg",
          "price":"240 TL",
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
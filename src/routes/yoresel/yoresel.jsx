
import Yoreselin from "../../components/categories/yoresel.component";
import {Outlet} from 'react-router-dom';

const Yoresel=() =>{
  const yoresel = [
    {
      "id": 1,
      "title": "Kars Eriştesi",
      "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/KARS-ER%C4%B0STES%C4%B0-500x500.jpg",
      "price":"90 TL",
      "buton":"Satın al"
    },
    {
      "id": 2,
      "title": "Kağızman Fıstıklı Pestil",
      "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/kagizman-fistikli-pestil-kars-500x500.jpg",
      "price":"140 TL",
      "buton":"Tıkla Al"
    },
    {
      "id": 3,
      "title": "Güçlü Karışım",
      "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/URUN/guclu-karisim--500x500.jpg",
      "price":"440 TL",
      "buton":"Satın al"
    },
    {
      "id": 4,
      "title": "Cevizli Sucuk(Köme)",
      "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/cevizli-kome-sucuk-kars-500x500.jpg",
      "price":"140 TL",
      "buton":"Hemen al"
    },
    {
      "id": 5,
      "title": "Kızılcık Ekşisi",
      "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/URUN/k%C4%B1z%C4%B1lc%C4%B1k750gr%2015tl-300x300-500x500.jpg",
      "price":"240 TL",
      "buton":"Sepete Ekle"
    },
    {
      "id": 6,
      "title": "Kars Ketesi",
      "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/yeni%20urun/kete-tarifi-300x300-500x500.jpg",
      "price":"70 TL",
      "buton":"Sepete Ekle"
    },
    {
      "id": 7,
      "title": "Propolis",
      "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/ari-propolis-kars-500x500.jpg",
      "price":"540 TL",
      "buton":"Sepete Ekle"
    },
    {
      "id": 8,
      "title": "Mürdüm Eriği",
      "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/emir/mugurdum-erigi-500x500.jpg",
      "price":"140 TL",
      "buton":"Sepete Ekle"
    },
    {
      "id": 9,
      "title": "Süt Reçeli",
      "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/sut-receli-krs-500x500.jpg",
      "price":"500 TL",
      "buton":"Sepete Ekle"
    },
    {
      "id": 10,
      "title": "Kars Sarı Yağ",
      "imageUrl": "https://www.krsmetinbey.com/image/cache/catalog/aras/sari-yag-eritilmisyag-kars-trabzon-krsmetinbey-500x500.jpg",
      "price":"300 TL",
      "buton":"Sepete Ekle"
    }
  ]
  return (
    <div>
            <Outlet/>
        <Yoreselin yoresel={yoresel}/>
    </div>
  );
}

export default Yoresel;
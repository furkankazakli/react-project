import YoreselItem from "../category-item/yoreselitems"

import './categories.styles.css';

const Yoresel = ({yoresel}) => {
    return (
        <div className="categories-container">
            {yoresel.map((yores) => {
                const { id } = yores;
                return (
                    <YoreselItem key={id} yores={yores} />
                );
            }
            )}
        </div>
    );
}

export default Yoresel;
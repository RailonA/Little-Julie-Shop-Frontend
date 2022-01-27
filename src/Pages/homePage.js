/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import requestItemInfo, { requestCategoryInfo } from '../Helpers/requests';
import ItemList from '../Containers/itemList';
// import LeftColumn from '../Containers/leftColumn';
import '../Assets/styles/navBar.css';
import '../Assets/styles/leftColumn.css';

const HomePage = () => {
  const itemData = useSelector((state) => state.items);
  // const categoryData = useSelector((state) => state.category);
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [styleSheet, setStyleSheet] = useState(false);

  const dispatch = useDispatch();

  const [selectedChildCategory] = useState('');

  const filteredItems = (selectedChildCategory !== '') ? itemData.itemsCollection.filter((item) => item.categories_id === parseInt(selectedChildCategory, 10)) : itemData.itemsCollection;

  // const itemPhotoContainer = (styleSheet === false) ? ('itemPhotoContainerFemale') : ('itemPhotoContainerMale');
  // const itemCard = (styleSheet === false) ? ('itemCardFemale') : ('itemCardMale');
  // const buyButton = (styleSheet === false) ? ('buyButtonFemale') : ('buyButtonMale');

  useEffect(() => {
    requestItemInfo(dispatch);
    requestCategoryInfo(dispatch);
  }, [dispatch]);

  return (
    <div className="justify-content-center">

      <div className="d-flex justify-content-center">
        <div className="col-9 d-flex justify-content-center">
          <div className="mt-4">
            <ItemList
              key={itemData.id}
              items={filteredItems}
              // itemCard={itemCard}
              // itemPhotoContainer={itemPhotoContainer}
              // buyButton={buyButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import requestItemInfo, { requestCategoryInfo, requestShoppingCart } from '../Helpers/requests';
import ItemList from '../Containers/itemList';
import LeftColumn from '../Containers/leftColumn';
import '../Assets/styles/navBar.css';
import '../Assets/styles/leftColumn.css';

const HomePage = () => {
  let itemId;
  const itemData = useSelector((state) => state.items);
  const categoryData = useSelector((state) => state.category);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [styleSheet, setStyleSheet] = useState(false);

  const shoppingCartData = useSelector((state) => state.shoppingCart);
  const [selectedShoppingCartItem, setSelectedShoppingCartItem] = useState('');
  const userData = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();

  const addToShoppingCart = (e) => {
    itemId = e.target.value;
    setSelectedShoppingCartItem(itemId);
    requestShoppingCart(
      dispatch, userData.id, selectedShoppingCartItem, userData.token,
    );
  };

  console.log(shoppingCartData);
  const [selectedChildCategory, setSelectedChildCategory] = useState('');

  const filteredItems = (selectedChildCategory !== '') ? itemData.itemsCollection.filter((item) => item.categories_id === parseInt(selectedChildCategory, 10)) : itemData.itemsCollection;

  const menuParentButton = (styleSheet === false) ? ('menuParentButtonFemale') : ('menuParentButtonMale');
  const menuChildButton = (styleSheet === false) ? ('menuChildButtonFemale') : ('menuChildButtonMale');
  const leftColumnWrapper = (styleSheet === false) ? ('leftColumnWrapperFemale') : ('leftColumnWrapperMale');
  const itemPhotoContainer = (styleSheet === false) ? ('itemPhotoContainerFemale') : ('itemPhotoContainerMale');
  const itemCard = (styleSheet === false) ? ('itemCardFemale') : ('itemCardMale');
  const buyButton = (styleSheet === false) ? ('buyButtonFemale') : ('buyButtonMale');

  useEffect(() => {
    requestItemInfo(dispatch);
    requestCategoryInfo(dispatch);
  }, [dispatch]);

  return (
    <div className="justify-content-center">

      <div className="d-flex justify-content-center">
        <div
          className="d-none d-sm-block col-3 m-0 p-0 pr-2"
        >
          <div
            className={leftColumnWrapper}
          >
            <LeftColumn
              key={categoryData.id}
              itemList={itemData}
              className={leftColumnWrapper}
              categoryInfo={categoryData.categoryCollection}
              setSelectedChildCategory={setSelectedChildCategory}
              selectedChildCategory={selectedChildCategory}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
              setStyleSheet={setStyleSheet}
              menuParentButton={menuParentButton}
              menuChildButton={menuChildButton}
            />
          </div>
        </div>
        <div className="col-9 d-flex justify-content-center">
          <div className="mt-4">
            <ItemList
              key={itemData.id}
              items={filteredItems}
              itemCard={itemCard}
              itemPhotoContainer={itemPhotoContainer}
              buyButton={buyButton}
              addToShoppingCart={addToShoppingCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

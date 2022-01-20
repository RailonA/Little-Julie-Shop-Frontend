/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import requestItemInfo, { requestCategoryInfo } from '../Helpers/requests';
import ItemList from '../Containers/itemList';
import LeftColumn from '../Containers/leftColumn';
import Nav from '../Containers/navBar';
import '../Assets/styles/navBar.css';
import '../Assets/styles/leftColumn.css';

const HomePage = () => {
  const itemData = useSelector((state) => state.items);
  const categoryData = useSelector((state) => state.category);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [styleSheet, setStyleSheet] = useState(false);

  const [selectedChildCategory, setSelectedChildCategory] = useState('');

  const dispatch = useDispatch();

  const filteredItems = (selectedChildCategory !== '') ? itemData.itemsCollection.filter((item) => item.categories_id === parseInt(selectedChildCategory, 10)) : itemData.itemsCollection;

  const menuParentButton = (styleSheet === false) ? ('menuParentButtonFemale') : ('menuParentButtonMale');
  const menuChildButton = (styleSheet === false) ? ('menuChildButtonFemale') : ('menuChildButtonMale');
  const leftColumnWrapper = (styleSheet === false) ? ('leftColumnWrapperFemale') : ('leftColumnWrapperMale');
  const navBarWrapperDiv = (styleSheet === false) ? ('navBarWrapperFemale') : ('navBarWrapperMale');
  const pageTitle = (styleSheet === false) ? ('pageTitleFemale') : ('pageTitleMale');
  const navBarBtnColor = (styleSheet === false) ? ('navBarBtnColorFemale') : ('navBarBtnColorMale');
  const itemPhotoContainer = (styleSheet === false) ? ('itemPhotoContainerFemale') : ('itemPhotoContainerMale');
  const itemCard = (styleSheet === false) ? ('itemCardFemale') : ('itemCardMale');
  const buyButton = (styleSheet === false) ? ('buyButtonFemale') : ('buyButtonMale');

  useEffect(() => {
    requestItemInfo(dispatch);
    requestCategoryInfo(dispatch);
  }, [dispatch]);

  return (
    <div className="justify-content-center">
      <div>
        <Nav
          key={categoryData.id}
          itemList={itemData}
          categoryInfo={categoryData.categoryCollection}
          setSelectedChildCategory={setSelectedChildCategory}
          selectedChildCategory={selectedChildCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          setStyleSheet={setStyleSheet}
          menuParentButton={menuParentButton}
          menuChildButton={menuChildButton}
          navBarWrapperDiv={navBarWrapperDiv}
          pageTitle={pageTitle}
          navBarBtnColor={navBarBtnColor}
        />
      </div>
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
              buyButton={buyButton}
              itemPhotoContainer={itemPhotoContainer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

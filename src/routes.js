import React, { useEffect, useState } from 'react';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import requestItemInfo, { requestCategoryInfo } from './Helpers/requests';
import HomePage from './Pages/homePage';
import UserPage from './Pages/userPage';
import Page404 from './Pages/Page404';
import Nav from './Containers/navBar';
import LeftColumn from './Containers/leftColumn';

import './Assets/styles/navBar.css';
import './Assets/styles/leftColumn.css';

// require('./Assets/styles/homePage.css');

const Routes = () => {
  const itemData = useSelector((state) => state.items);
  const categoryData = useSelector((state) => state.category);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedChildCategory, setSelectedChildCategory] = useState('');
  const [styleSheet, setStyleSheet] = useState(false);

  const navBarWrapperDiv = (styleSheet === false) ? ('navBarWrapperFemale') : ('navBarWrapperMale');
  const pageTitle = (styleSheet === false) ? ('pageTitleFemale') : ('pageTitleMale');
  const navBarBtnColor = (styleSheet === false) ? ('navBarBtnColorFemale') : ('navBarBtnColorMale');
  const menuParentButton = (styleSheet === false) ? ('menuParentButtonFemale') : ('menuParentButtonMale');
  const menuChildButton = (styleSheet === false) ? ('menuChildButtonFemale') : ('menuChildButtonMale');

  const leftColumnWrapper = (styleSheet === false) ? ('leftColumnWrapperFemale') : ('leftColumnWrapperMale');

  const itemPhotoContainer = (styleSheet === false) ? ('itemPhotoContainerFemale') : ('itemPhotoContainerMale');
  const itemCard = (styleSheet === false) ? ('itemCardFemale') : ('itemCardMale');
  const buyButton = (styleSheet === false) ? ('buyButtonFemale') : ('buyButtonMale');
  const filteredItems = (selectedChildCategory !== '') ? itemData.itemsCollection.filter((item) => item.categories_id === parseInt(selectedChildCategory, 10)) : itemData.itemsCollection;

  const dispatch = useDispatch();

  useEffect(() => {
    requestItemInfo(dispatch);
    requestCategoryInfo(dispatch);
  }, [dispatch]);

  return (
    <BrowserRouter>
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
          <div className="d-none d-sm-block col-3 m-0 p-0 pr-2">
            <div className={leftColumnWrapper}>
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
            <Switch className="mt-4">
              <Route
                key={categoryData.id}
                path="/"
                component={HomePage}
                exact
                itemList={itemData}
                filteredItems={filteredItems}
                itemPhotoContainer={itemPhotoContainer}
                itemCard={itemCard}
                buyButton={buyButton}
              />
              <Route path="/user/:id" component={UserPage} exact />
              <Route path="/Page404" component={Page404} exact />
              <Redirect to="/Page404" />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routes;

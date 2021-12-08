/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import requestItemInfo, { requestCategoryInfo } from '../Helpers/requests';
import ItemList from '../Containers/itemList';
import LeftColumn from '../Containers/leftColumn';
import Nav from '../Containers/navBar';
import '../Assets/styles/navBar.css';

const HomePage = () => {
  const itemData = useSelector((state) => state.items);
  const categoryData = useSelector((state) => state.category);

  const [selectedChildCategory, setSelectedChildCategory] = useState('');

  const dispatch = useDispatch();

  const filteredItems = (selectedChildCategory !== '') ? itemData.itemsCollection.filter((item) => item.category_id === parseInt(selectedChildCategory, 10)) : itemData.itemsCollection;

  useEffect(() => {
    requestItemInfo(dispatch);
    requestCategoryInfo(dispatch);
  }, [dispatch]);

  return (
    <div className=" container-fluid justify-content-center">
      <Nav
        key={categoryData.id}
        itemList={itemData}
        categoryInfo={categoryData.categoryCollection}
        setSelectedChildCategory={setSelectedChildCategory}
        selectedChildCategory={selectedChildCategory}

      />
      <div className="d-flex justify-content-center">
        <div className="d-none d-sm-block col-3">
          <LeftColumn
            key={categoryData.id}
            categoryInfo={categoryData.categoryCollection}
            itemList={itemData}
            setSelectedChildCategory={setSelectedChildCategory}
            selectedChildCategory={selectedChildCategory}
          />
        </div>
        <div className="col-9 d-flex justify-content-center">
          <div>
            <ItemList
              key={itemData.id}
              items={filteredItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

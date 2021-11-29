/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import requestItemInfo, { requestCategoryInfo } from '../Helpers/requests';
import ItemList from '../Containers/itemList';
import LeftColumn from '../Containers/leftColumn';

// import '../Assets/styles/homePage.css';

const HomePage = () => {
  const itemData = useSelector((state) => state.items);
  const categoryData = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    requestItemInfo(dispatch);
    requestCategoryInfo(dispatch);
  }, [dispatch]);

  return (
    <div className="d-flex container-fluid justify-content-center">
      <div className="d-none d-sm-block col-3">
        <LeftColumn
          key={categoryData.id}
          categoryInfo={categoryData.categoryCollection}
        />
      </div>
      <div className="col-9 justify-content-center">
        <div>
          <ItemList
            key={itemData.id}
            items={itemData.itemsCollection}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

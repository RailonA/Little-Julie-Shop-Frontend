/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import requestItemInfo, { requestCategoryInfo } from '../Helpers/requests';
import ItemList from '../Containers/itemList';
// import '../Assets/styles/homePage.css';

const HomePage = () => {
  const ItemData = useSelector((state) => state.items);
  const CategoryData = useSelector((state) => state.category);

  console.log(ItemData);
  console.log(CategoryData);

  const dispatch = useDispatch();

  useEffect(() => {
    requestItemInfo(dispatch);
    requestCategoryInfo(dispatch);
  }, [dispatch]);

  return (
    <div className="d-flex">
      <div>
        <h1>LEFT COLUMN</h1>
      </div>
      <div className="col-12 justify-content-center">
        <h2 className=" ">What we do? </h2>
        <div className="col-12 d-flex">
          <ItemList
            key={ItemData.id}
            items={ItemData.itemsCollection}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

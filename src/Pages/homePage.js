/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import requestItemInfo from '../Helpers/requests';
import ItemList from '../Containers/itemList';
import '../Assets/styles/homePage.css';

const HomePage = () => {
  const ItemData = useSelector((state) => state.items);
  console.log(ItemData);

  const dispatch = useDispatch();

  useEffect(() => {
    requestItemInfo(dispatch);
  }, [dispatch]);

  return (
    <div className="col-12 justify-content-center">
      <h2 className="mainPageTitles mt-5 mb-5 text-center">What we do? </h2>
      <ItemList
        key={ItemData.id}
        items={ItemData.itemsCollection}
      />
    </div>
  );
};

export default HomePage;

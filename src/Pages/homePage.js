/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import requestItemInfo from '../Helpers/requests';
import ItemList from '../Containers/itemList';
// import '../Assets/styles/homePage.css';

const HomePage = () => {
  const ItemData = useSelector((state) => state.items);
  // console.log(ItemData);

  const dispatch = useDispatch();

  useEffect(() => {
    requestItemInfo(dispatch);
  }, [dispatch]);

  return (
    <div className="col-12 justify-content-center">
      <h2 className=" ">What we do? </h2>
      <div className="col-12 d-flex">
        <ItemList
          key={ItemData.id}
          items={ItemData.itemsCollection}
        />
      </div>
    </div>
  );
};

export default HomePage;

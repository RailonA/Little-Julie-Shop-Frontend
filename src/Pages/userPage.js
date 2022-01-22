/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import requestItemInfo, { requestCategoryInfo } from '../Helpers/requests';
// import ItemList from '../Containers/itemList';
import '../Assets/styles/navBar.css';
import '../Assets/styles/leftColumn.css';

const UserPage = () => {
  const shoppingCartData = useSelector((state) => state.shoppingCart);
  console.log(shoppingCartData);

  const dispatch = useDispatch();

  useEffect(() => {
    requestItemInfo(dispatch);
    requestCategoryInfo(dispatch);
  }, [dispatch]);

  return (
    <div className="col-9 d-flex justify-content-center">
      <div className="mt-4">
        <h1>TEST</h1>
      </div>
    </div>
  );
};

export default UserPage;

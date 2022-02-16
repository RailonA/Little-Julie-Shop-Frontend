/* eslint-disable max-len */
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import requestItemInfo, { requestShoppingCartInfo } from '../Helpers/requests';
import '../Assets/styles/navBar.css';
import '../Assets/styles/leftColumn.css';

const UserPage = () => {
  // const shoppingCartData = useSelector((state) => state.shoppingCart.shoppingCartCollection);

  // console.log(shoppingCartData);

  const dispatch = useDispatch();

  useEffect(() => {
    requestItemInfo(dispatch);
    requestShoppingCartInfo(dispatch);
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

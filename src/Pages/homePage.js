/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import requestItemInfo, { requestCategoryInfo } from '../Helpers/requests';
import '../Assets/styles/navBar.css';
import '../Assets/styles/leftColumn.css';

const HomePage = ({
  itemPhotoContainer, itemCard,
}) => {
  const [selectedChildCategory] = useState('');
  const itemData = useSelector((state) => state.items);

  const filteredItems = (selectedChildCategory !== '') ? itemData.itemsCollection.filter((item) => item.categories_id === parseInt(selectedChildCategory, 10)) : itemData.itemsCollection;
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'caged-trees',
      // cloudName: 'lil-julie-shop',
    },
    url: {
      secure: true, // force https, set to false to force http
    },
  });

  const getImage = (blobKey) => cld.image(blobKey).toURL();

  const dispatch = useDispatch();

  useEffect(() => {
    requestItemInfo(dispatch);
    requestCategoryInfo(dispatch);
  }, [dispatch]);

  return (
    <div className="d-flex row justify-content-around">
      {
        filteredItems.map((items) => (
          <div key={items.id} className="d-flex col-sm-4 m-4">
            <div className={itemCard}>
              <div className="p-4">
                <div className=" d-flex justify-content-center mb-3">
                  <div className="p-1 d-flex justify-content-center align-items-center ">
                    <div className={itemPhotoContainer}>
                      <img className="itemPhoto d-flex" src={getImage(items.itemPhoto.blob.key)} alt=" " />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column p-2">
                  <div className="d-flex">
                    <p className="mr-2">Item: </p>
                    <p className=" ">{ items.itemName }</p>
                  </div>
                  <div className="d-flex">
                    <p className="mr-2">Description: </p>
                    <p className=" ">{ items.itemDescription }</p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <p className="mr-2 font-weight-bold">Price: $</p>
                    <p className=" ">{ items.itemPrice }</p>
                  </div>
                  <div className="d-flex flex-row-reverse">
                    {/* <Button
                      type="button"
                      name="buy"
                      className={buyButton}
                      onChange={(e) => addToShoppingCart(e)}
                    >
                      Buy
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

HomePage.propTypes = {
  // itemData: PropTypes.func.isRequired,
  // filteredItems: PropTypes.func.isRequired,
  itemPhotoContainer: PropTypes.func.isRequired,
  itemCard: PropTypes.func.isRequired,
  // buyButton: PropTypes.func.isRequired,
  // setStyleSheet: PropTypes.func.isRequired,
};

export default HomePage;

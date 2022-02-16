import PropTypes from 'prop-types';
import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import '../Assets/styles/itemList.css';

const ItemList = ({
  items, itemPhotoContainer, itemCard, buyButton, selectedChildCategory, addToShoppingCart,
}) => {
  const { id } = useParams();

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

  return (
    <div className="d-flex row justify-content-around">
      {
        items.map((items) => {
          if (selectedChildCategory === (parseInt(id, 10))) {
            return (

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
                        <Button
                          key={items.id}
                          type="submit"
                          name="buy"
                          className={buyButton}
                          onClick={(e) => addToShoppingCart(e, items)}
                        >
                          Buy
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })
      }
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
  itemPhotoContainer: PropTypes.func.isRequired,
  itemCard: PropTypes.func.isRequired,
  buyButton: PropTypes.func.isRequired,
  selectedChildCategory: PropTypes.func.isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
};

export default ItemList;

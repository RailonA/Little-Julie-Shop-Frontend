import PropTypes from 'prop-types';
import { Cloudinary } from '@cloudinary/url-gen';
import '../Assets/styles/itemList.css';

const ItemList = ({ items }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'lil-julie-shop',
    },
    url: {
      secure: true, // force https, set to false to force http
    },
  });

  const getImage = (blobKey) => cld.image(blobKey).toURL();

  return (
    <div className=" container-fluid d-flex row justify-content-around">
      {
        items.map((items) => (
          <div key={items.id} className="d-flex col-sm-5 m-4 itemCard ">
            <div className="p-4">
              <div className=" d-flex justify-content-center mb-3">
                <div className="p-4 itemPhotoContainer d-flex justify-content-center align-items-center col-5">
                  <img className="itemPhoto d-flex" src={getImage(items.itemPhoto.blob.key)} alt=" " />
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
                  <p className="mr-2">Price: $</p>
                  <p className=" ">{ items.itemPrice }</p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default ItemList;

import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Cloudinary } from '@cloudinary/url-gen';
// import { Image } from 'cloudinary-react';

// import { AdvancedImage } from '@cloudinary/react';
// active_storage.key
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
    <div className="container-fluid flex-column justify-content-center">
      {
        items.map((items) => (
          <Card
            key={items.id}
          >
            <table className="  m-3 col-10">
              <tbody className=" col-12">
                <tr className=" m-3 ">
                  <div className="m-3 col-12 flex-container justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                      <div className="col-12 d-flex justify-content-center">
                        <p className=" col-8  d-flex justify-content-center serviceCategoryTitle p-2">{ items.id }</p>
                        <p className=" col-8  d-flex justify-content-center serviceCategoryTitle p-2">{ items.itemName }</p>
                        <p className=" col-8  d-flex justify-content-center serviceCategoryTitle p-2">{ items.itemDescription }</p>
                        <p className=" col-8  d-flex justify-content-center serviceCategoryTitle p-2">{ items.itemPrice }</p>
                        <img src={getImage(items.itemPhoto.blob.key)} alt=" " />
                      </div>
                    </div>
                  </div>
                </tr>
              </tbody>
              <hr className=" col-12 " />
            </table>
          </Card>
        ))
      }
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default ItemList;

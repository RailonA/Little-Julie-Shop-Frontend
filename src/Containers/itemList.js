import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ItemList = ({ items }) => (
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
                    <p className=" col-8  d-flex justify-content-center serviceCategoryTitle p-2">{ items.id }</p>
                    <p className=" col-8  d-flex justify-content-center serviceCategoryTitle p-2">{ items.itemName }</p>
                    <p className=" col-8  d-flex justify-content-center serviceCategoryTitle p-2">{ items.itemDescription }</p>
                    <p className=" col-8  d-flex justify-content-center serviceCategoryTitle p-2">{ items.itemPrice }</p>

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

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default ItemList;

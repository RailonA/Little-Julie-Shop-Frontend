import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ItemList from '../Containers/itemList';

const ChildPage = ({ selectedChildGroup }) => {
  const itemData = useSelector((state) => state.items);

  console.log(selectedChildGroup);

  return (
    <div>
      <p>TESTING</p>
      <ItemList
        key={itemData.id}
        items={itemData.itemsCollection}
      />
      <p>{selectedChildGroup}</p>

    </div>
  );
};

ChildPage.propTypes = {
  selectedChildGroup: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default ChildPage;

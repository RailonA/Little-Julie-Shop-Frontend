import PropTypes from 'prop-types';
import React, { useState } from 'react';

import '../Assets/styles/itemList.css';
import '../Assets/styles/leftColumn.css';

const LeftColumn = ({ categoryInfo, setSelectedChildCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredParentCategory = categoryInfo.filter((category) => category.ancestry === null);

  const handleParentChange = (e, parent) => {
    setSelectedCategory(parent.id);
  };

  const handleChildChange = (e, children) => {
    setSelectedChildCategory(children.id);
  };

  const filteredChildrenCategory = categoryInfo.filter(
    (category) => parseInt(category.ancestry, 10) === selectedCategory,
  );

  return (
    <div>
      <div
        className="mt-5"
      >
        {
            filteredParentCategory.map((parent) => (
              <div key="parent.id">
                <button
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                  key={parent.id}
                  className="menuParentButton d-flex "
                  onClick={(e) => handleParentChange(e, parent)}
                >
                  {parent.name}
                </button>
                {
                selectedCategory === parent.id && (
                <ul className="menuChildButton ">
                    {
                    filteredChildrenCategory.map((children) => (
                      <button
                        type="button"
                        className="d-flex list-group-item "
                        key={children.id}
                        selectedChild={children.id}
                        onClick={(e) => handleChildChange(e, children)}
                      >
                        {children.name}
                      </button>
                    ))
                  }
                </ul>
                )
              }
              </div>
            ))
    }
      </div>
    </div>
  );
};

LeftColumn.propTypes = {
  categoryInfo: PropTypes.arrayOf(PropTypes.array).isRequired,
  setSelectedChildCategory: PropTypes.func.isRequired,
};

export default LeftColumn;

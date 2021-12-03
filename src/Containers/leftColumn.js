// import { parents } from 'dom-helpers';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import { Menu } from 'antd';

// import 'antd/dist/antd.css';
import '../Assets/styles/itemList.css';

// const { SubMenu } = Menu;

const LeftColumn = ({ categoryInfo }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredParentCategory = categoryInfo.filter((category) => category.ancestry === null);

  const handleParentChange = (e, parent) => {
    setSelectedCategory(parent.id);
  };

  const filteredChildrenCategory = categoryInfo.filter(
    (category) => parseInt(category.ancestry, 10) === selectedCategory,
  );

  console.log(selectedCategory);

  return (
    <div>
      <div>
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
                      <li
                        className="d-flex list-group-item"
                        key={children.id}
                        href="/"
                      >
                        {children.name}
                      </li>
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
};

export default LeftColumn;

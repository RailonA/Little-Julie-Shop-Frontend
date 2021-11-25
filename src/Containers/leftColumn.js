// import { parents } from 'dom-helpers';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Menu } from 'antd';

import 'antd/dist/antd.css';
import '../Assets/styles/itemList.css';

const { SubMenu } = Menu;

const LeftColumn = ({ categoryInfo }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredParentCategory = categoryInfo.filter((category) => category.ancestry === null);
  // const [selectedChildrenCategory, setSelectedChildrenCategory] = useState([]);

  const handleParentChange = (e, parent) => {
    setSelectedCategory(parent.id);
  };

  const filteredChildrenCategory = categoryInfo.filter(
    (category) => parseInt(category.ancestry, 10) === selectedCategory,
  );

  // Returns Array of Parents
  console.log(filteredParentCategory);
  // Returns Array of Children after parent Id has been selected
  console.log(filteredChildrenCategory);
  console.log(selectedCategory);

  return (
    <div>
      <div>
        {
          filteredParentCategory.map((parent) => (
            <Menu
              key={parent.id}
              style={{ width: 256 }}
              mode="inline"
              onOpenChange={(e) => handleParentChange(e, parent)}
              onClick={(e) => handleParentChange(e, parent)}
            >
              <SubMenu
                title={parent.name}
                key={parent.id}
                selectable="true"
                onOpenChange={(e) => handleParentChange(e, parent)}
                onClick={(e) => handleParentChange(e, parent)}

              >
                {
                  filteredChildrenCategory.map((children) => (
                    <Menu.Item
                      key={children.id}
                    >
                      {children.name}
                    </Menu.Item>
                  ))
                }
              </SubMenu>
            </Menu>
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

/* <div>
{
filteredChildrenCategory.map((category) => (
  <Button
    className="d-flex mt-4"
    key={category.id}
    onClick={(e) => handleParentChange(e, category)}
  >
    {category.name}
  </Button>
))
}
</div> */

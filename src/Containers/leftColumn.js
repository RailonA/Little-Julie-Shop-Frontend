// import { parents } from 'dom-helpers';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Menu } from 'antd';

import 'antd/dist/antd.css';
import '../Assets/styles/itemList.css';

const { SubMenu } = Menu;

const LeftColumn = ({ categoryInfo }) => {
  // Returns selcted Index of Parent
  const [selectedCategory, setSelectedCategory] = useState('');
  const filteredParentCategory = categoryInfo.filter((category) => category.ancestry === null);
  const handleParentChange = (e, parent) => {
    setSelectedCategory(parent.id);
  };
  const filteredChildrenCategory = categoryInfo.filter(
    (category) => parseInt(category.ancestry, 10) === selectedCategory,
  );

  return (
    <div>
      <div>
        {
          filteredParentCategory.map((parent) => (
            <Menu
              key={parent.id}
              style={{ width: 180 }}
              mode="inline"
              onOpenChange={(e) => handleParentChange(e, parent)}
            >
              <SubMenu
                title={parent.name}
                key={parent.id}
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

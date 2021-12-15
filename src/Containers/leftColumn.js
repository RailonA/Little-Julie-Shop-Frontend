import PropTypes from 'prop-types';
import React from 'react';
import '../Assets/styles/itemList.css';
import '../Assets/styles/leftColumn.css';

const LeftColumn = ({
  categoryInfo,
  setSelectedChildCategory,
  setSelectedCategory,
  selectedCategory,
  setStyleSheet,
  menuParentButton,
  menuChildButton,
}) => {
  const filteredParentCategory = categoryInfo.filter((category) => category.ancestry === null);

  const handleChildChange = (e, children) => {
    setSelectedChildCategory(children.id);
  };

  const handleParentChange = (e, parent) => {
    setSelectedCategory(parent.id);
    if (selectedCategory === 1 || selectedCategory === 3) {
      setStyleSheet(false);
    } else if (selectedCategory === 2 || selectedCategory === 4) {
      setStyleSheet(true);
    }
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
              <div
                key="parent.id"
              >
                <button
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                  key={parent.id}
                  className={menuParentButton}
                  onClick={(e) => handleParentChange(e, parent)}
                >
                  {parent.name}
                </button>
                {
                selectedCategory === parent.id && (
                <ul className="d-flex flex-column">
                    {
                    filteredChildrenCategory.map((children) => (
                      <button
                        type="button"
                        className={menuChildButton}
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
  setSelectedCategory: PropTypes.func.isRequired,
  setSelectedChildCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.func.isRequired,
  setStyleSheet: PropTypes.func.isRequired,
  menuParentButton: PropTypes.func.isRequired,
  menuChildButton: PropTypes.func.isRequired,
};

export default LeftColumn;

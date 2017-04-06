import React, {PropTypes} from 'react';

const Item = ({Item}) => {
  return (
    <div>
      {Item.lastname}, {Item.firstname}
    </div>
  );
};

Item.propTypes = {
  Item: PropTypes.object.isRequired
};

export default Item;

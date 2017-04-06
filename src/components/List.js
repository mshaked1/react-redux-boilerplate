import React, {PropTypes} from 'react';
import Item from './Item';

const List = ({list}) => {
  return (
    <div>
      {list.map((item) => 
        <Item key={item.id} item={item} />  
      )}
    </div>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired
};

export default List;

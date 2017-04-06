import React, {PropTypes} from 'react';
import Item from './Item';

const List = ({list, isFetching}) => {
  return (
    <div>
      {
        isFetching && <p>Loading...</p>
      }
      {
        list ? (
          list.map((item) => 
            <Item key={item.id} item={item} />
          )
        ) : null
      }
    </div>
  );
};

List.propTypes = {
  list: PropTypes.array,
  isFetching: PropTypes.bool
};

export default List;

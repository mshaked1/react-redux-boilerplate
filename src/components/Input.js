import React, {PropTypes, Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.onAddCityClick = this.onAddCity.bind(this);
  }

  onAddCityClick() {
    const inputElement = document.getElementById('input');

    this.props.fetchData({
      name: inputElement.value,
    });

    inputElement.value = "";
    inputElement.focus();
  }

  componentDidMount() {
    document.getElementById('input').focus();
  }

  render() {
    return (
      <div>
        <input id="input" type="text" placeholder="Input Value" />
        <button onClick={this.onAddCityClick}>Add</button>
      </div>
    );
  }
}

Input.propTypes = {
  fetchData: PropTypes.func.isRequired
};

export default Input;

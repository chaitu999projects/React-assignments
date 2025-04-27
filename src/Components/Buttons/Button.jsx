import React, { Component } from 'react';

class ColorToggleButton extends Component {
  constructor(props) {
    super(props);
    
    // Initialize state
    this.state = {
      isPrimaryColor: true
    };
    
    // Define colors
    this.primaryColor = '#3498db';   // Blue
    this.secondaryColor = '#e74c3c'; // Red
    
    // Bind the click handler to the class instance
    this.handleClick = this.handleClick.bind(this);
  }
  
  // Method to handle button click
  handleClick() {
    this.setState(prevState => ({
      isPrimaryColor: !prevState.isPrimaryColor
    }));
  }
  
  render() {
    // Determine the current background color
    const buttonStyle = {
      backgroundColor: this.state.isPrimaryColor ? this.primaryColor : this.secondaryColor,
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    };
    
    return (
      <div className='flex justify-center items-center w-full h-[100vh] my-10'>
        <button 
        style={buttonStyle}
        onClick={this.handleClick}
      >
        {this.state.isPrimaryColor ? 'Primary Color' : 'Secondary Color'}
      </button>
      </div>
    );
  }
}

export default ColorToggleButton;
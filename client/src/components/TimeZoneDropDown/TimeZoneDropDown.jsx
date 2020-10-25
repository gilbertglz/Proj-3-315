import React from 'react';
import "./TimeZoneDropDown.module.scss";


class TimeZoneDropDown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div>
            <dropdown style = {{background:"lightgoldenrodyellow", width: "200px"}}>
            <div> 
                <button onClick={this.showDropdownMenu}> 
                    My Time Zone 
                </button>
            </div>

            {this.state.displayMenu ? (
            <ul>
            <li><a href="#GMT+0">GMT+0</a></li>
            <li><a href="#GMT+1">GMT+1</a></li>
            <li><a href="#GMT+2">GMT+2</a></li>
            <li><a href="#GMT+3">GMT+3</a></li>
            <li><a href="#GMT+4">GMT+4</a></li>
            <li><a href="#GMT+5">GMT+5</a></li>
            <li><a href="#GMT+6">GMT+6</a></li>
            </ul>
            ):
            (
            null
            )
            }
            </dropdown>
       </div>

    );
  }
}

export default TimeZoneDropDown;
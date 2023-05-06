import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>JoaoMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="Image of delicous food" />
      </div>
    </Fragment>
  )
}

export default Header;

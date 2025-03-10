import React from 'react';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import { Info, User, Heart, ShoppingCart} from "@phosphor-icons/react";

function BottomNavbar() {
  return (
    <div className='bottom-nav'>
        <ul>
            <li>
                <Link to={''}><User color='#ffeec3' weight='fill' size={25}></User></Link>
            </li>
            <li>
                <Link to={''}><Heart color='#ffeec3' weight='fill' size={25}></Heart></Link>
            </li>
            <li>
                <Link to={''}><ShoppingCart color='#ffeec3' weight='fill' size={25}></ShoppingCart></Link>
            </li>
            <li>
                <Link to={''}><Info color='#ffeec3' weight='fill' size={25}></Info></Link>
            </li>
        </ul>
    </div>
  )
}

export default BottomNavbar
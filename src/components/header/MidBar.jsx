import React from 'react'
import Container from '../common/Container'
import styles from "./Header.module.css";
// import logo from "../../assets/PujoraLogo.svg";
import logo from "../../assets/poonjora_logo.png";
import SearchBar from './SearchBar';
import Location from './Location';
import ShopingCart from './ShopingCart';
import UserAccount from './UserAccount';
import WishList from './WishList';
import { Menu } from 'lucide-react';

import { useContext } from 'react';
import CartContext from '../../context/CartContext';


function MidBar() {

    const {closeCart,setCloseCart} = useContext(CartContext)

    function OpenCart(){
        setCloseCart(false)
    }


  return (
    <div className={styles.midBar}>
        <Container>

            <div className={styles.midBarContent}>

                <div className={styles.hamBurgerIcon}>
                    <Menu size={28}  color="#f7f3ee" ></Menu>
                </div>

                <div className={styles.logoWrap}>
                    <img src={logo}></img>
                </div>

                <div className={styles.searchBarMain}>
                    <SearchBar></SearchBar>
                  
                </div>

                <div className={styles.midBarNav}>

                    <Location ></Location>
                    <WishList className={styles.midBarNavItems}></WishList>
                    <div  onClick={OpenCart}>
                    <ShopingCart className={styles.midBarNavItems}></ShopingCart>
                    </div>
                    <UserAccount className={styles.midBarNavItems}></UserAccount>
                    
                </div>

            </div>

        </Container>
        
    </div>
  )
}

export default MidBar
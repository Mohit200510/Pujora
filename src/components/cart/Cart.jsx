import React, { useState } from 'react'
import styles from "./Cart.module.css"
import { X } from 'lucide-react'
import { GoTrash } from "react-icons/go";
import { Minus,Plus } from 'lucide-react';
import { FiMinus} from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { PiNewspaperFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import product from "../../assets/featureCard5.png"
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

function Cart() {
    
    const {closeCart,setCloseCart} = useContext(CartContext);

    function CloseCart(){
        setCloseCart(true)
        // console.log("cart is closing");
        
    }


  return (
    <div style={{right: closeCart?"-400px":"0"}} className={styles.cartMain}>
        <div>
            <div className={styles.cartTop}>
                <h3>Your Cart <span>(2)</span></h3>
                <div onClick={CloseCart} className={styles.cartTopCloseIcon}>
                    <X />
                </div>
                
            </div>

            <div className={styles.cartBody}>
                <div className={styles.cartItems}>
                    <div className={styles.cartItem}>
                        <div className={styles.cartItemImage}>
                            <img src={product}></img>

                        </div>
                        <div className={styles.cartItemDetails}>
                            <div className={styles.cartItemMid}>
                                <h2>Special Chameli oil for Puja & Religious Ceremonies | 900ML</h2>
                                <div className={styles.cartUpdationItems}>
                                    <div className={styles.cartBinIcon}>
                                        <GoTrash />
                                    </div>

                                    <div className={styles.cartQtynBox}>
                                        <FiMinus />
                                        <span>1</span>
                                        <FaPlus />


                                    </div>
                                    
                                    
                                </div>
                            </div>

                            <div className={styles.cartItemprice}>
                                <h4>₹499</h4>
                                <h5><del>₹599</del></h5>

                            </div>

                        </div>

                    </div>

                    <div className={styles.cartItem}>
                        <div className={styles.cartItemImage}>
                            <img src={product}></img>

                        </div>
                        <div className={styles.cartItemDetails}>
                            <div className={styles.cartItemMid}>
                                <h2>Special Chameli oil for Puja & Religious Ceremonies | 900ML</h2>
                                <div className={styles.cartUpdationItems}>
                                    <div className={styles.cartBinIcon}>
                                        <GoTrash />
                                    </div>

                                    <div className={styles.cartQtynBox}>
                                        <FiMinus />
                                        <span>1</span>
                                        <FaPlus />


                                    </div>
                                    
                                    
                                </div>
                            </div>

                            <div className={styles.cartItemprice}>
                                <h4>₹499</h4>
                                <h5><del>₹599</del></h5>

                            </div>

                        </div>

                    </div>


                </div>
            </div>

            <div className={styles.cartBottom}>
                <div className={styles.cartBottmDiv}>
                    <div className={styles.cartBottomTotal}>
                        <div className={styles.cartBottomTotalLeft}>
                            <PiNewspaperFill/>
                            <p>Estimated Total</p>
                        </div>

                        <div className={styles.cartBottomTotalRight}>
                            <div >
                                <h5><del>₹2,049</del></h5>
                                <h4>₹1,553</h4>
                            </div>
                            <p>you saved ₹491!</p>

                        </div>

                    </div>

                    <div className={styles.cartBottomCheckoutbtn}>
                        <button type='button'>Checkout <FaArrowRightLong/></button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cart
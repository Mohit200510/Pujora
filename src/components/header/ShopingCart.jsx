import React from 'react'
import styles from "./Header.module.css";
import { Triangle } from 'lucide-react';
import { ShoppingCart,ShoppingBag } from 'lucide-react';



function ShopingCart({className}) {
  return (
    <div className={styles.headerCart}>

    
        <ShoppingCart className={`${className} ${styles.cartIcon}`}  size={27} >
        
         <div className={styles.cartPreviewBox}>
            
        <div className={styles.cartPreviewBoxTooltip}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" width="25" height="25">
         <polygon points="0,8 6,0 12,8" fill="#fff"/>
            </svg>
        </div>

        <div className={styles.cartPreviewBoxContent}>

            <div className={styles.cartPreviewBoxHead}>
                <div className={styles.cartPreviewBoxHeadleft}>
                    <span><ShoppingBag size={20} stroke='#fff'></ShoppingBag></span>
                
                    <div>
                        <h6>Your Cart</h6>
                        <p>Ready When you are</p>

                    </div>
                </div>
                <div className={styles.cartPreviewBoxHeadright}>
                    <span>2 items</span>
                </div>
            </div>

           

            <div className={styles.cartPreviewSubtotal}>
                <p>Subtotal</p>
                
                <span>₹1,450</span>
            </div>

            <div className={styles.cartPreviewBoxBtn} style={{marginTop: "6px"}}>

            <button className={styles.cartPreviewOpenCart}>View Cart</button>
            <p></p>

            </div>
            
        </div>

    </div>
    </ShoppingCart>
       
    

    
      

       
    

    
    </div>
        
  )
}

export default ShopingCart
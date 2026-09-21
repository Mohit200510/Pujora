import React from 'react'
import StarIcon from '../common/StarIcon'
import { Star ,Heart} from 'lucide-react'
import styles from "./FeatureProducts.module.css"


function FeatureProduct(props) {
  return (
   
        <>

                        <div className={styles.featureProductBoxWishlist}>
                            <Heart stroke='var(--color-primary)' size={24}/>
                        </div>

                        <div className={styles.featureProductBoxBadge}>
                            23% OFF
                        </div>

                        <div className={styles.featureProductBoxImgWrapper}>
                            <img src={props.image}></img>
                        </div>

                        <div className={styles.featureProductBoxText}>
                            <h3>{props.name}</h3>

                            <div className={styles.featureProductBoxRating}>
                                <div>
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                                </div>
                                <span>4.8 (122)</span>
                            </div>



                            <div className={styles.featureProductBoxPrice}>
                                <h4>₹{props.price}</h4>
                                <h5><del>₹{props.mrp}</del></h5>
                            </div>

                            <button type='button'>Add To Cart</button>

                        </div>


                    </>
    
  )
}

export default FeatureProduct
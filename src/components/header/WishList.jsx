import React from 'react'
import { Heart } from 'lucide-react';
import styles from "./Header.module.css";

function WishList({ className }) {
  return (
    <span className={styles.heartIcon}>
        <Heart className={className} size={27} ></Heart>
    </span>
  )
}

export default WishList
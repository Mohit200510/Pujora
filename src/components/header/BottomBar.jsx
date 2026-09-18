import React from 'react'
import Container from '../common/Container';
import styles from "./Header.module.css";

function BottomBar() {
  return (

    <div className={styles.bottomBar}>
        
        <Container>

            <div >
                <ul className={styles.bottomBarUl}>
                    <li><a className={styles.bottomBarNavItemsLink} href=''>All</a></li> 
                    <li><a className={styles.bottomBarNavItemsLink} href=''>Puja Kits</a></li>
                    <li><a className={styles.bottomBarNavItemsLink} href=''>Incense</a></li>
                    <li><a className={styles.bottomBarNavItemsLink} href=''>Idols</a></li>
                    <li><a className={styles.bottomBarNavItemsLink} href=''>Brass Items</a></li>
                    <li><a className={styles.bottomBarNavItemsLink} href=''>Temple Decor</a></li>
                    <li><a className={styles.bottomBarNavItemsLink} href=''>Rudraksha</a></li>
                    <li><a className={styles.bottomBarNavItemsLink} href=''>Books</a></li>
                    <li><a className={styles.bottomBarNavItemsLink} href=''>Festive</a></li>
                    <li><a className={styles.bottomBarNavItemsLink} href=''>Sale</a></li>
                </ul>
            </div>

        </Container>

    </div>
  )
}

export default BottomBar
import React from 'react'
import { Search } from 'lucide-react'
import styles from "./Header.module.css"

function SearchBar() {
  return (
    <div className={styles.searchWrapper}>
     <input type='text' name='search' id='search' placeholder='Search for agarbatti, diyas, idols...' className={styles.headerSearch }></input>
     <Search className={styles.searchIcon} size={30} />
    </div>
    
  )
}
export default SearchBar
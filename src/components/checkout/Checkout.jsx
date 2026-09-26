import React from 'react'
import styles from "./Checkout.module.css"
import { useEffect,useState } from 'react'
import { supabase } from '../../supabaseClient'
import LoginBox from './LoginBox'


function Checkout() {

const [user,setUser]= useState(null)
console.log("uer",user);


// fetching login session data if aplicable

useEffect(() => {

  const checkUser = async () => {

    const { data } = await supabase.auth.getSession();

    if (data.session) {
      setUser(data.session.user);
    }

  };

  checkUser();

}, []);

// google login function

const handleGoogleLogin = async () => {

  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",

    options: {
      redirectTo: "http://localhost:5173/",
      queryParams: {
        prompt: "select_account",
      },
    },
    


  });

  if (error) {
    console.log(error);
  }
};





  return (
    <>
    {/* // <div className={styles.checkoutBox}>
    //     Checkout
    //     {user ? <p>Logged in</p> : <p>Guest user</p>}
    //     <button onClick={handleGoogleLogin}>Continue with GOOGLE</button>

    // </div> */}
    {user?null:<LoginBox/>}
    
</>
  )
}

export default Checkout
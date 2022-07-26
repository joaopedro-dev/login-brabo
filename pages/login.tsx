import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

const login = () => { 
  const {data: session} = useSession()

  if (session){
      return(
          <div>
              <p>Welcome, {session.user.email}</p>
              <button onClick={()=> signOut()}>Sign Out</button>
          </div>
      )
  } else {
      return(
          <div>
            <p>deslog papito</p>
            <button onClick={()=> signIn()}>Sign In</button>
          </div>
      )
  }
}

export default login
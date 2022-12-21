import  Cookies from 'universal-cookie';
import {Route} from 'react-router-dom'
import { Component } from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import { ReactNode } from 'react'
import {useNavigate} from 'react-router-dom';

function ProtectedRoute({ isSignedIn, children }) {

    if (!isSignedIn) {
      return <Navigate to='login'/>
    }
    else{
        return children
    }
  }
  export default ProtectedRoute// export default ProtectedRoute
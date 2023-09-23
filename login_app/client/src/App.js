import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



/**root routes */

/**important all components */

import Password from './components/Password';
import Register from './components/Register';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import LecturesMarksPage from "./components/LecturesMarksPage";
import MarksAddPage from "./components/MarksAddPage";
import StuAdmisRequViewPage from "./components/StuAdmisRequViewPage";

import GpaPage from "./components/GpaPage";




const router = createBrowserRouter([
    {
        path: '/gpa',
        element : <GpaPage></GpaPage>
    },
    {
        path : '/',
        element : <Login></Login>
    },
    {
        path : '/password',
        element : <Password></Password>
    },
    {
        path : '/lecturemarks',
        element : <LecturesMarksPage></LecturesMarksPage>
    },
    {
        path : '/register',
        element:<Register></Register>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '/profile',
        element : <Profile></Profile>
    },
    {
        path : '/markadd',
        element : <MarksAddPage></MarksAddPage>
    },
    {
        path : '/stuadmissionrequestview',
        element : <StuAdmisRequViewPage></StuAdmisRequViewPage>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    }
    
    

])


export default function App(){
    return(
        <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
    )
}
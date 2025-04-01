// // import './App.scss'
// // import { ConfigProvider, Skeleton } from 'antd';
// // import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// // import { HappyProvider } from '@ant-design/happy-work-theme';
// // import Login from './page/Login'
// // import NotFound from './page/NotFound';
// import Home from './page/ChatHome.jsx';
// // import { useState } from 'react';
// // import SignUp from './page/SignUp';
// // import Profile from './page/Profile.jsx';
// // import AppLayout from './page/Layout.jsx';
// // import Redirect from './page/Redirect.jsx';
// // import AppProvider from './context/AppContext.jsx';
// // import PrivateWrapper from './page/PrivateWrapper.jsx';
// // import { useCookies } from 'react-cookie';
// // import ProfileFriend from './page/ProfileFriend.jsx';
// //
// function App() {
// //   const [cookies] = useCookies('user')
// //   const [currentTheme, setCurrentTheme] = useState(cookies.user ? cookies.user.nightMode : 0 )
// //
// //   const lightTheme = {
// //      token: {
// //         colorPrimary: '#44bccc',
// //         colorTextHeading: '#44bccc',
// //         colorBgContainer : 'white',
// //         colorBgSecondary: '#D8FEFF',
// //
// //         baseColor: 'white',
// //
// //         colorLightSecondary: '#FFF5EB',
// //         colorBoldSecondary: '#FFBD59',
// //
// //         controlItemBgActive: '#c4fcff',
// //         borderRadius: '20px',
// //         color: '#36a7b6',
// //         colorTextBase : 'black',
// //         colorPrimaryText: 'black',
// //         colorIcon: '#36a7b6',
// //         colorLink: 'orange',
// //         colorTextSecondary: '#FFF5EB',
// //
// //         paragraph: {
// //             color: 'red',
// //             fontSize: '14px',
// //         }
// //       },
// //       components: {
// //           Button: {
// //             colorPrimary: '#44bccc',
// //             colorBgContainer: '#e4feff',
// //             colorBorderPrimary : '#2ea0af',
// //             algorithm: true, // Enable algorithm
// //           },
// //         }
// //   }
// //
// //   const darkTheme = {
// //      token: {
// //         // colorPrimary: '#005f70',
// //         // colorBgContainer : '#003a44',
// //         // colorBgSecondary: '#001e24',
// //         // baseColor: 'black',
// //         // borderRadius: '30px',
// //         // colorTextBase : 'white',
// //         //  colorPrimaryText: 'white',
// //         //  colorIcon: 'white',
// //         //  colorLink: 'orange'
// //       }
// //   }
// //
//   return (
//       <>
//           <Home />
//       </>
//
//   )
// }
// export default App
//
//
// // <AppProvider>
// {/*//       <HappyProvider>*/}
// {/*//       <ConfigProvider theme={ currentTheme == 0 ? lightTheme : darkTheme}>*/}
// {/*//         <Router>*/}
// {/*//        <Routes>*/}
// {/*//         <Route path="/login" element={<Login />} />*/}
// {/*//         <Route path="/signup" element={<SignUp />} />*/}
// {/*//         <Route element={<PrivateWrapper theme={setCurrentTheme}/>}>*/}
// {/*//           <Route path="/" element={<AppLayout theme={setCurrentTheme}/>}>*/}
// {/*//             <Route index element={<Navigate to="home" />} />*/}
// {/*//             <Route path="home" element={<Home />} />*/}
// {/*//             <Route path="redirect/:id" element={<Redirect/>} />*/}
// {/*//             <Route path="profile" element={<Profile/>} />*/}
// {/*//             <Route path="user/:id" element={<ProfileFriend/>} />*/}
// {/*//           </Route>*/}
// {/*//         </Route>  */}
// {/*//         <Route path="*" element={<NotFound/>} />*/}
// {/*//       </Routes>*/}
// {/*//       </Router>*/}
// {/*//        </ConfigProvider>*/}
// {/*//     </HappyProvider>*/}
// // </AppProvider>
// //
//

import './App.scss'
import { ConfigProvider } from 'antd'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'
import { HappyProvider } from '@ant-design/happy-work-theme'
import Login from './page/Login'
import NotFound from './page/NotFound';
import Home from './page/ChatHome.jsx';
import { useState } from 'react';
import SignUp from './page/SignUp';
import Profile from './page/Profile.jsx';
import AppLayout from './page/Layout.jsx';
import Redirect from './page/Redirect.jsx';
import AppProvider from './context/AppContext.jsx';
import PrivateWrapper from './page/PrivateWrapper.jsx';
import { useCookies } from 'react-cookie';
import ProfileFriend from './page/ProfileFriend.jsx';
import Categories from './page/categories.jsx';
import Productmanager from './page/productmanager.jsx';
import Product from "./page/Product.jsx";

function App() {
    const [cookies] = useCookies('user')
    const [currentTheme, setCurrentTheme] = useState(
        cookies.user ? cookies.user.nightMode : 0
    )

    const lightTheme = {
        token: {
            colorPrimary: '#44bccc',
            colorTextHeading: '#44bccc',
            colorBgContainer: 'white',
            colorBgSecondary: '#D8FEFF',

            baseColor: 'white',

            colorLightSecondary: '#FFF5EB',
            colorBoldSecondary: '#FFBD59',

            controlItemBgActive: '#c4fcff',
            borderRadius: '20px',
            color: '#36a7b6',
            colorTextBase: 'black',
            colorPrimaryText: 'black',
            colorIcon: '#36a7b6',
            colorLink: 'orange',
            colorTextSecondary: '#FFF5EB',

            paragraph: {
                color: 'red',
                fontSize: '14px',
            },
        },
        components: {
            Button: {
                colorPrimary: '#44bccc',
                colorBgContainer: '#e4feff',
                colorBorderPrimary: '#2ea0af',
                algorithm: true, // Enable algorithm
            },
        },
    }

    const darkTheme = {
        token: {
            // colorPrimary: '#005f70',
            // colorBgContainer : '#003a44',
            // colorBgSecondary: '#001e24',
            // baseColor: 'black',
            // borderRadius: '30px',
            // colorTextBase : 'white',
            //  colorPrimaryText: 'white',
            //  colorIcon: 'white',
            //  colorLink: 'orange'
        },
    }

    return (
        <AppProvider>
               <HappyProvider>
           <ConfigProvider theme={ lightTheme}>
             <Router>
            <Routes>
             <Route path="/login" element={<Login />} />
             <Route path="/signup" element={<SignUp />} />
             <Route path="/categories" element={<Categories />} />
             <Route path="/productmanager" element={<Productmanager />} />
             <Route path="/product" element={<Product />} />
             <Route element={<PrivateWrapper theme={setCurrentTheme}/>}>
               {/*<Route path="/" element={<AppLayout theme={setCurrentTheme}/>}>*/}
                 <Route index element={<Navigate to="home" />} />
                 <Route path="home" element={<Home />} />
                 <Route path="redirect/:id" element={<Redirect/>} />
                 <Route path="profile" element={<Profile/>} />
                 <Route path="user/:id" element={<ProfileFriend/>} />
               </Route>
             {/*</Route>*/}
             <Route path="*" element={<NotFound/>} />
           </Routes>
           </Router>
            </ConfigProvider>
         </HappyProvider>
</AppProvider>

    )
}
export default App

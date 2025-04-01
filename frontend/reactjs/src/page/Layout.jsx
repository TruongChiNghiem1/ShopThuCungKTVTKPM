import { useContext, useEffect, useState } from 'react';
import {
  SearchOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HeartOutlined,
  HomeOutlined,
  MessageOutlined,
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Switch, message } from 'antd';
import logo from '../assets/logo.png';
import logo_vertical from '../assets/logo_vertical.png';
import admin from '../assets/admin.jpg';
import { useNavigate, Outlet } from 'react-router-dom';
import Search from '../component/Search';
import Notify from '../component/Notify';
import { AppContext } from '../context/AppContext';
import { useCookies } from 'react-cookie';
import { changeTheme } from '../service/user';
const { Header, Sider} = Layout;
const AppLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {SubMenu}  = Menu
  const navigate = useNavigate()
  const [cookies,setCookie, removeCookie] = useCookies(['loginToken', 'user']);
  const {activeMenu, setActiveMenu,
     openSearch, setOpenSearch,
     openNofity, setOpenNotify, user, setUser} = useContext(AppContext)   

  const handleMenuSelect = ({ key }) => {
    setActiveMenu(key);
  };
  const {
    token: { colorBgContainer, colorBgSecondary },
  } = theme.useToken();


  const logOut = () =>{
    removeCookie('loginToken')
    removeCookie('user');
    localStorage.removeItem('user')
    localStorage.removeItem('search');
    navigate('/login')
  }

  useEffect(() =>{
    if(!cookies.loginToken){
      navigate('/login')
    }
  }, []) 

  const handleChangeTheme = async (value) =>{
    try {
      const res = await changeTheme(cookies.loginToken, value ? 1 : 0)
        if(res.data.status === 200){
            props.theme(res.data.nightMode)
            setUser({...user, nightMode: res.data.nightMode})
            setCookie('user', JSON.stringify({ ...cookies.user, nightMode: res.data.nightMode}));
          message.success(res.data.message)
        }else{
          message.error(res.data.message)
        }
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  return (
    <Layout className='main' style={{background: colorBgSecondary, padding: '12px',}}>
      <Layout style={{background: colorBgSecondary, marginLeft: '24px'}} id='layout_main'>
        <div className='flex-center h-100 position-relative'>
          {openSearch && <Search/>}
          {openNofity && <Notify/>}
          <Outlet className='h-100'/>
        </div>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
// import { Heart, ShoppingCart, User, Search } from 'lucide-react';
import logoPetCare from '../../assets/logo.png';
import GioHangImg from '../../assets/Home/Giohang.png';
import heart from '../../assets/Home/heart.png';
import user from '../../assets/Home/user.png';
import { LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
  {
    key: '1',
    label: (<a rel="noopener noreferrer" href="#"><span className="green-color">My Account</span></a>),
    disabled: false,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: (<a rel="noopener noreferrer" href="#"><span className="green-color">Order history</span></a>),
    extra: '         ',
  },
  {
    key: '3',
    label: (<a rel="noopener noreferrer" href="#"><span className="green-color">Store manager</span></a>),
    extra: '',
  },
  {
    key: '4',
    label: (<a rel="noopener noreferrer" href="#"><span className="green-color">Logout</span></a>),
    icon: <LogoutOutlined className="green-color"/>,
    extra: '',
  },
];
const Navbar = () => {
  return (
    <nav className="pt-3 mt-3 absolute w-100">
      <div className="mx-auto flex items-center justify-between w-75">
        <div className="flex items-center gap-2">
          <img src={logoPetCare} alt="Pet Care Logo" className="h-10" />
        </div>

        <div className="flex items-center space-x-10">
          <a href="/Home" className="hover:text-blue-900, font-weight-bold"><span>Home</span></a>
          <a href="/Product" className="hover:text-blue-900">Products</a>
          <a href="#" className="hover:text-blue-900">Blogs</a>
          <a href="#" className="hover:text-blue-900">FAQs</a>
          <img src={GioHangImg} alt={'Gio hang'} width={24}/>
          <img src={heart} alt={'Gio hang'} width={24}/>

          <div>
            <Dropdown menu={{ items }} placement="bottomRight">
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img src={user} alt={'Gio hang'} width={32}/>
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
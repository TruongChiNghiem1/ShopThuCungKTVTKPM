import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'; // nếu bạn có file CSS riêng

function HomePage() {
  return (
    <div className="container">
      <h1>Chào mừng bạn đến với Shop Thú Cưng!</h1>
      <p>Chúng tôi cung cấp các dịch vụ tốt nhất cho thú cưng của bạn.</p>
      
      <div className="services">
        <div className="service">🐶 Dịch vụ chăm sóc và spa cho thú cưng</div>
        <div className="service">🍖 Cung cấp thực phẩm dinh dưỡng</div>
        <div className="service">🏥 Khám chữa bệnh và tư vấn sức khỏe</div>
      </div>

      {/* Sửa a -> Link */}
      <Link to="/payment" className="button">🛒 Thanh toán ngay</Link>
    </div>
  );
}

export default HomePage;

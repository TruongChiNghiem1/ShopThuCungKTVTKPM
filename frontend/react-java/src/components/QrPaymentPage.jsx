import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const QrPaymentPage = () => {
  // Lấy số tiền từ URL query
  const location = useLocation();
  const [amount, setAmount] = useState('0');
  const [qrUrl, setQrUrl] = useState('');

  // Thông tin ngân hàng (có thể tùy chỉnh)
  const bankId = 'MB'; // Mã ngân hàng
  const accountNumber = '9704229200187429864'; // Số tài khoản
  const description = 'Thanh toan don hang'; // Nội dung giao dịch

  useEffect(() => {
    // Lấy tham số amount từ URL
    const urlParams = new URLSearchParams(location.search);
    const amountFromUrl = urlParams.get('amount') || '0';
    setAmount(amountFromUrl);

    // Tạo URL QR từ VietQR
    const generatedQrUrl = `https://img.vietqr.io/image/${bankId}-${accountNumber}-compact.png?amount=${amountFromUrl}&addInfo=${encodeURIComponent(description)}`;
    setQrUrl(generatedQrUrl);
  }, [location.search]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <header className="w-full max-w-lg text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900 tracking-wide">
          Quét mã QR để thanh toán
        </h1>
        <p className="text-gray-600 mt-2">Vui lòng sử dụng ứng dụng ngân hàng để quét mã</p>
      </header>

      {/* QR Code Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full flex flex-col items-center">
        <img
          src={qrUrl}
          alt="QR Code Thanh Toán"
          className="w-72 h-72 rounded-lg border border-gray-200"
        />
        <p className="text-lg font-semibold text-gray-800 mt-4">
          Tổng tiền:{' '}
          <span className="text-blue-600">{Number(amount).toLocaleString()} VND</span>
        </p>
        <div className="mt-4 text-sm text-gray-500 text-center">
          <p>Ngân hàng: <span className="font-medium">{bankId}</span></p>
          <p>Số tài khoản: <span className="font-medium">{accountNumber}</span></p>
          <p>Nội dung: <span className="font-medium">{description}</span></p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex space-x-4">
        <Link
          to="/"
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition shadow-md"
        >
          Quay lại
        </Link>
        <button
          onClick={() => alert('Xác nhận thanh toán thành công!')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
};

export default QrPaymentPage;
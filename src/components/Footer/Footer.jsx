import React from "react";
import "./Footer.css";

const Footer = () => {

    return (
        <footer className="foot-content">
            <div className="f-content-container">
                <div className="f-catalog-right">
                    <h2>về chúng tôi</h2>
                    <p className="slogan">Levents – Popular Streetwear Brand</p>
                    <p>HỘ KINH DOANH Red Label</p>
                    <p>GPKD được cấp bởi Cục Cảnh sát QLHC & TTXH</p>
                    <p>Trụ sở hộ kinh doanh: 842 Sư Vạn Hạnh, Phường 13, Quận 10, Tp. Hồ Chí Minh</p>
                    <p>Mä số thuế: 41J8031547</p>
                    <p>Ngày cấp: 06/07/2021</p>
                    <p>Người đại diện: Nguyễn Trần Duy Khiết</p>
                    <p>Mã Số thuế cá nhân: 8748861448-001</p>
                </div>

                <div className="f-catalog-left">
                    <div className="f-catalog">
                        <h2>liên hệ</h2>
                        <div className="f-catalog-item">
                            <p>Hotline</p>
                            <a href=""> 1900 633 028</a>
                        </div>

                        <div className="f-catalog-item">
                            <p>Email</p>
                            <a href=""> Customercare@levents.asia</a>
                        </div>

                        <div className="f-catalog-item">
                            <p>Thứ Hai - Chủ Nhật</p>
                            <a href=""> 09:30 ~ 21:30</a>
                        </div>

                        <div className="f-catalog-item">
                            <p>Email liên hệ công việc</p>
                            <a href=""> business@levents.asia</a>
                        </div>
                    </div>

                    <div className="f-catalog">
                        <h2>cửa hàng</h2>
                        <p>842 Sư Vạn Hạnh, Phường 12, Quận 10, HCM</p>
                    </div>

                    <div className="f-catalog">
                        <h2>hỗ trợ</h2>
                        <div className="f-catalog-sp">
                            <p>LÌ VEN FABRIC</p>
                            <p>Tài khoản</p>
                            <p>Chính sách vận chuyển</p>
                            <p>Thanh toán trực tuyến</p>
                            <p>Chính sách bảo mật</p>
                            <p>Chính sách bảo hành</p>
                            <p>Chính sách khiếu nại</p>
                        </div>
                    </div>

                    <div className="f-catalog">
                        <h2>mở rộng</h2>
                        <div className="f-catalog-sp">
                            <p>Bài viết</p>
                            <p>Tuyển dụng</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;
import { 
    BellOutlined, 
    DollarCircleOutlined, 
    FileTextOutlined, 
    SearchOutlined, 
    ShoppingCartOutlined, 
    ShoppingOutlined } from "@ant-design/icons";
import React from "react";

const DashBoard = () => {
    return (
        <section id="dashboard">
            <div className="dashboard">
                <div className="dashboard-top">
                    <div className="dashboard-top-search">
                        <form>
                            <input placeholder="Search..."></input>
                            <span>
                                <SearchOutlined />
                            </span>
                        </form>
                    </div>
                    <div className="dashboard-top-content">
                        <li className="dashboard-top-content-avatar">
                            <img src="" alt="" />
                            <span>Tran Tien Dung</span>
                        </li>
                        <li className="dashboard-top-content-noti">
                            <BellOutlined />
                        </li>
                    </div>
                </div>

                <div className="dashboard-mid">
                    <div className="dashboard-mid-statistic">
                        <div className="dashboard-mid-statistic-content">
                            <li>
                                <div className="dashboard-mid-statistic-icon">
                                    <ShoppingOutlined />
                                </div>
                                <div className="dashboard-mid-statistic-title">
                                    <span className="total">1666</span>
                                    <span className="title">Total Sales</span>
                                </div>
                            </li>
                        </div>
                        <div className="dashboard-mid-statistic-content">
                            <li>
                                <div className="dashboard-mid-statistic-icon">
                                    <ShoppingCartOutlined />
                                </div>
                                <div className="dashboard-mid-statistic-title">
                                    <span className="total">25</span>
                                    <span className="title">Daily Visits</span>
                                </div>
                            </li>
                        </div>
                        <div className="dashboard-mid-statistic-content">
                            <li>
                                <div className="dashboard-mid-statistic-icon">
                                    <DollarCircleOutlined />
                                </div>
                                <div className="dashboard-mid-statistic-title">
                                    <span className="total">2000</span>
                                    <span className="title">Total Income</span>
                                </div>
                            </li>
                        </div>
                        <div className="dashboard-mid-statistic-content">
                            <li>
                                <div className="dashboard-mid-statistic-icon">
                                    <FileTextOutlined />
                                </div>
                                <div className="dashboard-mid-statistic-title">
                                    <span className="total">1208</span>
                                    <span className="title">Total Order</span>
                                </div>
                            </li>
                        </div>
                    </div>

                </div>
                <div className="dashboard-new">
                    <div className="dashboard"></div>
                    <div className="dashboard"></div>
                </div>
            </div>
        </section>
    )
}

export default DashBoard;
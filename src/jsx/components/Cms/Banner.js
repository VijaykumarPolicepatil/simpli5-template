import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';

import { IMAGES } from '../../constant/theme';
import MainPagetitle from '../../layouts/MainPagetitle';

const initialTableData = [
    { userid: '1001', clientName: "", brandImage: IMAGES.contact1, imageLink1: '/service/image1', promoCode: 'CODE1001', status: 'Active' },
    { userid: '1002', clientName: "", brandImage: IMAGES.contact2, imageLink1: '/service/image3', promoCode: 'CODE1002', status: 'Inactive' },
    { userid: '1003', clientName: "", brandImage: IMAGES.contact3, imageLink1: '/service/image5', promoCode: 'CODE1003', status: 'Active' },
    { userid: '1004', clientName: "", brandImage: IMAGES.contact1, imageLink1: '/service/image7', promoCode: 'CODE1004', status: 'Inactive' },
    // Add more data as needed
];

const headers = [
    { label: "User ID", key: "userid" },
    { label: "Client Name", key: "clientName" },
    { label: "Brand Image", key: "brandImage" },
    { label: "Image Link 1", key: "imageLink1" },
    { label: "Promo Code", key: "promoCode" },
    { label: "Status", key: "status" }
];

const csvlink = {
    headers: headers,
    data: initialTableData,
    filename: "banners.csv"
};

const Banner = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(initialTableData);
    const [activePage, setActivePage] = useState(0);
    const [tableData, setTableData] = useState(initialTableData);
    const sort = 10;

    useEffect(() => {
        const results = tableData.filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(search.toLowerCase())
            )
        );
        setFilteredData(results);
        setActivePage(0);
    }, [search, tableData]);

    const handleImageUpload = (e, userid) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newData = tableData.map(item =>
                    item.userid === userid ? { ...item, brandImage: reader.result } : item
                );
                setTableData(newData);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClearImageLink = (userid) => {
        const newData = tableData.map(item =>
            item.userid === userid ? { ...item, imageLink1: '' } : item
        );
        setTableData(newData);
    };

    const handleImageLinkChange = (e, userid) => {
        const newData = tableData.map(item =>
            item.userid === userid ? { ...item, imageLink1: e.target.value } : item
        );
        setTableData(newData);
    };

    const handlePromoCodeChange = (e, userid) => {
        const newData = tableData.map(item =>
            item.userid === userid ? { ...item, promoCode: e.target.value } : item
        );
        setTableData(newData);
    };

    const handleClientNameChange = (e, userid) => {
        const newData = tableData.map(item =>
            item.userid === userid ? { ...item, clientName: e.target.value } : item
        );
        setTableData(newData);
    };

    const handleSubmit = () => {
        console.log('Submitted Data:', tableData);
    };

    const handleCancel = () => {
        console.log('Edit Cancelled');
    };

    const pagination = Array(Math.ceil(filteredData.length / sort))
        .fill()
        .map((_, i) => i + 1);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    const startIndex = activePage * sort;
    const endIndex = startIndex + sort;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return (
        <>
            <MainPagetitle mainTitle="Banner" pageTitle={'Banner'} parentTitle={'Home'} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-14 col-lg-16">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1 ItemsCheckboxSec shorting">
                                    <div className="tbl-caption d-flex justify-content-between align-items-center">
                                        <h4 className="heading mb-0">Banner List</h4>
                                        <div className="d-flex align-items-center">
                                            <CSVLink {...csvlink} className="btn btn-primary light btn-sm me-1">
                                                <i className="fa-solid fa-file-excel" /> {" "}
                                                Export Report
                                            </CSVLink>
                                        </div>
                                    </div>
                                    <div className="search-bar mb-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </div>
                                    <div id="banner-tbl_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="banner-tblwrapper" className="table ItemsCheckboxSec dataTable no-footer mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Client Name</th>
                                                    <th>Brand Image</th>
                                                    <th>Image Link 1</th>
                                                    <th>Promo Code</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {paginatedData.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={item.clientName}
                                                                onChange={(e) => handleClientNameChange(e, item.userid)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <img src={item.brandImage} className="avatar avatar-md" alt="Brand" />
                                                            <input
                                                                type="file"
                                                                className="form-control mt-2"
                                                                onChange={(e) => handleImageUpload(e, item.userid)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <textarea
                                                                className="form-control"
                                                                value={item.imageLink1}
                                                                onChange={(e) => handleImageLinkChange(e, item.userid)}
                                                                rows="2"
                                                            />
                                                            <button
                                                                className="btn-outline-primary btn-sm mt-2"
                                                                onClick={() => handleClearImageLink(item.userid)}
                                                            >
                                                                Clear
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={item.promoCode}
                                                                onChange={(e) => handlePromoCodeChange(e, item.userid)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <span className={`badge light border-0 ${item.status === "Active" ? 'badge-success' : 'badge-danger'}`}>
                                                                {item.status}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <Link to={`/banner/edit/${item.userid}`} className="btn btn-primary btn-sm me-2">
                                                                Edit
                                                            </Link>
                                                            <button className="btn btn-danger btn-sm">
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="d-sm-flex text-center justify-content-between align-items-center">
                                        <div className="dataTables_info">
                                            Showing {startIndex + 1} to{" "}
                                            {filteredData.length > endIndex ? endIndex : filteredData.length}{" "}
                                            of {filteredData.length} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Link
                                                className="paginate_button previous"
                                                to="/Banners"
                                                onClick={() => activePage > 0 && handlePageChange(activePage - 1)}
                                            >
                                                <i className="fa-solid fa-angle-left" />
                                            </Link>
                                            <span>
                                                {pagination.map((number, i) => (
                                                    <Link
                                                        key={i}
                                                        to="/Banners"
                                                        className={`paginate_button ${activePage === i ? "current" : ""}`}
                                                        onClick={() => handlePageChange(i)}
                                                    >
                                                        {number}
                                                    </Link>
                                                ))}
                                            </span>
                                            <Link
                                                className="paginate_button next"
                                                to="/Banners"
                                                onClick={() => activePage < pagination.length - 1 && handlePageChange(activePage + 1)}
                                            >
                                                <i className="fa-solid fa-angle-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center my-4">
                                <button className="btn btn-primary me-2" onClick={handleSubmit}>
                                    Submit
                                </button>
                                <button className="btn btn-secondary" onClick={handleCancel}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;

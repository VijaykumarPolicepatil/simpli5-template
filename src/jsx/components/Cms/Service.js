import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CSVLink } from 'react-csv';

import { IMAGES } from '../../constant/theme';
import MainPagetitle from '../../layouts/MainPagetitle';

const initialTableData = [
    { userid: '1001', name: "", image: IMAGES.contact1, imageLink: '/service/image1', status: 'Active' },
    { userid: '1002', name: "", image: IMAGES.contact2, imageLink: '/service/image2', status: 'Inactive' },
    { userid: '1003', name: "", image: IMAGES.contact3, imageLink: '/service/image3', status: 'Active' },
    { userid: '1004', name: "", image: IMAGES.contact1, imageLink: '/service/image4', status: 'Inactive' },
];

const headers = [
    { label: "User ID", key: "userid" },
    { label: "User Name", key: "name" },
    { label: "Image Link", key: "imageLink" },
    { label: "Status", key: "status" }
];

const csvlink = {
    headers: headers,
    data: initialTableData,
    filename: "services.csv"
};

const Service = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(initialTableData);
    const [activePage, setActivePage] = useState(0);
    const [tableData, setTableData] = useState(initialTableData);
   
    const sort = 10;
    const navigate = useNavigate(); // Hook for navigation

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
                    item.userid === userid ? { ...item, image: reader.result } : item
                );
                setTableData(newData);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClearImageLink = (userid) => {
        const newData = tableData.map(item =>
            item.userid === userid ? { ...item, imageLink: '' } : item
        );
        setTableData(newData);
    };

    const handleImageLinkChange = (e, userid) => {
        const newData = tableData.map(item =>
            item.userid === userid ? { ...item, imageLink: e.target.value } : item
        );
        setTableData(newData);
    };

    const handleClientNameChange = (e, userid) => {
        const newData = tableData.map(item =>
            item.userid === userid ? { ...item, name: e.target.value } : item
        );
        setTableData(newData);
    };

    const handleSubmit = () => {
        
        console.log('Changes have been submitted.');
    };

    const handleCancel = () => {
       
        navigate('/services'); 
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
            <MainPagetitle mainTitle="Service" pageTitle="Service" parentTitle="Home" />
            <div className="container-fluid">
                <div className="row">
                <div className="col-xl-14 col-lg-16">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1 ItemsCheckboxSec shorting">
                                    <div className="tbl-caption d-flex justify-content-between align-items-center">
                                        <h4 className="heading mb-0">Service List</h4>
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
                                    <div id="service-tbl_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="service-tblwrapper" className="table ItemsCheckboxSec dataTable no-footer mb-0">
                                            <thead>
                                                <tr>
                                                    <th>User ID</th>
                                                    <th>User Name</th>
                                                    <th>User Image</th>
                                                    <th>Image Link</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {paginatedData.map((item, index) => (
                                                    <tr key={index}>
                                                        <td><span>{item.userid}</span></td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={item.name}
                                                                onChange={(e) => handleClientNameChange(e, item.userid)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <img src={item.image} className="avatar avatar-md" alt={item.name} />
                                                            <input
                                                                type="file"
                                                                className="form-control mt-2"
                                                                onChange={(e) => handleImageUpload(e, item.userid)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <textarea
                                                                    className="form-control"
                                                                    value={item.imageLink}
                                                                    onChange={(e) => handleImageLinkChange(e, item.userid)}
                                                                    rows="2"
                                                                />
                                                                <button
                                                                    className="btn-outline-primary btn-sm ms-2"
                                                                    onClick={() => handleClearImageLink(item.userid)}
                                                                >
                                                                    Clear
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className={`badge light border-0 ${item.status === "Active" ? 'badge-success' : 'badge-danger'}`}>
                                                                {item.status}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <Link to={`/service/edit/${item.userid}`} className="btn btn-primary btn-sm me-2">
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
                                        <div className="d-sm-flex text-center justify-content-between align-items-center">
                                            <div className="dataTables_info">
                                                Showing {startIndex + 1} to{" "}
                                                {filteredData.length > endIndex ? endIndex : filteredData.length}{" "}
                                                of {filteredData.length} entries
                                            </div>
                                            <div className="dataTables_paginate paging_simple_numbers">
                                                <Link
                                                    className="paginate_button previous"
                                                    to="/Services"
                                                    onClick={() => activePage > 0 && handlePageChange(activePage - 1)}
                                                >
                                                    <i className="fa-solid fa-angle-left" />
                                                </Link>
                                                <span>
                                                    {pagination.map((number, i) => (
                                                        <Link
                                                            key={i}
                                                            to="/Services"
                                                            className={`paginate_button ${activePage === i ? "current" : ""}`}
                                                            onClick={() => handlePageChange(i)}
                                                        >
                                                            {number}
                                                        </Link>
                                                    ))}
                                                </span>
                                                <Link
                                                    className="paginate_button next"
                                                    to="/Services"
                                                    onClick={() => activePage + 1 < pagination.length && handlePageChange(activePage + 1)}
                                                >
                                                    <i className="fa-solid fa-angle-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                  
                                    <div className="text-center my-4">
                                        <button
                                            className="btn btn-primary me-2"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </button>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;

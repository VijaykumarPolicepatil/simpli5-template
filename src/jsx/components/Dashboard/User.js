import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';

import { IMAGES } from '../../constant/theme';
import MainPagetitle from '../../layouts/MainPagetitle';

const tableData = [
    {userid: '1001', department: 'Computer Science', image: IMAGES.contact1, contact: '+91 123 456 7890', title: 'Ricky Antony', email: 'ra@gmail.com', gender: 'Female', location: 'India'},    
    {userid: '1002', department: 'Computer Science', image: IMAGES.contact2, contact: '+91 123 456 7890', title: 'Ankites Risher', email: 'abc@gmail.com', gender: 'Male', location: 'Brazil'},    
    {userid: '1003', department: 'Computer Science', image: IMAGES.contact3, contact: '+91 123 456 7890', title: 'Ricky M', email: 'pqr@gmail.com', gender: 'Male', location: 'France'},    
    {userid: '1004', department: 'Computer Science', image: IMAGES.contact1, contact: '+91 123 456 7890', title: 'Elijah James', email: 'stuy@gmail.com', gender: 'Female', location: 'Dubai'},    
    {userid: '1005', department: 'Computer Science', image: IMAGES.contact2, contact: '+91 123 456 7890', title: 'Honey Risher', email: 'xyz@gmail.com', gender: 'Male', location: 'USA'},    
    {userid: '1006', department: 'Computer Science', image: IMAGES.contact2, contact: '+91 123 456 7890', title: 'Honey Risher', email: 'xyz@gmail.com', gender: 'Male', location: 'USA'},    
    {userid: '1007', department: 'Computer Science', image: IMAGES.contact2, contact: '+91 123 456 7890', title: 'Ankites Risher', email: 'abc@gmail.com', gender: 'Male', location: 'Brazil'},    
    {userid: '1008', department: 'Computer Science', image: IMAGES.contact3, contact: '+91 123 456 7890', title: 'Ricky M', email: 'pqr@gmail.com', gender: 'Male', location: 'France'},    
    {userid: '1009', department: 'Computer Science', image: IMAGES.contact1, contact: '+91 123 456 7890', title: 'Ricky Antony', email: 'ra@gmail.com', gender: 'Female', location: 'India'},    
    {userid: '1010', department: 'Computer Science', image: IMAGES.contact1, contact: '+91 123 456 7890', title: 'Elijah James', email: 'stuy@gmail.com', gender: 'Female', location: 'Dubai'},    
    {userid: '1011', department: 'Computer Science', image: IMAGES.contact2, contact: '+91 123 456 7890', title: 'Ankites Risher', email: 'abc@gmail.com', gender: 'Male', location: 'Brazil'},    
    {userid: '1012', department: 'Computer Science', image: IMAGES.contact1, contact: '+91 123 456 7890', title: 'Ricky Antony', email: 'ra@gmail.com', gender: 'Female', location: 'India'},
]; 

const headers = [
    { label: "User ID", key: "userid" },
    { label: "User Name", key: "title" },
    { label: "Department", key: "department" },
    { label: "Email Address", key: "email" },
    { label: "Contact Number", key: "contact" },
    { label: "Gender", key: "gender" },
    { label: "Location", key: "location" },
    { label: "Status", key: "status" },
];

const csvlink = {
    headers: headers,
    data: tableData,
    filename: "csvfile.csv"
};

const User = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(tableData);
    const [activePage, setActivePage] = useState(0);
    const sort = 10;

    useEffect(() => {
        const results = tableData.filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(search.toLowerCase())
            )
        );
        setFilteredData(results);
        setActivePage(0); 
    }, [search]);

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
            <MainPagetitle mainTitle="User" pageTitle={'User'} parentTitle={'Home'} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-10col-lg-10">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1 ItemsCheckboxSec shorting">
                                    <div className="tbl-caption d-flex justify-content-between align-items-center">
                                        <h4 className="heading mb-0">Employees</h4>
                                        <div className="d-flex align-items-center">
                                            <CSVLink {...csvlink} className="btn btn-primary light btn-sm me-1">
                                                <i className="fa-solid fa-file-excel" /> {" "}
                                                Export Report
                                            </CSVLink>
                                        </div>
                                    </div>
                                    <div className="search-bar mb-2" >
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </div>
                                    <div id="employee-tbl_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="empoloyees-tblwrapper" className="table ItemsCheckboxSec dataTable no-footer mb-0">
                                            <thead>
                                                <tr>
                                                    <th>User ID</th>
                                                    <th>User Name</th>
                                                    <th>Department</th>
                                                    <th>Email Address</th>
                                                    <th>Contact Number</th>
                                                    <th>Gender</th>
                                                    <th>Location</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {paginatedData.map((item, index) => (
                                                    <tr key={index}>
                                                        <td><span>{item.userid}</span></td>
                                                        <td>
                                                            <div className="products">
                                                                <img src={item.image} className="avatar avatar-md" alt="" />
                                                                <div>
                                                                    <h6>{item.title}</h6>
                                                                    <span>Web Designer</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><span>{item.department}</span></td>
                                                        <td><span className="text-primary">{item.email}</span></td>
                                                        <td><span>{item.contact}</span></td>
                                                        <td><span>{item.gender}</span></td>
                                                        <td><span>{item.location}</span></td>
                                                        <td>
                                                            <span className={`badge light border-0 ${item.status === "Active" ? 'badge-success' : 'badge-danger'}`}>
                                                                {item.status}
                                                            </span>
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
                                                    to="/Users"
                                                    onClick={() => activePage > 0 && handlePageChange(activePage - 1)}
                                                >
                                                    <i className="fa-solid fa-angle-left" />
                                                </Link>
                                                <span>
                                                    {pagination.map((number, i) => (
                                                        <Link
                                                            key={i}
                                                            to="/Users"
                                                            className={`paginate_button ${activePage === i ? "current" : ""}`}
                                                            onClick={() => handlePageChange(i)}
                                                        >
                                                            {number}
                                                        </Link>
                                                    ))}
                                                </span>
                                                <Link
                                                    className="paginate_button next"
                                                    to="/Users"
                                                    onClick={() => activePage + 1 < pagination.length && handlePageChange(activePage + 1)}
                                                >
                                                    <i className="fa-solid fa-angle-right" />
                                                </Link>
                                            </div>
                                        </div>
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

export default User;

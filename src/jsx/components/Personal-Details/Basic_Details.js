import React, { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import PageTitle from "../../layouts/PageTitle";

const Basic_Details = (props) => {
  const [startDate2, setStartDate2] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the Personal Information page after form submission
    navigate("/Dashboard");
  };

  return (
    <Fragment>
      <PageTitle
        activeMenu="Validation"
        motherMenu="Form"
        pageContent="Validation"
      />
      <div className="card-header">
        <h4 className="card-title">Basic Information</h4>
      </div>
      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xl-6 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                User Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div className="col-xl-6 mb-3">
              <label htmlFor="exampleFormControlInput3" className="form-label">
                User Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder=""
              />
            </div>
            <div className="col-xl-6 mb-3">
              <label className="form-label">
                Gender <span className="text-danger">*</span>
              </label>
              <select className="default-select form-control">
                <option data-display="Select">Please select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-xl-6 mb-3">
              <label className="form-label">
                Country <span className="text-danger">*</span>
              </label>
              <select className="default-select form-control">
                <option data-display="Select">Please select</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div className="col-xl-6 mb-3">
              <label htmlFor="exampleFormControlInput88" className="form-label">
                Mobile Number <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput88"
                placeholder=""
              />
            </div>
            <div className="col-xl-6 mb-3">
              <label htmlFor="exampleFormControlInput8" className="form-label">
                Date of Birth <span className="text-danger">*</span>
              </label>
              <DatePicker
                className="form-control"
                selected={startDate2}
                onChange={(date) => setStartDate2(date)}
              />
            </div>
            <div className="col-xl-6 mb-3">
              <label htmlFor="exampleFormControlInput10" className="form-label">
                Reporting To <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput10"
                placeholder=""
              />
            </div>
            <div className="col-xl-6 mb-3">
              <label className="form-label">
                Language Select <span className="text-danger">*</span>
              </label>
              <select className="default-select form-control">
                <option data-display="Select">Please select</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>

            <div className="col-xl-12 mb-3">
              <label className="form-label">
                Address <span className="text-danger">*</span>
              </label>
              <textarea rows="2" className="form-control"></textarea>
            </div>
            <div className="col-xl-12 mb-3">
              <label className="form-label">
                About <span className="text-danger">*</span>
              </label>
              <textarea rows="2" className="form-control"></textarea>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary me-1">
              Submit
            </button>
            <Link to="#" className="btn btn-danger light ms-1">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Basic_Details;

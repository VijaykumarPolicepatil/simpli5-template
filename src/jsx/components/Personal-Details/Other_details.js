import React, { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import PageTitle from "../../layouts/PageTitle";

const Other_Details = (props) => {
  const [startDate2, setStartDate2] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <h4 className="card-title">Other Information</h4>
      </div>
      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xl-6 mb-3">
              <label htmlFor="exampleFormControlInput8" className="form-label">
                Date of SignUp<span className="text-danger">*</span>
              </label>
              <DatePicker
                className="form-control"
                selected={startDate2}
                onChange={(date) => setStartDate2(date)}
              />
            </div>
            <div className="col-xl-6 mb-3">
              <label htmlFor="exampleFormControlInput88" className="form-label">
                Age <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput88"
                placeholder=""
              />
            </div>
            <div className="col-xl-6 mb-3">
              <label className="form-label">
                Fav App <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInputabc,"
                placeholder=""
              />
            </div>
            <div className="col-xl-6 mb-3">
              <label className="form-label">
                Profile Completion <span className="text-danger">*</span>
              </label>
              <select className="default-select form-control">
                <option data-display="Select">Please select</option>
                <option value="Under Processing">Under Processing</option>
                <option value="Waiting for Approva">
                  Waiting for Approval
                </option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="col-xl-6 mb-3">
              <label htmlFor="exampleFormControlInput88" className="form-label">
                Quick Dial <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput88"
                placeholder=""
              />
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

export default Other_Details;

import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../../layouts/PageTitle";

const User_Properties = (props) => {
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
        <p className="card-title">Other Information</p>
      </div>
      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <h4>Emergency Contact</h4>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label
                htmlFor="exampleFormControlInputabc"
                className="form-label"
              >
                Person Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInputabc"
                placeholder="Enter Name"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">
                Personal Relation <span className="text-danger">*</span>
              </label>
              <select className="default-select form-control">
                <option value="" data-display="Select">
                  Please select
                </option>
                <option value="Family Member">Family Member</option>
                <option value="Brother">Brother</option>
                <option value="Friend">Friend</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="exampleFormControlInput88" className="form-label">
                Person Number <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput88"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>

          <h4>Emergency Assistance</h4>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label
                htmlFor="exampleFormControlInputHospital"
                className="form-label"
              >
                Hospital Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInputHospital"
                placeholder="Enter Hospital Name"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label
                htmlFor="exampleFormControlInputAmbulance"
                className="form-label"
              >
                Ambulance Number <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInputAmbulance"
                placeholder="Enter Ambulance Number"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label
                htmlFor="exampleFormControlInputAddress"
                className="form-label"
              >
                Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInputAddress"
                placeholder="Enter Address"
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

export default User_Properties;

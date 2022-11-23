import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbar,
  MDBCollapse,
  MDBNavbarNav,
} from "mdbreact";



class SearchPage extends Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleNavbarClick = () => {
    this.setState({
      collapsed: false,
    });
  };

  render() {
    return (
      <MDBCol md="12">
        <MDBNavbar
          color="warning"
          className="text-white darken-3"
          dark
          expand="md"
        >
          <MDBNavbarBrand>Centros&Refugios</MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.handleTogglerClick} />
          <Router>
            <MDBCollapse isOpen={this.state.collapsed} navbar>
              <MDBNavbarNav right onClick={this.handleNavbarClick}>
                <MDBFormInline className="md-form mr-auto m-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <MDBBtn
                    outline
                    color="white"
                    size="sm"
                    type="submit"
                    className="mr-auto"
                  >
                    Search
                  </MDBBtn>
                </MDBFormInline>
              </MDBNavbarNav>
            </MDBCollapse>
          </Router>
        </MDBNavbar>
      </MDBCol>
    );
  }
}

export default SearchPage;
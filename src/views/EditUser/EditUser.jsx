import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class EditUser extends Component {
  constructor() {
    super()
    this.state ={
         name:'',
         password: '',
         role: '',
         accno: ''
    }
  }

  handleSubmit = (event) => {
  var name  = document.getElementById('name').value;
	var password  = document.getElementById('password').value;
	var role  = document.getElementById('role').value;
  var accno  = document.getElementById('accno').value;
  
    if(name.length == 0) {
      alert("Name must not be empty");
      event.preventDefault();
		  event.stopPropagation();
    }

    if(password.length == 0) {
      alert("Password must not be empty");
      event.preventDefault();
      event.stopPropagation();
    }
  
    if(role.length == 0) {
      alert("Role must not be empty");
      event.preventDefault();
      event.stopPropagation();
    }
  
    if(accno.length == 0) {
      alert("Account number must not be empty");
      event.preventDefault();
      event.stopPropagation();
    } else if (accno.length != 11) {
      alert("Account number must have 11 characters");
      event.preventDefault();
      event.stopPropagation();
    }
   
  }

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "javascripts/editUserScript.js";
    script.async = true;

    document.body.appendChild(script);
}

  // componentDidMount() {
  //   fetch('/getCarPoolUser')
  //     .then(res => res.json())
  //     .then(user => this.setState({user: user}, () => console.log("successfully fetched CarPoolUser", user)))
  // }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="<%= userid %>"
                content={
                  <form id="html_form" action="editUser" role="form" onSubmit={this.handleSubmit}  method="post">
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      proprieties={[
                        {
                          label: "Name",
                          type: "text",
                          bsClass: "form-control",
                          //defaultValue: "<%= data[0].name%>",
                          name: "name",
                          id: "name",
                         // value: this.state.name
                        },
                        {
                          label: "Password",
                          type: "password",
                          bsClass: "form-control",
                          defaultValue: "michael23",
                          name: "password",
                          id: "password",
                         // value:this.state.password
                        },
                        {
                          label: "Role",
                          type: "number",
                          bsClass: "form-control",
                          name: "role",
                          id: "role",
                          //value:this.state.role
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Date of Birth",
                          type: "date",
                          bsClass: "form-control",
                          defaultValue: "Mike",
                          name: "dob",
                          id: "dob"
                        },
                        {
                          label: "Account Number",
                  
                          bsClass: "form-control",
                          defaultValue: "123456789012",
                          name: "accno",
                          id: "accno",
                          //value:this.state.accno,
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Address",
                          type: "text",
                          bsClass: "form-control",
                          defaultValue:
                            "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
                          name: "address",
                          id: "address"
                        }
                      ]}
                    />       
                    <Button bsStyle="info" pullRight fill type="submit">
                      Edit User
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Mike Andrew"
                userName="michael24"
                description={
                  <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>>
      </div>
    //    <script src="javascripts/editUserScript.js"></script>
    //    <script>
    //    (function() {
    //      window.addEventListener('load', function() {
    //        var forms = [document.getElementById('html_form')];
    //        var validation = Array.prototype.filter.call(forms, function(form) {
    //          form.addEventListener('submit', check, false);
    //        });
    //      }, false);
    //          })();
    //  </script>
    );
  }
}

export default EditUser;

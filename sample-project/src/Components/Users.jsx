import React, { Component } from "react";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: usersDetails,
      user: {
        name: "",
        username: "",
        email: "",
        password: "",
      },
    };
  }

  handleChange = (e) => {
    let newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };
  handleEdit = (user) => {
    this.setState({ user });
  };
//   async componentDidMount() {
//     const response = await (await fetch("http://localhost:3000/users")).json();
//     console.log(response);
//     this.setState({ data: response });
//   }
  handleSubmit=()=>{
    let newUsers = [...this.state.data];
    newUsers.forEach((usr,i)=>{
        if(usr.email === this.state.user.email){
            newUsers[i] = this.state.user
        }
    })
    this.setState({data:newUsers})
    console.log(this.state.user)
  }
  render() {
    return (
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th>Edit </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      this.handleEdit(user);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              ID
            </label>
            <input
              type="email"
              class="form-control"
              name="id"
              value={this.state.user.id}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              value={this.state.user.email}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              User Name
            </label>
            <input
              type="email"
              class="form-control"
              name="username"
              value={this.state.user.username}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              name="password"
              value={this.state.user.password}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </div>

          <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}


const usersDetails = [
    {
      "id": 371,
      "email": "Ram@magna.org",
      "username": "murali",
      "password": "EGXxA"
    },
    {
      "id": 372,
      "email": "Ravi@consequat.net",
      "username": "APointelin",
      "password": "P0zQl"
    },
    {
      "id": 373,
      "email": "Naveen@fringilla.net",
      "username": "AClinger",
      "password": "LSc3k"
    },
    {
      "id": 374,
      "email": "Arun@tincidunt.org",
      "username": "LPfeifer",
      "password": "7bKD1"
    },
    {
      "id": 375,
      "email": "DWesley@placerat.com",
      "username": "YTarbox",
      "password": "Ef5ci"
    }
  ]
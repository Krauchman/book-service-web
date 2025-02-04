import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBView,
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from "mdbreact";
import BookList from "./sections/BookList";
import BookAddForm from "./sections/BookAdd";

class TablesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalBook: false
    };
  }

  toggleBook = () => {
    this.setState({
      modalBook: !this.state.modalBook
    });
  };

  render() {
    return (
      <>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header blue darken-2">
                <h4 className="h4-responsive text-white">Basic tables</h4>
              </MDBView>
              <MDBCardBody>
                <BookAddForm />
                <h3 className="mt-5 text-left">
                  <strong>
                    Currently you have these books in your account:
                  </strong>
                </h3>
                <p />
                <BookList
                  userType="currentHolder"
                  modalBook={this.state.modalBook}
                  toggleBook={this.toggleBook}
                />
                <h3 className="mt-5 text-left">
                  <strong>Books owned by you:</strong>
                </h3>
                <p />
                <BookList
                  userType="owner"
                  modalBook={this.state.modalBook}
                  toggleBook={this.toggleBook}
                />
                <h3 className="mt-5 text-left">
                  <strong>Marked books:</strong>
                </h3>
                <p />
                <BookList
                  markedBooks
                  modalBook={this.state.modalBook}
                  toggleBook={this.toggleBook}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </>
    );
  }
}

export default TablesPage;

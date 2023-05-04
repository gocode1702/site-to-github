import React from "react";
import profile from "../assets/img/profil emogis s.jfif"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import "../App.css";

export default function Add() {
  return (
    <section className="vh-100">
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol
            md="10"
            lg="8"
            xl="6"
            style={{ padding: "0px", maxWidth: "1000px" }}
          >
            <MDBCard>
              <MDBCardBody className="p-4">
                <div className="d-flex flex-start w-100">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src={profile}
                    alt="profile"
                    width="65"
                    height="65"
                  />

                  <div
                    className="w-100"
                    style={{ margin: "40px" }}
                  >
                    <MDBTypography tag="h5" >Add a comment</MDBTypography>
                    <div >
                      <a href="">
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                      </a>
                    </div>
                    <MDBTextArea label="What is your view?" rows={4} />

                    <div className="d-flex justify-content-between mt-3">
                      <MDBBtn color="success">Feedback👉</MDBBtn>
                      <MDBBtn color="danger">
                        Send 🙂 <MDBIcon fas icon="long-arrow-alt-right ms-1" />
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
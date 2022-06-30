import React from "react";
import { Table } from "react-bootstrap";

const CardsDetails = () => {
  return (
    <div>
      <div className="container mt-2">
        <h2 className="text-center">Item Details</h2>
        <section className="container mt-3">
          <div className="itemsdetails d-flex align-items-center justify-content-center">
            <div className="items_img">
              <img
                src="https://b.zmtcdn.com/data/pictures/7/19639627/94c0a4cf15c02d3982d154e2c5dd8cbb_o2_featured_v2.jpg"
                style={{ height: "16rem", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant: </strong>Masala Theory
                    </p>
                    <p>
                      <strong>Price: ₹</strong> 300
                    </p>
                    <p>
                      <strong>Dishes: </strong>North Indian, Biryani,Mughlai
                    </p>
                    <p>
                      <strong>Total: ₹</strong> 300
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Rating: </strong>
                      <span
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "2px 5px",
                          borderRadius: "5px",
                        }}
                      >
                        3.5 ★
                      </span>
                    </p>
                    <p>
                      <strong>Order Review: </strong>
                      <span>1175 + order from here recently</span>
                    </p>
                    <p>
                      <strong>Remove: </strong>
                      <span>
                        <i
                          className="fas fa-trash"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                        ></i>
                      </span>
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardsDetails;

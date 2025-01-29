import React from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { txnid , amt , status } = useParams(); // Access "orderId" and "status"

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Order Details</h2>
      <p><strong>Order ID:</strong> {txnid}</p>
      <p><strong>Amount:</strong> {amt}</p>
      <p><strong>Status:</strong> {status}</p>
     
    </div>
  );
};

export default OrderDetails;

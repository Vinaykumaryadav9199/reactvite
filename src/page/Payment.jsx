import { useState } from 'react'
import axios from 'axios'

function Payment() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [paymentform , setpaymentform] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(import.meta.env.VITE_URL)

    if (!formData.name || !formData.email || !formData.amount) {
      alert("Please fill out all fields!");
      return;
    }

    const data = {
      firstname : formData.name,
      email : formData.email,
      amount : formData.amount
    }
    axios.post(`${import.meta.env.VITE_URL}/api/initiate`, data ).then((res)=>{
        setpaymentform(res.data)
      
    }).catch((err)=>{
        console.log(err)
    })
 console.log(paymentform)
    setSubmitted(true);
  };

  const pay = ()=>{
     const payform = document.getElementById("payment_post")
     if (payform)
     {
       payform.submit()
     }
  }
  if (submitted) {
    return (
      <div>
        <div  dangerouslySetInnerHTML={{__html :paymentform}}>

        </div>
        {console.log(paymentform)}
        <h2>Thank You for Your Donation, {formData.name}!</h2>
        <p>You have donated ${formData.amount}.</p>
        <button onClick={pay}>pay</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Donation Amount ($):
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
        </label>
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Donate
      </button>
    </form>
  );


  
}

export default Payment

import { useState } from "react";

export default function Form() {

  const[formData, setFormData] = useState({
    email:""
  })

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    if(!formData.email.includes("@")){
      console.log("bu mail geçersiz")
      return
    }
    setIsSubmitted(true);
  }
  function handleChange(e){
    const { value, name } = e.target;
    setFormData({
      ...formData,[name] : value
    })
  }
 

  return (
    <div className="container">
      {!isSubmitted ? (
        // İlk ekran
        <div className="all-in-container">
          <div className="hero">
            <img className="mobile" src="/images/header.png" alt="" />
            <img className="desktop" src="/images/hero-desktop.png" alt="" />
          </div>
          <div className="main-container">
            <div className="main-header">
              <h1>Stay updated!</h1>
              <p>
                Join 60,000+ product managers receiving monthly updates on:
              </p>
            </div>
            <div className="main-info">
              <div className="item">
                <input type="checkbox" name="" id="" />
                <span>Product discovery and building what matters</span>
              </div>
              <div className="item">
                <input type="checkbox" name="" id="" />
                <span>Measuring to ensure updates are a success</span>
              </div>
              <div className="item">
                <input type="checkbox" name="" id="" />
                <span>And much more!</span>
              </div>
            </div>
            <div className="form-container">
              <h4>Email address</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="email@company.com"
                  onChange={handleChange}
                  value={formData.email}
                />
                <button>Subscribe to monthly newsletter</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        // İkinci ekran
        <div className="success-container">
          <img src="/images/hero-thanks.svg" alt="" />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <strong>{formData.email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
          <button onClick={() => setIsSubmitted(false)}>Dismiss message</button>
        </div>
      )}
    </div>
  );
}
export const Contact = () => {
  const handleFormSubmit  = (formData) => {
      const formfieldData = Object.fromEntries(formData.entries());
      console.log(formfieldData);
      
  }
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-form">
              <form action={handleFormSubmit} >
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="username"
                  className="form-control"
                  required
                  autoComplete="off"
                />
                <input
                  type="email"
                  placeholder="Enter Your email"
                  name="email"
                  className="form-control"
                  required
                  autoComplete="off"
                  />
                <textarea
                  placeholder="Enter Your Message"
                  name="textarea"
                  className="form-control"
                  required
                  rows="10"
                  autoComplete="off"
                />
                <button className="submit-btn" value='send' type="submit" >Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

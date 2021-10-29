import React from "react";

const ContactUs = () => {
  return (
    <React.Fragment>
    <div className="container" style={{ borderStyle: "double" }}>
      <div className="container">
        <h1 style={{ color: "blue" }}>CONTACT US</h1>

        <hr />
        <h4 style={{ fontWeight: "bold" }}>ALL GENERAL QUERIES</h4>
        <p>info@hopesfoundationindia.org</p>
        <br></br>

        <h4 style={{ fontWeight: "bold" }}>DONATION RELATED QUERIES</h4>
        <h6 style={{ fontWeight: "bold" }}>FOR NEW DONORS</h6>
        <p>Chanchana - 8145678939</p>
        <p>donation@hopesfoundationindia.org</p>
        <br></br>
        <h6 style={{ fontWeight: "bold" }}>FOR EXISTING DONORS</h6>
        <p>Steffi - 9810277244</p>
        <p>donorcare@hopesfoundationindia.org</p>
        <br></br>
        <h1 style={{ color: "blue" }}>PARTNERSHIPS & SUPPORT</h1>
        <hr/>
        <h4 style={{ fontWeight: "bold" }}> CORPORATE PARTNERSHIPS </h4>
        <p>Swatantra</p>
        <p>cp@hopesfoundationindia.org</p>
        <br></br>
        <h6 style={{ fontWeight: "bold" }}>REGIONAL CENTERS</h6>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <p style={{ fontWeight: "bold" }}>For West</p>
              <p>Swatantra</p>
              <p>alliances@hopesfoundationindia.org</p>
            </div>

            <div className="col-sm-3">
              <p style={{ fontWeight: "bold" }}>For South</p>
              <p>John - 9920363999</p>
              <p>cp.mum@hopesfoundationindia.org</p>
            </div>
            <div className="col-sm-3">
              <p style={{ fontWeight: "bold" }}> For North</p>
              <p>Sapna - 9844134243</p>
              <p>Archana - 9880602956</p>
              <p>cp.blr@hopesfoundationindia.org</p>
            </div>
            <div className="col-sm-3">
              <p style={{ fontWeight: "bold" }}>CORPORATE FOUNDATIONS & PSU</p>
              <p>Swatantra</p>
              <p>cp.del@hopesfoundationindia.org</p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
         <hr/>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <p style={{ fontWeight: "bold" }}>EVENT RELATED QUERIES </p>
              <p>Write to Rajeev at events@hopesfoundationindia.org</p>
            </div>
            <div className="col-sm-4">
              <p style={{ fontWeight: "bold" }}> CELEBRITY ASSOCIATIONS </p>
              <p>Write to Swatantra at sm@hopesfoundationindia.org</p>
            </div>
            <div className="col-sm-4">
              <p style={{ fontWeight: "bold" }}>
                {" "}
            EDUCATIONAL INSTITUTIONS{" "}
              </p>
              <p>Write to Comm at colleges@hopesfoundationindia.org</p>
            </div>
          </div>
        </div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <p style={{ fontWeight: "bold" }}>CAREER OPPORTUNITIES </p>
              <p>Write to Shilpa at jobs@hopesfoundationindia.org</p>
            </div>
            <div className="col-sm-4">
              <p style={{ fontWeight: "bold" }}> INTERNSHIP OPPORTUNITIES </p>
              <p>Write to Shilpa Panwar at intern@hopesfoundationindia.org</p>
            </div>
            <div className="col-sm-4">
              <p style={{ fontWeight: "bold" }}>
                {" "}
                VOLUNTEERING OPPORTUNITIES{" "}
              </p>
              <p>Write to HR at volunteer@hopesfoundationindia.org</p>
            </div>
          </div>
        </div>
        <br/>
        <h3> Visit Us Here</h3>
         
        <h1 style={{ color: "blue" }}>HEAD OFFICE</h1>
            <hr/>
            <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p style={{ fontWeight: "bold" }}>KOLKATA</p>
              <p>Flat No. 1-B, 1st Floor, 55, Charu Chandra Place East Police Station</p>
              <p>Charu Market, Kolkata - 700033</p>
              <p>Phone: 033-24227084</p>
              <p>E-mail: kolkata@smilefoundationindia.org</p>
              
            </div>
            <div className="col-sm-6">
              <p style={{ fontWeight: "bold" }}>BANGALORE </p>
              <p>NO.14, Buddha Vihar Road, Sinnou Elegance Apartment, Flat No.103,</p>
              <p>Frazer Town, Banglore - 560005</p>
              <p>Phone: 080-41320797</p>
              <p>Email: bangalore@smilefoundationindia.org</p>
             
            </div>
            
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p style={{ fontWeight: "bold" }}>HYDERABAD </p>
              <p>H. No. 12-13-1143, Near Narayana High School Lane</p>
              <p>Secunderabad - 500017</p>
              <p>Phone: +91-9110638055</p>
              <p>E-mail: hyd@hopesfoundationindia.org</p>
              
            </div>
            <div className="col-sm-6">
              <p style={{ fontWeight: "bold" }}>MUMBAI </p>
              <p>101, First Floor Gladdiola Above Kotak Bank, Hanuman Road,</p>
              <p>Ville Parle East, Mumbai - 400 057</p>
              <p>Phone: +91-22-26104106/07</p>
              <p>E-mail: mumbai@smilefoundationindia.org</p>
              
            </div>
            
          </div>
        </div>

      </div>
      <br></br>
    </div>
    <hr/>
    </React.Fragment>
  );
};
export default ContactUs;

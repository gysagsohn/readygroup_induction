import React from "react";
import "../../styles/sections/CompanyDetails.css";

export default function CompanyDetails() {
  return (
    <section className="company-details-section" id="details">
      <div className="company-details-content">
        <h2>Company Details</h2>
        <p><strong>Entity Name:</strong> Ready Group Pty Ltd</p>
        <p><strong>Trading Name:</strong> Ready Group</p>
        <p><strong>ABN:</strong> 17 154 074 807</p>
        <p><strong>Office Address:</strong> 412/2–8 Brookhollow Ave, Norwest NSW 2153</p>
        <p><strong>Postal Address:</strong> PO BOX 166, North Ryde BC NSW 1670</p>
        <p><strong>Vineyard Yard:</strong> 32 Chapman Road, Vineyard NSW 2765</p>
        <p><strong>Marrickville Yard:</strong> 43 Farr Street, Marrickville NSW 2204</p>
        <p><strong>Phone:</strong> 1300 764 753</p>
      </div>
    </section>
  );
}

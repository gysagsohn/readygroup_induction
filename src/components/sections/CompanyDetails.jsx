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
          <p><strong>Head Office:</strong> 412/2–8 Brookhollow Ave, Norwest NSW 2153</p>
          <p><strong>Vineyard Yard:</strong> 32 Chapman Road, Vineyard NSW 2765</p>
          <p><strong>Phone:</strong> 1300 764 753</p>
          <p><strong>Office Mobile:</strong> 0419267941</p>
          <p><strong>Website:</strong> <a href="https://readygroup.au" target="_blank" rel="noopener noreferrer">readygroup.au</a></p>
        </div>
    </section>
  );
}

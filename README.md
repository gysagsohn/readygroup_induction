# Ready Group Induction

## 📌 Project Overview
This repository contains the **Ready Group Induction & Employee Handbook**, designed to serve as a structured digital resource for employees, contractors, and stakeholders. The project aims to provide an accessible, user-friendly **frontend-only** solution for handbook management, similar to AirMason.

---

## ✨ Current Sections Built

- ✅ Welcome Section  
- ✅ About Ready Group  
- ✅ Who We Are  
- ✅ Company Details  
- ✅ Our Vision, Mission & Values (Split layout with image + color fill)  
- ✅ Our Vision  
- ✅ Our Mission  
- ✅ Our Core Values (Flexbox layout with 4 top / 3 bottom alignment)  
- ✅ Core & Additional Services with image cards  
- ✅ Company Objectives & Growth Plans  
- ✅ Quality, Environmental, and OH&S Objectives  
- ✅ Employee Handbook & Workplace Policies  
- ✅ Employee Policies & Resources (PDF format planned, placeholder links included)  
- ✅ Employee Benefits & Perks  
- ✅ Benefits Breakdown (2x2 grid with icons and description)  
- ✅ Contact Us (Full-page hero with overlay)  
- ✅ Leadership Team (2x2 layout with image, role, name, email, phone)  
- ✅ Global Scroll Menu (`menu.svg` logo-based)  
- ✅ Dropdown Menu with Scroll + Outside Click + Mobile Scroll Fix

---

### 🔧 Still To Do (📌 On Trello Board)
- ⛔ Update Hero image (someone is smoking)
- ⛔ Change Contact Us image (some eyes closed)
- ⛔ Add proper icons to all benefits and values
- ⛔ Test full scroll performance and responsiveness
- ⛔ Final polish of PDF link functionality
- ⛔ Adjust animations or add AOS (Animate On Scroll) *[planned]*

---

## 📐 Figma-Based UI Design
Designed in **Figma** with structured visual guides, including consistent type, colors, grid layout, and section breakdown.

![Figma Wireframe Preview](./src/assets/Ready%20Group%20Employee%20Handbook%20-%20wireframe%20(6).png)

---

## 🚀 Tech Stack

| Stack | Description |
|-------|-------------|
| ⚛️ React + Vite | Fast front-end framework and build tool |
| 💅 Native CSS with Flexbox | No UI libraries — clean, scalable layouts |
| 🔐 LocalStorage Auth | Client-side password gate (no backend) |
| 📱 Fully Responsive | Layout adapts to mobile, tablet, and desktop |
| 🧠 Figma Design System | Components designed before coding |
| 🚀 Netlify Deployment (Planned) | Hosting and live preview support |

---

## 🔐 Password Protection
- 🔒 Password-protected with `localStorage`
- 🔒 Logs out on refresh
- 🔒 No backend used

---

## 📂 Project Structure
```plaintext
src/
│── components/
│   ├── PrimaryButton.jsx
│   ├── ProtectedRoute.jsx
│   ├── SectionNavMenu.jsx
│   ├── sections/
│       ├── WelcomeSection.jsx
│       ├── AboutSection.jsx
│       ├── WhoWeAre.jsx
│       ├── CompanyDetails.jsx
│       ├── VisionMissionIntro.jsx
│       ├── OurVision.jsx
│       ├── OurMission.jsx
│       ├── CoreValues.jsx
│       ├── OurServicesSection.jsx
│       ├── OurCoreServices.jsx
│       ├── AdditionalServices.jsx
│       ├── CompanyObjectives.jsx
│       ├── QualityObjectives.jsx
│       ├── EnvironmentalObjectives.jsx
│       ├── OhsObjectives.jsx
│       ├── EmployeeHandbook.jsx
│       ├── EmployeeResources.jsx
│       ├── EmployeeBenefits.jsx
│       ├── BenefitsBreakdown.jsx
│       ├── ContactUs.jsx
│       └── LeadershipTeam.jsx
│── pages/
│   └── HandbookPage.jsx
│── styles/
│   ├── AuthStyles.css
│   ├── ButtonStyles.css
│   ├── Layout.css
│   ├── HandbookPage.css
│   └── sections/
│       ├── (One .css file per section)
│── utils/
│   └── auth.js
│── App.jsx
│── index.css
│── main.jsx


```

# Draft 1 of content for website
# Welcome to Ready Group

## 1. About Ready Group

### Who We Are
Ready Group is a leading provider of civil construction and excavation services, specializing in advanced solutions for infrastructure projects. Established in 2011, we are committed to delivering high-quality, reliable, and innovative services to our clients across Australia.

### Company Details
- **Entity Name:** Ready Group Pty Ltd  
- **Trading Name:** Ready Group  
- **ABN:** 17 154 074 807  
- **Office Address:** 412/2-8 Brookhollow Ave, Norwest NSW 2153  
- **Postal Address:** PO BOX 166, North Ryde BC NSW 1670  
- **Vineyard Yard:** 32 Chapman Road Vineyard NSW 2765  
- **Marrickville Yard:** 43 Farr Street Marrickville NSW 2204  
- **Phone:** 1300 764 753  

---

## 2. Our Vision, Mission & Values

### **Vision Statement**
*"To provide the construction industry with a quality service that aids in the growth and development of Australia's infrastructure."*

### **Mission Statement**
*"We aim to maintain the highest levels of professionalism, integrity, honesty, and fairness in our relationships with Employees, Clients, Subcontractors, and Suppliers."*

### **Core Values**
- **Integrity** – Commitment to honest and ethical business practices.  
- **Reliability** – Consistent, high-quality service delivery.  
- **Innovation** – Embracing cutting-edge techniques for efficiency.  
- **Safety** – Prioritizing worker and public safety.  
- **Environmental Stewardship** – Sustainable operations with minimal ecological impact.  
- **Continuous Improvement** – Ongoing enhancement of services and skills.  
- **Customer-Centric Approach** – Meeting and exceeding client needs.  

---

## 3. Services Offered

### **Core Services**
- Vacuum Truck Excavation  
- Civil Services  
- Liquid Waste Management  
- Jetting & Drain Cleaning  
- Street Sweeping  
- Water Cart Services  

### **Additional Services**
- Service Location & Survey *(provided by a subcontractor)*  
- CCTV Inspections *(provided by a subcontractor)*  

---


## 4. Org Chart
add image of org chart


---


## 5. Company Objectives & Growth Plans

### **Quality Objectives**
- Provide an exceptional and reliable service.  
- Deliver high-caliber work through dedicated and well-trained personnel, while upholding ethical standards and professionalism.  
- Foster positive relationships with clients through effective communication and feedback.  
- Satisfy requirements set by clients, industry regulators, and employees.  

### **Environmental Objectives**
- Promote efficient resource utilization and waste management principles.  
- Minimize adverse environmental impacts (noise, vibration, air & water quality, land contamination).  
- Promote environmental awareness among employees and subcontractors via regular training.  
- Comply with all applicable environmental legislation and legal obligations.  

### **OH&S Objectives**
- Foster a safety culture with proactive incident reporting and hazard mitigation.  
- Encourage employee participation in risk management through consultation, education, and training.  
- Provide adequate resources to maintain high safety standards.  
- Ensure compliance with all relevant legislation and industry guidelines.  

---

## 6. Employee Handbook & Workplace Policies

### **Induction & Onboarding Process**
- Employee Handbook  
- Code of Conduct  

### **Workplace Policies**
- Quality Policy  
- Environmental Policy  
- Occupational Health & Safety (OH&S) Policy  
- Social Media Policy  
- Workplace Surveillance Policy  
- Drug & Alcohol Policy  
- Safe Work Method Statements (SWMS)  
- Leave Policy  
- Mobile Phone Policy  
- Chain of Responsibility (COR) Policy  
- Fitness for Work Policy  
- Operator Break Policy  

---

## 7. Employee Benefits & Perks

### **Training & Development**
- Opportunities for skill enhancement.  

### **Career Progression**
- Internal job application process.  

### **Performance Reviews & Feedback**
- Structured assessment and improvement plans.  

### **Work Anniversaries & Recognition**
- Acknowledgment of employee milestones.  

---

## 8. Company Culture & Community Involvement

### **Commitment to Equality & Belonging**
- We foster a culture of inclusivity and gender diversity within our organization.  

### **Sustainability & Climate Responsibility**
- Measurement and offset of Scope 1 and Scope 2 emissions to mitigate climate risks.  

### **Corporate Social Responsibility (CSR)**
- Commitment to donating 1% of annual profits to charitable causes.  
- Safe workplace initiatives for employee well-being.  

---

## 9. Contact & Support

For any support, reach out to HR and/or your direct manager.

### **Contact Details**
#### **Managing Director**  
- **Matthew Spaninks**  
- 📧 [M.spaninks@readygroup.au](mailto:M.spaninks@readygroup.au)  

#### **Chief Operations Officer**  
- **Pascal Beylacq**  
- 📞 0450 244 977  
- 📧 [p.beylacq@readygroup.au](mailto:p.beylacq@readygroup.au)  

#### **Operations Manager**  
- **Michael Kearney**  
- 📞 0401 050 403  
- 📧 [M.kearney@readygroup.au](mailto:M.kearney@readygroup.au)  

#### **People & Compliance Manager**  
- **Katherine Burnett**  
- 📞 0419 267 941  
- 📧 [k.burnett@readygroup.au](mailto:k.burnett@readygroup.au)  
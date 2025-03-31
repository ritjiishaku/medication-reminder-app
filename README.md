```md
# **Medication Reminder App**  

The **Medication Reminder App** is a web application designed to help users **track, manage, and receive reminders** for their medications. With an intuitive interface and smart features, it ensures users **never miss a dose.**  

---

## **Features**  

### **🏠 Home Page**  
- **Header** – Displays the app logo and navigation links.  
- **Hero Section** – Includes a **main heading, subheading, and a CTA button** to encourage user engagement.  
- **Why Choose Us Section** – Showcases **three key benefits** of using the app.  
- **Call-to-Action (CTA) Section** – Encourages users to start tracking their medication with a **CTA button**.  

### **📋 Medication List Page**  
- Displays **a list of medications** when added.  
- If no medications are added, shows a **message with a button** to add a new one.  

### **➕ Add Medication (Modal Popup)**  
- **Title** and input fields for:  
  - **Medication Name**  
  - **Dosage** (Dropdown)  
  - **Set Time & Date** (With a Calendar Icon)  
  - **Frequency** (Dropdown)  
  - **Save Button** to add medication.  

### **💊 Medication Card**  
- Displays **drug name, dosage, time & date, and status**.  
- **Toggle Reminder** – Enables medication alerts.  
- **Edit Button** – Allows modifying medication details.  
- **Delete Button** – Removes the medication.  

### **✏️ Edit Medication (Modal Popup)**  
- Prefilled input fields for **medication name, dosage, time & date, frequency**.  
- **Save Changes Button** to update details.  

### **🗑️ Delete Confirmation (Modal Popup)**  
- Displays a **confirmation message** before deleting.  
- **Delete Button** to confirm removal.  

### **🔔 Set Reminder Message**  
- **Popup notification** when the **reminder toggle** is turned on.  
- Displays **medication name, dosage, and next scheduled time**.  

### **🌐 Navigation**  
- **Header (Present on All Pages)** – Contains **logo and navigation links** (Home, Medications).  
- **Footer (Present on All Pages)** – Displays the **logo and copyright text**.  

---

## **Tech Stack**  

- **React** – Frontend framework for building the UI.  
- **Vite** – Fast build tool for optimized performance.  
- **Tailwind CSS** – Modern styling framework for a clean UI.  
- **RxNav API** – Provides smart medication suggestions.  

---

## **Installation & Setup**  

Follow these steps to run the **Medication Reminder App** locally:  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/medication-reminder-app.git
cd medication-reminder-app
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Start the Development Server**  
```sh
npm run dev
```

The app will be available at **http://localhost:5173**.  

---

## **Usage Guide**  

### **🔹 Adding a Medication**  
1. Click **Add Medication**.  
2. Fill in **medication details**.  
3. Click **Save Medication**.  

### **🔹 Editing a Medication**  
- Click the **Edit Button** on a medication card.  
- Modify the details and **save changes**.  

### **🔹 Deleting a Medication**  
- Click the **Delete Button** and confirm removal.  

### **🔹 Setting a Reminder**  
- Toggle **Reminder On** to receive notifications.  

---

## **Screenshots**  

| Home Page | Medication List | Add Medication |
|-----------|----------------|---------------|
| ![Home](https://via.placeholder.com/300) | ![List](https://via.placeholder.com/300) | ![Add](https://via.placeholder.com/300) |

---

## **Contributing**  

### **How to Contribute**  
1. **Fork** this repository.  
2. **Create a new branch**:  
   ```sh
   git checkout -b feature-name
   ```
3. **Commit your changes**:  
   ```sh
   git commit -m "Added feature-name"
   ```
4. **Push to your branch**:  
   ```sh
   git push origin feature-name
   ```
5. **Open a Pull Request**.  

---

## **License**  

This project is licensed under the **MIT License**.  

---

## **Contact**  

🔗 **GitHub:** [your-username](https://github.com/your-username)  
📧 **Email:** your.email@example.com  

---

🚀 **Stay on track with your medications using the Medication Reminder App!**
```
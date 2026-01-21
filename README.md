# 🦷 Teeth Wizard – Online Dental Appointment Booking Platform

**Teeth Wizard** is a modern, user-friendly dental appointment booking web application that allows users to explore treatments, book appointments, receive email confirmations, and manage their bookings seamlessly.

The platform is designed with a clean UI, responsive layout, and smooth user experience, making dental care scheduling simple and efficient.

---

## 🌐 Live Demo
🔗 https://teeth-wizard-website-5f645.web.app
---

## ✨ Features

### 🧑‍⚕️ Treatment Exploration
- Browse available dental treatments with:
  - Treatment image
  - Description
  - Cost
  - Duration
  - “What to Expect” details

### 📅 Appointment Booking
- Book appointments through an intuitive modal form
- Date picker with **future-date validation**
- Time slot selection appears **only after date selection**
- Prevents duplicate bookings for the same treatment, date, and time slot

### 📧 Email Confirmation
- Automatic email confirmation using **EmailJS**
- Professional, branded email template
- Includes:
  - Treatment details
  - Appointment date & time slot
  - Booking timestamp (`Booked At`)
  - Client information

### 🗂 Appointment Management
- View all booked appointments
- Display:
  - Treatment name & image
  - Appointment date
  - Time slot
  - Cost & duration
  - Booking time
- Cancel appointments with confirmation modal

### 🔐 Authentication Support
- User authentication via **Auth Context**
- Appointments are user-specific (filtered by email)

### 💾 Local Storage Persistence
- Appointments stored in browser `localStorage`
- Data remains available after page refresh

### 🔔 Notifications
- Toast notifications for:
  - Successful bookings
  - Duplicate appointment warnings
  - Errors and cancellations

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **React Router DOM**
- **Tailwind CSS**
- **DaisyUI**
- **Lucide React Icons**

### Utilities & Libraries
- **EmailJS** – Email notifications
- **React Toastify** – Alerts & notifications
- **LocalStorage API** – Appointment persistence

---


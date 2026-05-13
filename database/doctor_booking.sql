CREATE DATABASE IF NOT EXISTS doctor_booking;
USE doctor_booking;

CREATE TABLE IF NOT EXISTS appointments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    appointment_id VARCHAR(50) UNIQUE NOT NULL,
    patient_name VARCHAR(100) NOT NULL,
    doctor_name VARCHAR(100) NOT NULL,
    specialty VARCHAR(100),
    appointment_date DATE NOT NULL,
    appointment_time VARCHAR(20) NOT NULL,
    email VARCHAR(120),
    reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO appointments
(appointment_id, patient_name, doctor_name, specialty, appointment_date, appointment_time, email, reason)
VALUES
('APT-DEMO-1001','Rahul Sharma','Dr. Amit Verma','Cardiologist','2026-05-20','10:00 AM','rahul@example.com','Regular checkup');

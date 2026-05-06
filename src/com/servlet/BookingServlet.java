package com.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.db.DBConnection;

@WebServlet("/book")
public class BookingServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        String appointmentId = "APT-" + System.currentTimeMillis();

        String patientName = request.getParameter("patientName");
        String doctorName = request.getParameter("doctorName");
        String specialty = request.getParameter("specialty");
        String appointmentDate = request.getParameter("appointmentDate");
        String appointmentTime = request.getParameter("appointmentTime");
        String email = request.getParameter("email");
        String reason = request.getParameter("reason");

        try {

            Connection con = DBConnection.getConnection();

            String query = "insert into appointments "
                    + "(appointment_id, patient_name, doctor_name, specialty, "
                    + "appointment_date, appointment_time, email, reason) "
                    + "values (?, ?, ?, ?, ?, ?, ?, ?)";

            PreparedStatement ps = con.prepareStatement(query);

            ps.setString(1, appointmentId);
            ps.setString(2, patientName);
            ps.setString(3, doctorName);
            ps.setString(4, specialty);
            ps.setString(5, appointmentDate);
            ps.setString(6, appointmentTime);
            ps.setString(7, email);
            ps.setString(8, reason);

            ps.executeUpdate();

            response.sendRedirect(
                    "success.jsp?id=" + appointmentId
            );

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
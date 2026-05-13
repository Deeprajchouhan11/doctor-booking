package com.db;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {

    private static Connection con;

    public static Connection getConnection() {

        try {
            if (con == null || con.isClosed()) {

                Class.forName("com.mysql.cj.jdbc.Driver");

                String url = "jdbc:mysql://localhost:3306/doctor_booking?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC";
                String username = "root";
                String password = "1234";

                con = DriverManager.getConnection(url, username, password);

                System.out.println("MySQL Database Connected Successfully");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return con;
    }
}

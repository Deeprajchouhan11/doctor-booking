<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Booking Success</title>
<style>
body{
font-family:Arial;
background:#f5f5f5;
padding:40px;
text-align:center;
}
.card{
background:white;
padding:30px;
max-width:500px;
margin:auto;
border-radius:10px;
box-shadow:0 2px 10px rgba(0,0,0,0.1);
}
h1{color:green;}
</style>
</head>
<body>
<div class="card">
<h1>Appointment Booked Successfully</h1>
<h2>Your Appointment ID:</h2>
<h3><%= request.getParameter("id") %></h3>
<a href="index.html">Go Back Home</a>
</div>
</body>
</html>

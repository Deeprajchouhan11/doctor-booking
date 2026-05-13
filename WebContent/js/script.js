function signup(){
    let name=document.getElementById("name")?.value;
    let email=document.getElementById("email")?.value;
    let password=document.getElementById("password")?.value;

    if(!name||!email||!password){
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("user",JSON.stringify({
        name,email,password
    }));

    alert("Account Created");
    location.href="login.html";
}

function login(){
    let email=document.getElementById("loginEmail")?.value;
    let password=document.getElementById("loginPassword")?.value;

    let user=JSON.parse(localStorage.getItem("user"));

    if(!user){
        alert("Create account first");
        return;
    }

    if(email===user.email && password===user.password){
        alert("Login Successful");
        location.href="profile.html";
    }else{
        alert("Wrong Login");
    }
}

function logout(){
    location.href="index.html";
}

function selectDoctor(name,specialty){
    localStorage.setItem("doctor",JSON.stringify({
        name,specialty
    }));
    location.href="booking.html";
}

function goPayment(){
    let doctor=JSON.parse(localStorage.getItem("doctor"));

    let name=document.getElementById("patientName").value;
    let email=document.getElementById("email").value;
    let date=document.getElementById("date").value;
    let time=document.getElementById("time").value;
    let reason=document.getElementById("reason").value;

    localStorage.setItem("appointmentTemp",JSON.stringify({
        name,email,date,time,reason,
        doctor:doctor.name,
        specialty:doctor.specialty
    }));

    location.href="payment.html";
}

function payNow(mode){
    let temp=JSON.parse(localStorage.getItem("appointmentTemp"));

    let data={
        id:"APT-"+Date.now(),
        ...temp,
        payment:mode
    };

    localStorage.setItem("appointment",JSON.stringify(data));

    location.href="success.html";
}

function doctorLogin(){
    location.href="doctor-dashboard.html";
}

function adminLogin(){
    let email=document.getElementById("adminEmail")?.value;
    let pass=document.getElementById("adminPassword")?.value;

    if(email==="admin@bansal.com" && pass==="admin123"){
        location.href="admin-dashboard.html";
    }else{
        alert("Wrong Admin Login");
    }
}

function addDoctor(){
    alert("Doctor Added Successfully");
    location.href="doctors.html";
}

function downloadPDF(){
    let data=JSON.parse(localStorage.getItem("appointment"));

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFillColor(14,116,244);
    doc.rect(0,0,210,35,"F");

    doc.setTextColor(255,255,255);
    doc.setFontSize(24);
    doc.text("BANSAL HOSPITAL",20,20);
    doc.setFontSize(12);
    doc.text("Professional Appointment Receipt",20,28);

    doc.setTextColor(0,0,0);

    let y=60;

    doc.text("Appointment ID: "+data.id,20,y); y+=15;
    doc.text("Patient Name: "+data.name,20,y); y+=15;
    doc.text("Doctor: "+data.doctor,20,y); y+=15;
    doc.text("Specialty: "+data.specialty,20,y); y+=15;
    doc.text("Date: "+data.date,20,y); y+=15;
    doc.text("Time: "+data.time,20,y); y+=15;
    doc.text("Payment Mode: "+data.payment,20,y); y+=30;

    doc.line(130,250,190,250);
    doc.text(data.doctor,145,258);

    doc.save("Bansal-Appointment.pdf");
}
let selectedDoctor = "";
let selectedSpecialty = "";

function selectDoctor(doctor, specialty){

    selectedDoctor = doctor;
    selectedSpecialty = specialty;

    document.getElementById("bookingForm").style.display = "block";
}

function bookNow(event){

    event.preventDefault();

    let patientName =
        document.getElementById("patientName").value;

    let email =
        document.getElementById("email").value;

    let date =
        document.getElementById("date").value;

    let time =
        document.getElementById("time").value;

    let reason =
        document.getElementById("reason").value;

    let appointment = {

        id: "APT-" + Date.now(),

        name: patientName,

        doctor: selectedDoctor,

        specialty: selectedSpecialty,

        date: date,

        time: time,

        email: email,

        reason: reason
    };

    localStorage.setItem(
        "appointment",
        JSON.stringify(appointment)
    );

    window.location = "success.html";
}
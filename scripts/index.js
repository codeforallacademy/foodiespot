window.onload = () => {
    var bookingDate = document.getElementById('bookingDate');
    if (bookingDate) {
        var now = new Date();
        var utcString = now.toISOString().substring(0, 19);
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hour = now.getHours() + 1;
        var minute = now.getMinutes();
        var second = now.getSeconds();
        var localDatetime = year + "-" +
            (month < 10 ? "0" + month.toString() : month) + "-" +
            (day < 10 ? "0" + day.toString() : day) + "T" +
            (hour < 10 ? "0" + hour.toString() : hour) + ":" +
            (minute < 10 ? "0" + minute.toString() : minute) +
            utcString.substring(16, 19);
        bookingDate.value = localDatetime;
        bookingDate.min = localDatetime;
    }
}

const contact = (e) => {
    // e.preventDefault();
    var userName = document.getElementById('userName');
    var peopleCount = document.getElementById('peopleCount');
    var bookingDate = document.getElementById('bookingDate');
    var requirements = document.getElementById('requirements');
    console.log(`${userName.value} :
    ${peopleCount.value} :
    ${bookingDate.value} :
    ${requirements.value} `);

    console.log(Email)

    Email.send({
        Host: "smtp.gmail.com",
        Username: ``,
        Password: ``,
        From: ``,
        To: ``,
        Subject: "Booking Confirmation",
        Body: `<h4>We have taken your booking</h4><br /> 
                Slot: <b>${bookingDate}</b><br />
                Count: <b>${peopleCount}</b>
                Requirements: <b>${requirements}</b>
                `,

    })
        .then((message) => {
            alert("Booked successfully. Check your mail for details")
        }).catch(err => {
            alert(`something went wrong! Please contact using Phone numer`);
        });
}

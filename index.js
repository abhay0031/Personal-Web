let changeName=document.getElementById("clickMe");


changeName.addEventListener("click", function(event) {
    event.target.innerText = "Currently Pursuing B.E.(CSE) from Chitkara University";
});


let changeDate = document.getElementById("changeDate");


    const date = new Date();

    
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are 0-indexed
    let year = date.getFullYear();

    let formattedDay;
    if (day < 10) {
        formattedDay = "0" + day;
    } else {
        formattedDay = day;
    }

    
    let formattedMonth;
    if (month < 10) {
        formattedMonth = "0" + month;
    } else {
        formattedMonth = month;
    }


    let formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

    changeDate.innerText = `Date: ${formattedDate}`;
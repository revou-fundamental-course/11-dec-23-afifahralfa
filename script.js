function loginUser() {
    var username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    window.location.href = 'homepage.html';
    return false;
}

function sendMessage() {
    var resultMessage = "Your message has been sent!";
    var timestamp = new Date().toLocaleString();
    alert(resultMessage + "\n\nTimestamp: " + timestamp);
    return false;
    function sendMessage() {
        console.log('sendMessage() is called');
        // ... (kode lainnya)
    }
    
}
function sendMessage() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('address').value;
    var message = document.getElementById('message').value;

  
    document.getElementById('resultName').innerText = 'Nama: ' + name;
    document.getElementById('resultEmail').innerText = 'Email: ' + email;
    document.getElementById('resultGender').innerText = 'Jenis Kelamin: ' + gender;
    document.getElementById('resultDob').innerText = 'Tanggal Lahir: ' + dob;
    document.getElementById('resultAddress').innerText = 'Alamat: ' + address;
    document.getElementById('resultMessage').innerText = 'Pesan: ' + message;

   
    document.getElementById('resultContainer').style.display = 'block';
    document.getElementById('messageForm').style.display = 'none';

    return false;
}

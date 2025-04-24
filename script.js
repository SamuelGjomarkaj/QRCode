function generateQRCode() {
    let url = document.getElementById("url").value;
    if (!url.startsWith("http://") && !url.startsWith("https://") && !url.startsWith("www")) {
        alert("Please enter a valid URL starting with www, http:// or https://");
        return;
    }
    
    document.getElementById("qrcode").innerHTML = ""; // Clear previous QR code
    document.getElementById("qrcode").style.display = "none";
    document.getElementById("download").style.display = "none";
    document.getElementById("reset").style.display = "none";
    document.getElementById("loader").style.display = "block";
    
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        let qr = new QRCode(document.getElementById("qrcode"), {
            text: url,
            width: 200,
            height: 200
        });
        document.getElementById("qrcode").style.display = "block"; 
        document.getElementById("download").style.display = "block";
        document.getElementById("reset").style.display = "block";
    }, 1000); 
}

function downloadQRCode() {
    let qrCanvas = document.querySelector("#qrcode canvas");
    let qrImage = qrCanvas.toDataURL("image/png");
    let link = document.createElement("a");
    link.href = qrImage;
    link.download = "qrcode.png";
    link.click();
}

function resetQRCode() {
    document.getElementById("qrcode").innerHTML = "";
    document.getElementById("qrcode").style.display = "none";
    document.getElementById("download").style.display = "none";
    document.getElementById("reset").style.display = "none";
    document.getElementById("url").value = "";
}

document.getElementById("url").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        generateQRCode();
    }
});
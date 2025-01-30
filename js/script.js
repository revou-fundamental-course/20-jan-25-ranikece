document.getElementById("bmi-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let gender = document.getElementById("gender").value;
    let berat = parseFloat(document.getElementById("berat").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value) / 100;
    let usia = parseInt(document.getElementById("usia").value);
    let usiaSaran = "";

    if (berat > 0 && tinggi > 0 && usia > 0) {
        let bmi = berat / (tinggi * tinggi);
        let kategori = "";
        let saran = "";

        if (bmi < 18.5) {
            kategori = "Berat Kurang";
            saran = "Kamu perlu menambah asupan nutrisi ^• ˕ • ྀི";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            kategori = "Normal";
            saran = "Selamat! Berat badanmu ideal ૮ ˶ᵔ ᵕ ᵔ˶ ა ";
        } else if (bmi >= 25 && bmi < 29.9) {
            kategori = "Berat Berlebih";
            saran = "Coba atur pola makan dan mulai aktif berolahraga (๑>◡<๑) ";
        } else {
            kategori = "Obesitas";
            saran = "Kamu berada di kategori obesitas. Sebaiknya konsultasi dengan dokter ꜀꜆-ࡇ-꜆";
        }

        if (usia < 18) {
            usiaSaran = "Masih dalam masa pertumbuhan (˶˃⤙˂˶) ";
        } else if (usia >= 18 && usia < 40) {
            usiaSaran = "Jaga pola makan sehat dan olahraga rutin (≧ᗜ≦) ";
        } else {
            usiaSaran = "Penting untuk cek kesehatan rutin ᓚ₍⑅^..^₎♡ ";
        }

        document.getElementById("bmi-value").textContent = `BMI: ${bmi.toFixed(2)}`;
        document.getElementById("bmi-category").textContent = `Kategori: ${kategori}`;
        document.getElementById("bmi-advice").textContent = saran;
        document.getElementById("usia-advice").textContent = `Rekomendasi Berdasarkan Usia: ${usiaSaran}`;
    } else {
        alert("Masukkan data yang valid!");
    }
});

// Fungsi download PDF
document.getElementById("download-btn").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    doc.text("Hasil BMI Kamu", 10, 10);
    doc.text(document.getElementById("bmi-value").textContent, 10, 20);
    doc.text(document.getElementById("bmi-category").textContent, 10, 30);
    doc.text(document.getElementById("bmi-advice").textContent, 10, 40);
    doc.text(document.getElementById("usia-advice").textContent, 10, 50);

    doc.save("hasil-bmi.pdf");
});

// Fungsi konsultasi ke Halodoc
document.getElementById("consult-btn").addEventListener("click", function() {
    window.open("https://www.halodoc.com/", "_blank");
});

document.getElementById("bmi-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let berat = parseFloat(document.getElementById("berat").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value) / 100;
    let usia = parseInt(document.getElementById("usia").value);
    let usiaSaran = "";

    if (berat > 0 && tinggi > 0 && usia > 0) {
        let bmi = berat / (tinggi * tinggi);
        let kategori = "";
        let saran = "";

        // Kategori BMI
        if (bmi < 18.5) {
            kategori = "Berat Kurang";
            saran = "Kamu perlu menambah asupan nutrisi. Coba perbanyak makan sehat dan konsultasikan dengan ahli gizi ٩(^ᗜ^ )و ´- ";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            kategori = "Normal";
            saran = "Selamat! Berat badanmu ideal. Tetap pertahankan pola makan sehat dan olahraga teratur ໒꒰ྀིᵔ ᵕ ᵔ ꒱ྀི১ ";
        } else if (bmi >= 25 && bmi < 29.9) {
            kategori = "Berat Berlebih";
            saran = "Coba atur pola makan dan mulai aktif berolahraga. Kurangi makanan berlemak dan manis >⩊< ";
        } else {
            kategori = "Obesitas";
            saran = "Kamu berada di kategori obesitas. Sebaiknya segera konsultasi dengan dokter untuk program diet sehat (ㅅ´ ˘ `) ";
        }

        // Rekomendasi berdasarkan usia
        if (usia < 18) {
            usiaSaran = "Masih dalam masa pertumbuhan, konsultasi ke dokter atau orang tua untuk rekomendasi lebih akurat ฅ^>⩊<^ ฅ ";
        } else if (usia >= 18 && usia < 40) {
            usiaSaran = "Usia produktif, jaga pola makan sehat dan olahraga rutin agar tetap bugar (,,Ծ‸Ծ,, ) ";
        } else if (usia >= 40 && usia < 60) {
            usiaSaran = "Mulai perhatikan kesehatan dengan pola makan seimbang dan olahraga ringan seperti yoga atau jalan kaki  ₍ᵔ.˛.ᵔ₎";
        } else {
            usiaSaran = "Di usia ini, penting untuk cek kesehatan secara rutin dan tetap aktif bergerak untuk menjaga kebugaran (๑-﹏-๑) ";
        }

        // Menampilkan hasil BMI, kategori, saran, dan rekomendasi usia
        document.getElementById("bmi-value").textContent = `BMI: ${bmi.toFixed(2)}`;
        document.getElementById("bmi-category").textContent = `Kategori: ${kategori}`;
        document.getElementById("bmi-advice").textContent = saran;
        document.getElementById("usia-advice").textContent = `Rekomendasi Berdasarkan Usia: ${usiaSaran}`;
    } else {
        alert("Masukkan data yang valid!");
    }
});

const express = require('express');
const app = express();
const PORT = 3000;

// Biar bisa baca JSON dari request
app.use(express.json());

// Endpoint utama
app.get('/', (req, res) => {
  res.json({ status: "API Warkop Singo Online Prof 💪" });
  });

  // Daftar menu warkop
  const menuKopi = [
    { id: 1, nama: "Kopi Hitam Singo", harga: 5000 },
      { id: 2, nama: "Kopi Susu Gula Aren", harga: 8000 },
        { id: 3, nama: "Es Kopi Tarik", harga: 7000 },
          { id: 4, nama: "Teh Tarik", harga: 4000 },
            { id: 5, nama: "Indomie Telor Kornet", harga: 12000 }
            ];

            // Endpoint buat liat menu
            app.get('/menu', (req, res) => {
              res.json({
                  status: "sukses",
                      data: menuKopi
                        });
                        });

                        // Jalanin server
                        app.listen(PORT, () => console.log(`Gas di port ${PORT}`));
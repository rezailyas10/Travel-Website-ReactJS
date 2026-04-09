require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = process.env.XENDIT_SECRET_KEY; // xnd_development_....

const encodeAuth = Buffer.from(`${SECRET_KEY}:`).toString("base64"); // : = password

app.get("/test", async (req, res) => {
  try {
    console.log("TEST API HIT");

    const SECRET_KEY = process.env.XENDIT_SECRET_KEY;
    const encodeAuth = Buffer.from(`${SECRET_KEY}:`).toString("base64");

    const payload = {
      external_id: "TEST-" + Date.now(),
      amount: 10000,
      description: "Test Invoice",
      currency: "IDR",
      success_redirect_url: "http://localhost:5173/success",
    };

    const response = await require("axios").post(
      "https://api.xendit.co/v2/invoices",
      payload,
      {
        headers: {
          Authorization: `Basic ${encodeAuth}`,
          "Content-Type": "application/json",
        },
      },
    );

    console.log("XENDIT RESPONSE:", response.data);

    res.json(response.data);
  } catch (err) {
    console.log("ERROR:", err.response?.data || err);
    res.status(500).json(err.response?.data || err);
  }
});

app.post("/create-invoice", async (req, res) => {
  try {
    const { amount, name, email, qty } = req.body;

    const payload = {
      external_id: "UMROH-" + Date.now(),
      amount: amount,
      description: `Booking ${name} (${qty} orang)`,
      currency: "IDR",
      payer_email: email,
      success_redirect_url: "http://localhost:5173/success",
    };

    const response = await axios.post(
      "https://api.xendit.co/v2/invoices",
      payload,
      {
        headers: {
          Authorization: `Basic ${encodeAuth}`,
          "Content-Type": "application/json",
        },
      },
    );

    console.log("Xendit Response:", response.data);

    res.json({
      invoice_url: response.data.invoice_url,
    });
  } catch (err) {
    console.log(err.response?.data || err);
    res.status(500).send("Error create invoice");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const PORT = process.env.PORT || 5000;
app.get("/api/reviews", async (req, res) => {
  try {
    const url = `https://places.googleapis.com/v1/places/${process.env.PLACE_ID}?fields=id,displayName&key=${process.env.GOOGLE_API_KEY}`;
    const response = await axios.get(url);

    if (!response.data.result || !response.data.result.reviews) {
      return res.json([]); // kembalikan array kosong kalau tidak ada review
    }

    res.json(response.data.result.reviews);
  } catch (err) {
    console.error("Google API Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

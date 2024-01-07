const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mern1234",
  database: "rent",
});



// middleware per contact
app.get("/contact", (req, res) => {
  const sql = "SELECT * FROM contact";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/contact", (req, res) => {
    const newContact =
      "INSERT INTO `contact`(`Name_client`, `Email_client`, `Message_client`) VALUES (?, ?, ?)";
    const values = [
      req.body.NameClient,
      req.body.EmailClient,
      req.body.MessageClient,
    ];
  
    db.query(newContact, values, (err, data) => {
      if (err) return res.status(500).json("Gabim gjatë vendosjes së shënimeve të reja");
      return res.json(data);
    });
  });


//   middlewar per signup
app.get("/signup", (req, res) => {
  const sql = "SELECT * FROM login";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/signup', (req, res) => {
    const newUser = 'INSERT INTO login(`Name_of_user`, `Email_of_user`, `Password_of_user`) VALUES (?);'
    
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    db.query(newUser, [values], (err, data) => {
        if(err) return res.json('Error while posting the data')
        return res.json(data)
    })
})

// middleware per login
app.get("/login", (req, res) => {
  const sql = "SELECT * FROM login";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/login', (req, res) => {
    const newUser = 'SELECT * FROM login WHERE `Email_of_user` = ? AND `Password_of_user` = ?'

    db.query(newUser, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json('Error while reading the user`s data')
        if(data.length > 0){
            return res.json('Success')
        } else{
            return res.json('Failed!')
        }
    })
})


// middleware per booking
app.get("/rent:slug", (req, res) => {
  const sql = "SELECT * FROM booking";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/rent:slug", (req, res) => {
  const newRent =
    "INSERT INTO `booking`(`Name_client`, `Lastname_client`, `Email_client`, `Phone_client`, `From_address`, `To_address`, `Number_of_persons`, `Number_of_luggage`, `Journey_date`, `Journey_time`, `Additional_comments`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.FirstName,
    req.body.Lastname,
    req.body.Email,
    req.body.PhoneClient,
    req.body.FromAddress,
    req.body.ToAddress,
    req.body.NumberOfPersons,
    req.body.NumberOfLuggage,
    req.body.JourneyDate,
    req.body.JourneyTime,
    req.body.AdditionalComments,
  ];

  db.query(newRent, values, (err, data) => {
    if (err) {
      console.error("Error during insertion:", err);
      return res.status(500).json("Error during insertion");
    }
    return res.json(data);
  });
});




  app.listen(5000, () => {
    console.log('Server started at port 5000')
});
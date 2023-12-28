const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

const users = [];

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello, Express!1');
});

app.post('/registration', (req, res) => {
    const { email, password } = req.body.user;
  
    const currentUserFromDB = users.find((user) => user.email === email);
  
    if (currentUserFromDB) {
      res.status(401).json({ msg: 'Sorry, user with these datails is already registered, try logging in.' , status : 401 });
    } else {
      users.push({ email, password });
      console.log(users);
      res.status(200).json({ msg: 'Registration successful!', status : 200 });
    }
  });

app.post('/login', async (req, res) => {
	const { email, password } = req.body.user;

	const currentUserFromDB = users.find((user) => user.email === email && user.password === password);

	if (currentUserFromDB) {
        res.status(200).json({ msg: 'You successfully logged in!' , status : 200});
	} else {
		res.status(401).json({ msg: 'No user with these details' , status : 401});
	}
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
import express from "express";
import { requestLogger, validateUserData } from "./middleware.js";

// users mock Data
const users = [
  {
    id: 1,
    firstname: "Alice",
    lastname: "Johnson",
    age: 25,
  },
  {
    id: 2,
    firstname: "Bob",
    lastname: "Smith",
    age: 30,
  },
  {
    id: 3,
    firstname: "Charlie",
    lastname: "Brown",
    age: 22,
  },
  {
    id: 4,
    firstname: "Diana",
    lastname: "Miller",
    age: 28,
  },
  {
    id: 5,
    firstname: "Ethan",
    lastname: "Williams",
    age: 35,
  },
];

const app = new express();
const PORT = 3000;
app.use(express.json());
app.use(requestLogger);

// GET /users – Fetch the list of all users.
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// GET /users/:id – Fetch details of a specific user by ID.
app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (user) res.status(200).json(user);
  else res.status(404).json({ message: "User not found" });
});

// POST /user – Add a new user.
app.post("/users", validateUserData, (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /user/:id – Update details of an existing user.
app.put("/users/:id", validateUserData, (req, res) => {
  const index = users.findIndex((user) => user.id === parseInt(req.params.id));
  if (index !== -1) {
    users[index] = {
      id: users[index].id,
      ...req.body,
    };
    res.status(200).json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// DELETE /user/:id – Delete a user by ID.
app.delete("/users/:id", (req, res) => {
  const index = users.findIndex((user) => user.id === parseInt(req.params.id));
  if (index !== -1) {
    users.splice(index, 1);
    res.status(200).json({
      message: `User deleted successfully`,
      users: users,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

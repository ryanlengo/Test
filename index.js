import express from "express";
const app = express();
app.use(express.json());

const users = []

app.post("/users",  (req, res) =>{
  
  console.log(req)
  const body = req.body
  users.push(body)
  res.status(201).send("usuário criado com sucesso!");
});

app.get("/users", (req, res)=>{
  res.send({message: "esses são os users", users})
})

// METHOD => GET, POST, PUT/PATCH, DELETE
//NAME => ALWAYS / OU "/ANYTHINGs" || sempre no plural
// callback functions => wheres we execute the bakc end (bussines rules, logica)

app.listen(3000, () =>{ 
  console.log("SERVER IS RUNNING ON PORT 3000");
});
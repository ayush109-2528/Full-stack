import express from "express";
const app = express();
const port = 3000;

 
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

 app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req,res)=>{
  res.send("<h1>this is about page</h1>")
});
app.get("/contact", (req,res)=>{
  res.send("this is contact page")
}
);
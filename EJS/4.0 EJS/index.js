import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
  let type = "A Weekday";
  let adv = "Its time to workout";
   if(day===0 || day===6)
   {
    let type = "A Weekend";
    let adv = "Its time to enjoy";
   }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});
app.listen(port, () => {
  console.log(`server starting at ${port}`);
});
    
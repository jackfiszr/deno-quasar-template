import express from "https://esm.sh/express?target=denonext";
const app = express();
app.use(express.static(current+'/dist'))
const current = Deno.cwd();
console.log(current);
app.get("/api", (req, res) => {
  res.send("Hello from Deno Deploy!");
});
app.get("*", (req, res) => {
  res.sendFile(current+"dist/index.html");
});
app.listen(8080);

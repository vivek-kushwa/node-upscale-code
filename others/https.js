const https = require("https");
const fs = require("fs");

const url = "https://jsonplaceholder.typicode.com/posts";

https.get(url, (res) => {
  let body = "";
  res.setEncoding("utf-8");
  res.on("data", (data) => (body += data));
  res.on("end", () => {
    fs.writeFile("data.json", body, "utf8", (error) => {
      if (error) {
        console.log(error);
      }
      console.log("Done");
    });
  });
});

// fs.unlinkSync("data.json", (err) => err);

const fs = require("fs");
fs.readdir("./", (error, content) => {
  if (error) return error;
  console.log(content);
});

let data = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Document</title>
</head>
<body>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
sed commodi fugit placeat quas adipisci aperiam repellat! Modi, culpa
vitae! Ullam suscipit rem maxime aspernatur similique earum excepturi
dicta in nemo, aperiam vel ex asperiores alias corrupti, amet inventore.
Non.
</p>
</body>
</html>`;

fs.writeFile("./modules/public.html", data, "utf8", (error) => {
  if (error) return error;
});

fs.appendFile(
  "./modules/public.html",
  `<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
sed commodi fugit placeat quas adipisci aperiam repellat! Modi, culpa
vitae! Ullam suscipit rem maxime aspernatur similique earum excepturi
dicta in nemo, aperiam vel ex asperiores alias corrupti, amet inventore.
Non.
</p>`,
  "utf8",
  (err) => {
    if (err) return err;
  }
);


fs.readFile("./modules/public.html", "utf-8", (error, content) => {
  if (error) return error;
  console.log(content, ">>>>>>>>>>>>>>Read");
});

const express = require("express");
const app = express();

app.use(express.static("public")); // يقدم ملفات الموقع من مجلد public

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

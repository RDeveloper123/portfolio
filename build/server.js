"use strict";const s=require("express"),e=s();require("dotenv").config();const r=require("cors"),o=require("./controller/sendmail");e.use(r());e.use(s.json());e.post("/contact",o.mail);e.listen(process.env.PORT||5e3,()=>console.log(`server started on ${process.env.PORT}`));
//# sourceMappingURL=server.js.map

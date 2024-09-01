import express from "express";
const app= express();
const port=3000;
//href="/blog/<%= blog.id %>"
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res)=>{
    res.render("blogs.ejs");
});

app.get("/Edit", (req,res)=>{
    res.render("edit.ejs");
});

app.get("/Post", (req,res)=>{
    res.render("post.ejs");
});

app.post("/submit", (req, res) => {
    var blogTitle= req.body.title;
    console.log(blogTitle);
    res.render("blogs.ejs", {title: blogTitle});
  
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
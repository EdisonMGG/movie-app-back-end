const express =require("express")
const mongoose=require("mongoose")
const cors =require("cors")
const {moviemodel}=require("./models/Movie")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://edisongeorge:edisonmg@cluster0.7y1x5l7.mongodb.net/studentdb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/AddMovie",(req,res)=>{
    let input=req.body
    let Movie=new moviemodel(input)
    Movie.save()
    console.log(Movie)
    res.json({status:"test"})
})

app.post("/SearchMovie",(req,res)=>{
  let input=req.body
    moviemodel.find(input).then(
        (data)=>{
    res.json(data)
        }
    )    
})

app.post("/DeleteMovie",(req,res)=>{
    let input=req.body
    moviemodel.findByIdAndDelete(input._id).then(
        (response)=>{
    res.json({"status":"success"})
        }
    ) .catch
})

app.get("/ViewAll",(req,res)=>{
    moviemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        })
})

app.listen(8001,()=>{
    console.log("server started")
})
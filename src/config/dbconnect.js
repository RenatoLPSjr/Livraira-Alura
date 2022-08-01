import mongoose from "mongoose"

mongoose.connect("mongodb+srv://RenatoJr:123@alura.pvxyiw9.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
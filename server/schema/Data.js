const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        quote: String,
        author: String
}
);



module.exports = mongoose.model("Data", DataSchema);
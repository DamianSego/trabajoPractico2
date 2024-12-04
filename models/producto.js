const mongoose = ('mongoose')

const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    size: Number,
    UnitaryPrice: Number,
    imgUrl:String

}, {
    timestamps: true
}
)

module.exports = mongoose.model('products', ProductSchema)
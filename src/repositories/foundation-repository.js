'use strict'
const elasticClient = require('../../bin/clientElastic');

exports.create = (res) => {
    try {
        return elasticClient.index({
            index: 'person',
            body: res
        });
    } catch (error) {
        return error;
    }
}

// exports.getById = async (id) => {
//     const res = await Product.findById(id);
//     return res;
// }

// exports.getByTitle = async (title) => {
//     const res = await Product.findOne(
//         {
//             active: true,
//             title: title
//         }, 'title price description');
//     return res;
// }

// exports.getByTags = async (tag) => {
//     const res = await Product.find(
//         {
//             active: true,
//             tags: tag
//         }, 'title price description tags');

//     return res;
// }


// exports.create = async (data) => {
//     let product = new Product(data);
//     await product.save()
// }

// exports.update = async (id, data) => {
//     const res = await Product
//         .findByIdAndUpdate(id, {
//             $set: {
//                 title: data.title,
//                 description: data.description,
//                 price: data.price
//             }
//         });
//     return res;
// }

// exports.delete = async (id) => {
//     await Product.findByIdAndRemove(id);
// }


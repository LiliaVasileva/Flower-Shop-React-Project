const bcrypt = require('bcrypt');

const Item = require('../models/Item');
const User = require('../models/User');


exports.getAll = () => Item.find({}).lean();
exports.getOne = (itemId) => Item.findOne(itemId).lean();

exports.create = async (ownerId, {name, price, category, description, image}) => {
    const hashedImage = await bcrypt.hash(image, 10);
    await Item.create({name, price, category, description, image: hashedImage, owner: ownerId})
}

const Item = require('../models/Item');
const User = require('../models/User');


exports.getAll = () => Item.find({}).lean();

exports.getItem = (itemId) => Item.findById(itemId).lean();

exports.create = async (ownerId, {name, price, category, description, image}) => {
    const item = await Item.create({name, price, category, description, image, owner: ownerId});

    return item
}

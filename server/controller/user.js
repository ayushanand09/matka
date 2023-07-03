let userModel = require("../models/user");
let userAccountModel = require("../models/userAccount")
let jwt = require("jsonwebtoken");

let register = async (req, res) => {
    try {
        let requestBody = req.body;
        const { name, email, password } = requestBody

        if (Object.keys(requestBody).length == 0) return res.status(400).send({ status: false, msg: "Enter some data to create user" })

        if (!name) return res.status(400).send({ status: false, msg: "name is mandatory" })
        if (!email) return res.status(400).send({ status: false, msg: "email is mandatory" })
        requestBody.email = email.toLowerCase()
        let emailCheck = await userModel.findOne({ email: email })
        if (emailCheck) return res.status(409).send({ status: false, msg: "email is already used " })
        if (!password) return res.status(400).send({ status: false, msg: "password is mandatory" })

        let createdUser = await userModel.create(req.body);
       let accountCreated = await userAccountModel.create({ userId: createdUser._id })
       
       await userModel.findOneAndUpdate({_id:createdUser._id},{accountId:accountCreated._id})
        return res.status(201).send({ status: true, message: createdUser })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports.register = register;


const login = async (req, res) => {
    try {
        let requestBody = req.body;
        const { email, password } = requestBody;
        requestBody.email = email.toLowerCase()

        if (Object.keys(requestBody).length == 0) return res.status(400).send({ status: false, msg: "Enter some data to create user" })

        if (!password) return res.status(400).send({ status: false, msg: "name is mandatory" })
        if (!email) return res.status(400).send({ status: false, msg: "email is mandatory" })

        let loginUser = await userModel.findOne({ $and: [{ email: email }, { password: password }] }).populate({path:"accountId",select:{userTotalAmount:1,_id:0}})
        if (!loginUser) return response.status(400).send({ status: false, message: "user is not found" })
        // let token = await jwt.sign(loginUser, "matka", { expiresIn: "24h" })
        return res.status(200).send({ loginUser })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports.login = login;


const update = async (req, res) => {

    try {
        let { id, name, email, password } = req.body;

        let updatedUser = await userModel.findOneAndUpdate({ _id: id }, { name, email, password }, { new: true })
        if (!updatedUser) return res.status(500).send({ status: false, message: updatedUser })

        return res.status(200).send({ status: true, message: updatedUser })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports.update = update;

const deleteUser = async (req, res) => {

    try {
        let { id } = req.body
        let userDelete = await userModel.deleteOne({ _id:id })
        return res.status(200).send({ status: true, message: userDelete })
    }

    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}


module.exports.deleteUser = deleteUser;

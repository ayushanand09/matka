const accountModel = require("../models/account");
const transectionModel = require("../models/accountTransaction")


const transectionBet = async (req, res) => {
    try {
        let { userId,amount,transactionType} = req.body;
        
        const account= await accountModel.findOne({ userId }).select({__v: 0 })
     if(account.totalAmount>=amount && transactionType=="bet"){
    account.totalAmount=account.totalAmount-amount;
}
else {
return res.status(400).send({status:false ,message:`you have only${account.totalAmount}`})
    }
account.save();

        req.body.accountId = account._id;
        const createdTransaction = await transectionModel.create(req.body);

        return res.status(201).send({ status: true, message: createdTransaction ,newBalance :`${account.totalAmount}`})
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = transectionBet;
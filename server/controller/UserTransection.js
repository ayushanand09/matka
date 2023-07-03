const userAccount = require("../models/userAccount");
const UserTransectionModel = require("../models/UserTransection");

const transectionBet = async (req, res) => {
  try {
    let { userId, amount, transactionType } = req.body;

    const isUseraccount = await userAccount
      .findOne({ userId })
      .select({ __v: 0 });
    if (!isUseraccount)
      return res
        .status(400)
        .send({ status: false, message: "user account is not exist" });

    if (isUseraccount.userTotalAmount >= amount && transactionType == "bet") {
      isUseraccount.userTotalAmount = isUseraccount.userTotalAmount - amount;
    } else {
      return res.status(400).send({
        status: false,
        message: `you have only${isUseraccount.userTotalAmount}`,
      });
    }
    isUseraccount.save();

    req.body.accountId = isUseraccount._id;
    const createdTransaction = await UserTransectionModel.create(req.body);

    return res.status(201).send({
      status: true,
      message: createdTransaction,
      userNewBalance: +`${isUseraccount.userTotalAmount}`,
    });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports.transectionBet = transectionBet;

const transectionWin = async (req, res) => {
  try {
    let { userId, amount, transactionType } = req.body;

    const isUseraccount = await userAccount
      .findOne({ userId })
      .select({ __v: 0 });
    if (!isUseraccount)
      return res
        .status(400)
        .send({ status: false, message: "user account is not exist" });

    if (amount > 0 && transactionType == "win") {
      isUseraccount.userTotalAmount = isUseraccount.userTotalAmount + amount;
      isUseraccount.save();
    } else {
      return res.status(400).send({
        status: false,
        message: `you have enter worng information`,
      });
    }

    req.body.accountId = isUseraccount._id;
    const createdTransaction = await UserTransectionModel.create(req.body);

    return res.status(201).send({
      status: true,
      message: createdTransaction,
      userNewBalance: `${isUseraccount.userTotalAmount}`,
    });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports.transectionWin = transectionWin;

const transectionCancel = async (req, res) => {
try {
  let { UserTransectionId } = req.body;

  let nowTime = new Date().getTime();

  const isUserTransection = await UserTransectionModel.findOne({
    _id: UserTransectionId
  }).select({ __v: 0 });

  if (!isUserTransection)
    return res
      .status(400)
      .send({ status: false, message: "UserTransection is not exist" });

  let userTransectionTime = new Date(
    `${isUserTransection.createdAt}`
  ).getTime();

  if ((nowTime - userTransectionTime) / 1000 > 10)
    return res
      .status(400)
      .send({
        status: false,
        message: `you have to cancel before 10 sec not ${
          (nowTime - userTransectionTime) / 1000
        }sec`,
      });
  else {
    if (isUserTransection.amount != 0) {
      let amountToBeAdd = isUserTransection.amount;
      let userAccountData = await userAccount.findOne({
        userId: isUserTransection.userId,
      });
      userAccountData.userTotalAmount += amountToBeAdd;
      userAccountData.save();
      isUserTransection.amount = 0;
      isUserTransection.save();

      return res.status(200).send({status:true,userAccountData})
    }
else {
  return res.status(400).send({status:false, message:"your Balance is 0"})
}
  }}
catch (error){
  return res.status(500).send({status:false,message:error.message})
}
};

module.exports.transectionCancel = transectionCancel;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const individualTraineeschema = new Schema({
    UserName: {
        type: String,
        required: true,
        unique: true,
    },

    FirstName: {
      type: String,
      required: true,
    },
  
    LastName: {
      type: String,
      required: true,
    },

    Email: {
      type: String,
      required: true,
      unique: true,
    },

    Country: {
        type: String,
        required: true,
    },

    Password: {
        type: String,
        required: true,
    },

    Gender: {
        type: String,
        required: true,
    },

    CreditCardsInfo: {
       type: [[String]]
    },

    Wallet: {
        type: Number,
        default:0,
        required:true
    },

    courses: {
        type: [[String]], //[[Course1.ID,Progress%],[Course2.ID,Progress%],[Course3.ID,Progress%],...... ]
    },
    
    Exercises: {
        type: [[String]], //[[Ex1.ID,MyAnswer,MyGrade],[Ex2.ID,MyAnswer,MyGrade],[Ex3.ID,MyAnswer,MyGrade],......]
    },

    Certificates: {
        type: [String], //[Certificates1,Certificates2,Certificates3,......]
    },
    
    Notes: {
        type: [String], //[Note1,Note2,Note3,......]
    },

    Reports: {
        type: [[String]], //[[Report1.ID,Type,Status,FollowUp],[Report2.ID,Type,Status,FollowUp],[Report3.ID,Type,Status,FollowUp],......]
    },

    RefundRequests: {
        type: [[String]], //[[Course1.ID,Status],[Course2.ID,Status],[Course3.ID,Status],...... ]
    }


}, { timestamps: true });


const individualTrainees = mongoose.model('individualTrainees', individualTraineeschema);
// individualTrainees.create({UserName:'hazem123',FirstName:'hazem',LastName:'hegazy',Email:'hazemkhaled@gmail.com',
// Country:'germany',Password:'123',Gender:'male',courses:[['637e73821194304d45a2fe5a','50%'],['6383a008cf44823c1f52d63a','20%']],
// Wallet:20})
module.exports = individualTrainees;
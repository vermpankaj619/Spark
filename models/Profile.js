const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },




    
        

        CosName: {
        type:String
      },
      CosEmail: {
        type:String
      },
      phone: {
        type:String
      },
      Dish: {
        type:String
      },
      Price: {
        type:String
      },
      Type:{
        type:String
      },
     status:{
       type:String
     },
     payment:{
      type:String
    },
     time:{
      type: Date,
default: Date.now
    },
    orderNumber:{
      type:String
    },
    image:{
      type:String
    },
    HotelName:{
      type:String
    },
    HotelPlace:{
      type:String
    },


    

   
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
  }
  ,
  phone: {
    type: String,
  }
  ,
  detials: [
        
    {
    
      name: {
        type: String,
        required: true
      },
      Hotel: {
        type:String
      }
      ,  Place: {
        type:String
      },
      address: {
        type:String
      }
  ,
       Pincode: {
          type: String,
          required: true
        }
        , 
        city: {
          type: String,
          required: true
        },
        state: {
          type: String,
          required: true
        },
        Operational: {
          type: String,
          required: true
        }
      }
  ]
  ,


  Scehedule: [
      
    {
      categories: {
        type: Array,
        required: true
      },
    
    image:{
      type:String,
      required: true
    },
        Dish: {
          type: String,
          required: true
        }
        , 
          
        Price: {
          type: String,
          required: true
        }
        ,
          
        Type: {
          type: String,
          required: true
        }
        , 
        booked: [

          {
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
         
          

        }

        ],
      }
       
  ]
    
   
  ,
  applo: [

    {
    name: {
      type:String
    },
    email: {
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
    time:{
      type: Date,
default: Date.now
    }
   
    

  }

  
]
  
  
});

module.exports = User = mongoose.model("users", UserSchema);

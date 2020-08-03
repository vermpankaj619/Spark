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
   locotion: {

   },
    
      category: {
        type: String,
       
      },
      Hotel: {
        type:String
      },
      HotelName: {
        type:String
      }
      ,  Place: {
        type:String
      },
      address: {
        type:String
      }
  ,
  image: {
    type:String
  }
    
 
  ,
  address:[
    {
    add:{
     
      type:String,
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
            Total: {
              type:String
            },
         
          

        }

        ],
      }
       
  ]
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

      

    }

    ],
   
  
  applo: [

    {
   
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
   ,
    add:{
      type:String
    },
    status:{
      type:String
    },
    merEmail:{
      type:String
    },
    merPhone:{
      type:String
    }
    

  }

  
]
,
Cart:[
   {
    id:{
      type:String
    }
    ,
      item: {
        type:String
      },
      price: {
        type:Number,

      },
      time:{
        type: Date,
      default: Date.now
      }
     ,
      add:{
        type:String
      },
      email:{
        type:String
      },
      phone: {
        type:String
      },
      payment:{
        type:String
      },
      merEmail:{
        type:String
      },
      merPhone:{
        type:String
      }
      , merid:{
        type:String
      }
  
    }
   

]
  
  
});

module.exports = User = mongoose.model("users", UserSchema);

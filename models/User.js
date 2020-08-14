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
  },
  online : {
   type: Boolean,
        default: false
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
        },
        stock: {
          type:String,
          
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

    
        cosid:{
          type:String
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
    orderNumber:{
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
    },
    HotelName:{
      type:String
    },

    image:{
      type:String
    }
    ,
    HotelPlace:{
      type:String
    },


  }

  
]
,
Cart:[
   {
    cosid:{
      type:String
    },
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
  
      
  
    }
   

]
  
  
});

module.exports = User = mongoose.model("users", UserSchema);

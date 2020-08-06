const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
var nodemailer = require("nodemailer");
var where = require('node-where');
const DeviceDetector = require('node-device-detector');

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const user = User.find({});
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register",  async (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        phone: req.body.phone
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });      
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/Mer-register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        phone: req.body.phone
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });      
    }
  });
});

  






router.post("/Mer-login", (req, res) => {

 
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          email:user.email,
          role:user.role,
          phone:user.phone
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.post("/login", (req, res) => {
  // Form validation
  console.log(typeof  req.body.password)
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          phone: user.phone,
          role:user.role,
          email:user.email
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
        const userAgent = 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
        const detector = new DeviceDetector;
        const result = detector.parseOs(userAgent);
        console.log('Result parse os', result);  
        const AliasDevice = require('node-device-detector/parser/device/alias-device');
    const uuserAgent = 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
    const aliasDevice = new AliasDevice;
    const reesult = aliasDevice.parse(uuserAgent);
      const rest = result.name;
      const resst = reesult.name
   
      var datetime = new Date();
      
    console.log(rest);
    console.log(resst)
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'vermapankaj3313@gmail.com',
            pass:  'Pankaj619'
                  }
        });
        
        var mailOptions = {
          from: 'Eatwell ',
          to: user.email,
          subject: 'EatWell security alert: Sign-in from new device detected',
          text: "We detected a sign-in to your account from a new device When:" + datetime + "Device" + resst + rest  
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});






router.get(
  '/details',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    
   const detials = {
     category: req.user.category,
     Hotel:req.user.Hotel,
     Place:req.user.Place,
     address:req.user.address,
     image:req.user.image
   }



    res.json(detials)

  }
);
router.get(
  '/locotion',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    
  


    res.json(req.user.locotion)

  }
);




router.get(
  '/sch',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    
    res.json(req.user.Scehedule)

  }
);

router.get('/list',  (req, res) => {
  user.exec(function(err, data){
    if(err) {
      console.log(err)
    }
    else {
      res.json(data);
    }
   
  })
});

router.post('/setloction', passport.authenticate('jwt', { session: false }), (req, res) =>{

  const {  text } = req.body





let user =  User.findOneAndUpdate({  _id: req.user.id },{     locotion:text  },  { new: true, upsert: true },function(err, result) {
  if (err) {
     console.log(err)
      
  } 

  
console.log(result.locotion)

console.log('upadted')






});





})




router.post('/upadted', passport.authenticate('jwt', { session: false }), (req, res) =>{

  const {  category,  HotelName,   Hotel,  Place ,address  , image } = req.body





let user =  User.findOneAndUpdate({  _id: req.user.id },{   category:category,   Hotel:Hotel,  Place:Place ,address:address, image:image , HotelName:HotelName   },  { new: true, upsert: true },function(err, result) {
  if (err) {
     console.log(err)
      
  } 

  
console.log(result)

console.log('upadted')
res.json(result)
});





})

router.post('/AddSchedule', passport.authenticate('jwt', { session: false })   , (req, res) => {


  console.log(req.body)

  const user = User.findOne({_id: req.user.id}, function(err,obj)  {
   if(err) {
     console.log('sdksk')
   }
    
   const { categories , Dish , Price , Type , image} = req.body;
  
   console.log(Type)
   
 
 const profileFields = {


  categories:JSON.parse(categories),
  image , Dish , Price , Type 
  
 };
 



let user =  User.findOneAndUpdate({_id: req.user.id },{ $push: {"Scehedule":  profileFields  } },  { new: true, upsert: true },function(err, result) {
  if (err) {
  console.loh(err)
  } 

  

  console.log(result.Scehedule)

  console.log('u[adted')
  res.json(result.detials)
  
});

 })




})



router.post('/data'  , (req, res) => {


  const {  pkk  } = req.body;

 
  const user = User.findOne({name: pkk}, function(err,obj)  {
    if(err) {
      res.json(err)
    }
    res.json(obj)

  })
})


router.post('/booked', passport.authenticate('jwt', { session: false })     ,(req, res) =>{
 

         const {CosName , CosEmail, id , name, email, phone, Dish, Price,  Type, scid, requestId} = req.body;

   console.log(req.body)
    const profileFields = {
      CosName,
      CosEmail,
         phone,
         Dish,
         _id:id,
         Price,
         Type,
        
         
    };


           User.findOneAndUpdate({  _id: requestId, "Scehedule._id": scid },{  $push: {"Scehedule.$.booked":   profileFields }  },  { new: true, upsert: true },function(err, result) {
              if (err) {
              console.log(err)
              } 

              console.log(result)

              const applo = {
                 _id:scid,
                 name : name,
                 mail: email,
                 phone: phone,
                 Dish,
                 Price,
                 Type
            };

            
              const user = User.findOneAndUpdate({_id: req.user.id} ,{   $push: {"applo":  applo  }   } ,{ new: true, upsert: true }, function(err,obj)  {
                if(err) {
                  console.log(err)
                }
                  
                else {
                  
               
                
               
               console.log(obj)
                  
               

                }
        
              })
            
            });
           


 })


 function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

router.post('/search', function(req, res) {
 console.log(req.body.search)
  if (req.body.search) {
     const regex = new RegExp(escapeRegex(req.body.search), 'gi');
     User.find({ $or: [{HotelName: regex},{"Scehedule.Dish": regex}] }, function(err, foundjobs) {
         if(err) {
             console.log(err);
         } else {
           res.json(foundjobs)
           console.log(foundjobs)
         }
     }); 
  }
});


router.post('/store', function(req, res) {
   
  console.log(req.body)
      
      User.find({ category:req.body.pkk }, function(err, store) {
          if(err) {
              console.log(err);
          } else {
            console.log(store);
            res.json(store)
          }
      }); 
   
 });

 router.post('/res', function(req, res) {
   
  console.log(req.body)
      
      User.find({ HotelName:req.body.pkk }, function(err, ress) {
          if(err) {
              console.log(err);
          } else {
          console.log(ress)
            res.json(ress)
          }
      }); 
   
 });


 router.post('/Addcart',passport.authenticate('jwt', { session: false })  , function(req, res) {

  console.log(req.body)

   console.log("not")
    const applo = {
      _id:req.body.id,
      id:req.body.id,
      item:req.body.name,
      price:req.body.price,
      merEmail:req.body.merEmail,
      merPhone:req.body.merPhone,
      phone:req.body.phone,
      email:req.body.email,
      merid:req.body.merid,
      image:req.body.image,
      HotelName:req.body.HotelName,
      HotelPlace:req.body.place
  
    }
   

    User.findOneAndUpdate({_id: req.user.id} ,{   $push: {"Cart":  applo  }   } ,{ new: true, upsert: true }, function(err,obj)  {
      if(err) {
        console.log(err)
      }
        
      else {
        
     


        
      
     res.json(obj.Cart)
     console.log(obj.Cart)
        
     
  
      }
  
    })
    






   


      
    
   
 });




 router.post('/RemoveCart',passport.authenticate('jwt', { session: false })  , function(req, res) {

const { id } = req.body;
     User.findOneAndUpdate({_id: req.user.id   } ,{   $pull: {"Cart": {_id:id}}  } ,{ new: true, upsert: true }, function(err,obj)  {
      if(err) {
        console.log(err)
      }
        
      else {
        
     
      
     res.json(obj.Cart)
     console.log(obj.Cart)
        
     
  
      }
  
     })
    
  
  
    });
  

 router.get(
  '/cart',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    
    res.json(req.user.Cart)

  }
);


router.get(
  '/address',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    
    res.json(req.user.address)

  }
);

router.post('/setaddress', passport.authenticate('jwt', { session: false }), (req, res) =>{

  const {  add } = req.body


console.log(add)

const profileFields = {
  add:add
}


let user =  User.findOneAndUpdate({  _id: req.user.id },{  $push: {"address":  profileFields  } },  { new: true, upsert: true },function(err, result) {
  if (err) {
     console.log(err)
      
  } 

  
console.log(result)

console.log('upadted')
res.json(result.address)
});





})




router.post('/placeorder', passport.authenticate('jwt', { session: false }), (req, res) =>{

console.log(req.body)

const uniqueNumber = (new Date()).getTime() + Math.trunc(365 * Math.random());
const {  item,price ,id ,   name,   merEmail , merPhone ,  add,  payment,   email , phone} = req.body;

 const array1 = req.user.Cart

 array1.forEach(function(item){
  console.log(item._id)
  console.log(item.merid)


  let user =  User.findOneAndUpdate({  _id: req.user.id , "Cart._id": item._id },{ "Cart.$.phone": req.body.phone , "Cart.$.name": req.body.name ,  "Cart.$.add": req.body.add ,  "Cart.$.payment": req.body.mode ,   },  { new: true, upsert: true },function(err, result) {
    if (err) {
       console.log(err)
        
    } 
  
    
 
    console.log(item._id)
  console.log('upadted')
  console.log(result.Cart);

    const profileFields = {
      _id:item._id,
      CosName:name,
      CosEmail:email,
      phone:phone,
     Dish:item.item,
      Price:item.price,
     add:item.add,
      payment:item.payment,
      status:"active",
      orderNumber:uniqueNumber,
      image:item.image,
      HotelName:item.HotelName,
      HotelPlace:item.HotelPlace
  
   
      



    }

  
  User.findOneAndUpdate({  _id: item.merid  },{  $push: {"booked":   profileFields }  },  { new: true, upsert: true },function(err, result) {
    if (err) {
    console.log(err)
    } 

    console.log(result)

    const applo = {
       _id:item._id,
       Dish: item.item,
       email: item.email,
       phone: item.phone,
       Price:item.price,
       add:item.add,
       status:"active",
       merEmail:item.merEmail,
       merPhone:item.merPhone,
       orderNumber:uniqueNumber,
       image:item.image,
       HotelPlace:item.HotelPlace,
      HotelName:item.HotelName,

  };

  
    User.findOneAndUpdate({_id: req.user.id} ,{   $push: {"applo":  applo  }   } ,{ new: true, upsert: true }, function(err,obj)  {
      if(err) {
        console.log(err)
      }
        
      else {
        
     
      
     
     console.log(obj)
        
     User.findOneAndUpdate({_id: req.user.id } ,{   $pull: {"Cart": {_id: item._id}}  } ,{ new: true, upsert: true }, function(err,obj)  {
      if(err) {
        console.log(err)
      }
        
      else {
        
     
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'vermapankaj3313@gmail.com',
            pass:  'Pankaj619'
                  }
        });
        
        var mailOptions = {
          from: 'Eatwell ',
          to: item.email,
          subject: 'Order Placed',
          text: "hello" + name + "Order Placed: Your order for" +  item.item +  "with order ID" + uniqueNumber + 'worth Rs'  + item.price +  " has been received. You can expect delivery in 20 min from  "  + item.HotelName +   item.HotelPlace   
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
    
        
        
      
     
     console.log(obj)
        
     

      }

    })

      }

    })
  
  });
 
  });



})

})



router.get(
  '/orders',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    
    res.json(req.user.applo)
    
  }
);



module.exports = router;

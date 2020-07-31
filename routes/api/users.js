const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

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
          role:user.role
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

const applo = {
  id: "sddsksdj"
}

let user =  User.findOneAndUpdate({  _id: req.user.id },{    $push: {"Cart":  applo  }    },  { new: true, upsert: true },function(err, result) {
  if (err) {
     console.log(err)
      
  } 

  
console.log(result.cart)



});

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



   console.log("not")
    const applo = {
      _id:req.body.id,
      name:req.body.name,
      price:req.body.price,
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

const { id} = req.body;
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


module.exports = router;

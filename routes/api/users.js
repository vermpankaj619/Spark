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
router.post("/register", (req, res) => {
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
        password: req.body.password
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
router.post("/login", (req, res) => {
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
          detials:user.detials
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
    
    res.json(req.user.detials)

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





router.post('/upadted', passport.authenticate('jwt', { session: false }), (req, res) =>{

  const {      name ,  Hotel,  Place ,address,Pincode,city, state  } = req.body



const profileFields = {


  name ,  Hotel,  Place ,address,Pincode,city, state


}
console.log(profileFields)


let user =  User.findOneAndUpdate({  _id: req.user.id },{ $set: {"detials":  profileFields  } },  { new: true, upsert: true },function(err, result) {
  if (err) {
     console.log(err)
      
  } 

  
console.log(result.detials)

console.log('u[adted')
res.json(result.detials)
});





})

router.post('/AddSchedule', passport.authenticate('jwt', { session: false })   , (req, res) => {


  console.log(req.body)

  const user = User.findOne({_id: req.user.id}, function(err,obj)  {
   if(err) {
     console.log('sdksk')
   }
    
   const { categories , img , Dish , Price , Type } = req.body;
  
   console.log(Type)
   
 
 const profileFields = {


  categories,
  img , Dish , Price , Type
  
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
 

         const {scid,time,  id, requestId, email, phone, name, Price, Type, } = req.body;

   console.log(req.body)
    const profileFields = {
        name,
        email,
         phone,
         Dish,
         _id:id,
         Price,
         Type,
         docid: requestId
         
    };


           User.findOneAndUpdate({  _id: requestId, "Scehedule._id": scid },{  $push: {"Scehedule.$.booked":   profileFields }  },  { new: true, upsert: true },function(err, result) {
              if (err) {
              console.log(err)
              } 

              console.log(result)

              const applo = {
   
              
                 _id:id,
                 Res : result.name,
                 Resemail: result.email,
                 Resphone: result.phone,
                 Dish,
                 Price,
                 Type
            };

            
              const user = User.findOneAndUpdate({_id: req.user.id} ,{   $push: {"applo":  applo  }   } ,{ new: true, upsert: true }, function(err,obj)  {
                if(err) {
                  console.log('sdksk')
                }
                  
                else {
                  
                  var smtpTransport = nodemailer.createTransport({
                    service: 'Gmail', 
                    auth: {
                      user: 'vermapankaj3313@gmail.com',
                      pass:  'Pankaj619'
                            }
                  });
                  var mailOptions = {
                    to: email,
                    from: 'learntocodeinfo@gmail.com',
                    subject: 'booked',
                    text: 'CONFIRMED Appointment ID:10099885 for May 17 at '+ time + ' with .'+ result.name + ' 32 Smiles Multispeciality Dental Clinic, 130, Green Garden Layout, Kundalahalli Gate, Sai Baba Temple Road, Silver Springs Layout,. ' + result.phone +  'To cancel give a missed call at: +918061914687. '
                      
                  };
                  smtpTransport.sendMail(mailOptions, function(err) {
                    console.log('mail sent');
                  
                    done(err, 'done');
                  });
                
               
                  res.render('confirm', {
                   
                    user:req.user,
                    time,
                    id,
                    requestId,
                    scid,
                    day,
                    name,
                    email,
                     phone,
                     time,

                
                   
                  })
                  
               

                }
        
              })
            
            });
           


 })

module.exports = router;

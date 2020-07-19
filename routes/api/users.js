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
     User.find({ $or: [{name: regex},{email: regex}] }, function(err, foundjobs) {
         if(err) {
             console.log(err);
         } else {
           console.log(foundjobs)
         }
     }); 
  }
});

const AWS = require('aws-sdk');
const Busboy = require('busboy');

const BUCKET_NAME = '';
const IAM_USER_KEY = '';
const IAM_USER_SECRET = '';

function uploadToS3(file) {
  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME
  });
  s3bucket.createBucket(function () {
    var params = {
      Bucket: BUCKET_NAME,
      Key: file.name,
      Body: file.data
    };
    s3bucket.upload(params, function (err, data) {
      if (err) {
        console.log('error in callback');
        console.log(err);
      }
      console.log('success');
      console.log(data);
    });
});
}

router.post('/upload', function (req, res, next) {
  // This grabs the additional parameters so in this case passing in
  // "element1" with a value.
    
  
    console.log(req.body)

  var busboy = new Busboy({ headers: req.headers });

  // The file upload has completed
  busboy.on('finish', function() {
    console.log('Upload finished');
    
    // Your files are stored in req.files. In this case,
    // you only have one and it's req.files.element2:
    // This returns:
    // {
    //    element2: {
    //      data: ...contents of the file...,
    //      name: 'Example.jpg',
    //      encoding: '7bit',
    //      mimetype: 'image/png',
    //      truncated: false,
    //      size: 959480
    //    }
    // }
    
    // Grabs your file object from the request.
    const file = req.files.File;
    console.log(file);
    
    // Begins the upload to the AWS S3
    uploadToS3(file);
  });

  req.pipe(busboy);
});

module.exports = router;

const axios = require('axios');
//const dotenv = require('dotenv');
//dotenv.config( { path : 'config.env'} )
//const PORT = process.env.PORT

exports.homeRoutes = (req, res) => {
   req.setTimeout(100000);
   // res.render('index',{users:[{},{},{}]})
   // Make a get request to /api/users
   axios.get('https://crud-app-noor.herokuapp.com:'+process.env.PORT+'/api/users')
      .then(function(response){
            res.render('index', { users : response.data });
       })
       .catch(err =>{
         res.send(err);
       })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get('https://crud-app-noor.herokuapp.com:'+process.env.PORT+'/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

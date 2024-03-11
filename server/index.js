import User from './models/register.js';
import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
const app = Express();
const secretKey = 'your_secret_key'; // Replace with a secret key for JWT

app.use(cors());
app.use(bodyParser.json());
const port = 5005;
app.listen(port, () => {
  console.log('Server is runnng on port ',port)});

  const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    console.log('Verifying token');
    console.log(token);
    console.log(token.split(' ')[1]);
    // if( !(token.split(' ')[1])){
    //   console.log('Token UNknown sent');
    //   res.send(token.split(' ')[1]);
    // }
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    if(true){
      console.log('Token UNknown sent');
    }
    jwt.verify(token.split(' ')[1], secretKey, (err, decoded) => {
      console.log("verify ");
        // if (err){
        // console.log('unaouthorized erroorrr') ;
        
        // return res.status(401).json({ error: 'Unauthorized' });
    // }
    console.log('aouthorixxzed ') ;
console.log(decoded) ;
        //  decoded.u;
        if(decoded === undefined){
        res.send({status:"unauthorized"})
        }
        else{
        req.user = decoded.user;
        console.log(req.user) ;

        res.send({ data:req.user });
        }
    });
};
app.get('/', async(req, res, next) => {
  console.log("get of home page");

    console.log(`hiiassa= ${req.headers.authorization}`);
    console.log("get of home page");
    try{
    verifyToken(req, res, () => {
        // Call next() after verifyToken completes
        next();
        // const data = req.user;
        // console.log(data);
        // res.send({ data: data });
    });

//  (req, res) => {
//     res.send({ data: 'Protected data' });
// }
}
catch(error){
  console.error('Error while finding user:', error);

}
}
);




app.post('/user/login', async (req, res) => {
  const receivedData = req.body.data;
  console.log('Received data:', receivedData, typeof receivedData);
  const email = receivedData['email'];
  const password = receivedData['password'];
  console.log('Received email:', email, 'Received password:', password);
  try {
    const userObject = await User.findOne({ where: { email, password } });
    console.log(userObject);
    if (userObject === null) {
      res.send('undefined');
    } else {
      console.log('result= ', userObject.dataValues);
      const user = userObject.dataValues;   
      const token_data = jwt.sign({ user }, secretKey, { expiresIn: '1h' });
      
      res.json({data : user, token :token_data });
        //  res.send(user); // Send back the user data in the response
    }
  } catch (error) {
    console.error('Error while finding user:', error);
    res.status(500).send('Internal Server Error');
  }
});

  
  
app.post('/user/register', (req, res) => {
  const receivedData = req.body.data;
  console.log('Received data:', receivedData, typeof receivedData);
  const name = receivedData['name'];
  const email = receivedData['email'];
  const password = receivedData['password'];

  (async () => {
    // Create a new user
    const userExist = await User.findOne({ where: { email, password } });
    if(userExist){
      res.send('Already registered');
    }
    
    else{
    const user = await User.create({
     name : name,
      email: email,
      password: password,
     
    }); 
  
    if(user){
      const userObject = await User.findOne({ where: { email, password } });
      console.log(userObject);
      
        console.log('result= ', userObject.dataValues);
        const user = userObject.dataValues;   
        const token_data = jwt.sign({ user }, secretKey, { expiresIn: '1h' });
        console.log(token_data);
        res.json({data : user, token :token_data });
          //  res.send(user); // Send back the user data in the response
      
    // res.send(user);
  }
    else{
      res.send(user);}
    
    console.log('User created:', user.toJSON());
  
  }})();
})

app.put('/user/updateuser/:id', (req,res) => {
  
      const id = req.params.id;
      
      const  data = req.body.data;
      console.log('Received data:', data);
      console.log('Received id:', id);

      const new_name = data['new_name'];
      const new_email = data['new_email'];
      const password = data['password'];
      (async () => {
        const update_result = await User.update({name :new_name, email :new_email},{where:{id:id}});
       const email = new_email;
        const userObject = await User.findOne({ where: { email, password } });
        console.log('result= ', userObject.dataValues);
        const user = userObject.dataValues;       
        // console.log(`user_token = ${user_token.dataValues}`);
        console.log(`update result = ${update_result}`);
        // const user = user_token.dataValues;
          
        if(update_result){
          const token_data = jwt.sign({ user }, secretKey, { expiresIn: '1h' });
          res.json({data : user, token :token_data });
          
          // res.send(user);
        }
        else{
          res.send(null);
        }
})();
}
)
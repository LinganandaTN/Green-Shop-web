import User from './models/register.js';
import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = Express();

app.use(cors());
app.use(bodyParser.json());

const port = 5005;
app.listen(port, () => {
  console.log('Server is runnng on port ',port)});

app.post('/user/login', (req, res) => {
  const receivedData = req.body.data;
  console.log('Received data:', receivedData, typeof receivedData);
  const email = receivedData['email'];
  const password = receivedData['password'];
  console.log('Received email:', email, 'Received password:', password);
    (async () => {
      const user = await User.findOne({where:{email, password}} );
      console.log('result= ', user  );

      if (user==null){
        res.send('undefined');
      }
      else{
      res.send(user);}
    })();
  })
  
app.post('/user/register', (req, res) => {
  const receivedData = req.body.data;
  console.log('Received data:', receivedData, typeof receivedData);
  const name = receivedData['name'];
  const email = receivedData['email'];
  const password = receivedData['password'];
  (async () => {
    // Create a new user
    const user = await User.create({
     name : name,
      email: email,
      password: password,
      
    }); 
    if(user){
    res.send(user);}
    else{
      res.send(user);}
    
    console.log('User created:', user.toJSON());
  
  })();
})

app.put('/user/updateuser/:id', (req,res) => {
  // const receivedData = req.body.data;
  // console.log('Received data:', receivedData, typeof receivedData);
  // const name = receivedData['name'];
  // const email = receivedData['email'];
  // const password = receivedData['password'];
  // (async () => {
  //   // Create a new user
  //   const user = await User.create({
  //    name : name,
  //     email: email,
  //     password: password,
      
  //   }); 
  //   if(user){
  //   res.send(user);}
  //   else{
  //     res.send(user);}
    
  //   console.log('User created:', user.toJSON());
  
  // })();
      // const email = req.params.email;
      const id = req.params.id;
      
      const  data = req.body.data;
      console.log('Received data:', data);
      console.log('Received id:', id);

      const new_name = data['new_name'];
      const new_email = data['new_email'];
      const password = data['password'];
      (async () => {
        const user = await User.update({name :new_name, email :new_email},{where:{id:id}});
        console.log(user);
        if(user){
          res.send(user);}
        else{
          res.send(null);
        }
})();
}
)
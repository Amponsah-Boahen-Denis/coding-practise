//const people=[{name:'philip',age:34},{name:'Simon',age:24},{name:'Denis',age:22}];
//const answer=people.reduce((total,all)=>total + all.age,0)
//console.log(answer);
/*const express=require('express')
const port=process.env.PORT || 5000, //this is our port number;
const app=express(); //this is our app orinstance of express;
//apimiddlewares
app.use(express.json()); //this is to accept data in json formate;
app.use(express.static('public'));
app.use(express.urlencoded()); //this is basically to decode the data send through html form;
//api routes
app.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})
app.post('/formPost',(req,res)=>{
console.log(req.body); // the data we get is in the body of request
res.sendFile(__dirname + '/public/thanks.html   ')
})
//this is basically to listen on port
app.listen(port,()=>console.log('page is loged on port'));

const express=require('express');
const app=express()
const port=process.env.PORT || 5000;
app.get('',(req,res)=>{
    res.sendFile(__dirname + '')
})


const express=require('express');
const app= express();

//app.use(express.static('public'));
//app.use(express.json())
//app.use(express.urlencoded());

app.get('/index.html',(req,res)=>{
//res.sendFile(__dirname+'/index1.html')
})

//app.post()


const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`port ${PORT} is successfully loged`))
 */

/*class List{
    constructor(){
        this.head=head;
        this.tail=tail;
    }
append(value){
        const answers={value:value,next:null}
        if(tail){
            this.tail.next=answers
        }
        this.tail=answers
        if(!head) return this.head=answers;
    }
    toArray(){
    }
}
const EventEmitter=require('events');
const emitter= new EventEmitter();
emitter.on('message',()=>console.log('i am fired'));
emitter.on('message',()=>console.log('i am fired'));
emitter.on('message',()=>console.log('i am fired'));
emitter.emit('message');*/

//const buf=Buffer.from('hey');
//console.log(buf.toString());
//const path=require('path');
//file=path.isAbsolute('tutorial/text.json');
//console.log(file);

//const buf=Buffer.alloc(4)
//buf.write('hey')
//console.log(buf.toString())
//bug[1]//0
//consloe.log(buf.toString())

//const http=require('http');
//const fs=require('fs');
//const server=http.createServer((req,res)=>{
//const stream=fs.createReadStream('index.thml')
//stream.pipe(res)
//});


//const http=require('http');
//const data=JSON.stringify({
// name:'john',
//  job:'frontend developer'
//})
//request
//const req=http.request((hostname:'request in',path:'/api/users',()=>{}))


// throw new('error message')

//try{
// code lines
//} catch(){}
//doSomething()
//.then(doSomething2)
//.then(doSomething3)
//.catch(err=>console.error(err))

/* const express = require('express');
 const path=require('path');
 const app = express();
 //app.get('/',(req,res)=>{
   //  res.sendFile(path.join(__dirname,'public','index.html'))
 //});

 app.use(express.static(path.join(__dirname,'public')))
 const PORT=process.env.PORT || 5000;
 app.listen(PORT,()=>console.log(`we are starting on port ${PORT}`))
 app.get('/api/menbers',(req,res)=>{
 res.json(members)
 })

const express=require('express');
const app=express();

 app.

const PORT=process.env.PORT || 5000;

//middlewares
app.use(express.static('public'));
app.use(express.json())
//routes
app.get('/form',(req,res)=>{
res.sendFile(__dirname + 'filename here')
})
app.post('/post',()=>{ 
})

app.listen(PORT,()=>console.log('port is recieve successfully asured'))*/
/*const names= 'yaw';
const storei=JSON.stringify(names);
localStorage.setItem('item',storei);
const answer=localStorage.getItem('item')
const show=JSON.parse(answer);
const http=require('http');
const fs=require('fs');
const path=require('path');
const server=http.createServer((req,res)=>{
const stream=fs.createReadStream()
stream.pipe(res)
})
const [post,setPost]=useState([])
useEffect(() => {
    axios
    .get('kgtjhiojtyihm')
    .then(res=>{
        console.log(res)
        setPost(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}, [])
app.use(espress.Urlencoded({extended:true}))
const express=require('express');
const app= express();
const loger=function(req,res,next){
    console.log("loged")
    next()
}
const time=function(req,res,next){
    req.reqTime=Date.now()
    next();
}
app.use(loger)
app.use(time)
app.get('/',function(req,res){
    res.send(`current.time &{req.reqTime}`)
})

app.listen(3000,()=>console.log('app started on port 3000'))

const express=require('express');
const app= express();
const port =express.env.port || 5000;
app.listen(port)

const normal=(req,res,next)=>{
    console.log('helloo')
    next();
}
const helloo=(req,res,next)=>{
    console.log('me');
    next();
}
app.set('view engine','ejs')
app.use(helloo);
app.use(normal);
app.get('/',function(req,res){
res.send('i am in for good')
})
app.listen(3000,()=>console.log('message is fired'))
app.use(express.static('public'));
const publicpath=path.resolve(__dirname,'public');
app.use(publicpath,express.static('static'));
const ssss=path.resolve(__dirname,public)
app.use(ssss,express.static(''))

const nlll=path.resolve(__dirname,'public');
app.use(nlll,express.static('public'))

app.get('/one',()=>console.log('iam one person'));
const sssa=path.resolve(__dirname,'public');
app.use(sssa,express.static('public'));
const store=path.resolve(__dirname,'public)
app.use(store,express.static('public))
//views
app.set('view engine','pug')
app.set('view engine','e.js);
app.use('view engine','e.js')
//or
app.get('/:id',(req,res)=>{
   const show = req.params.id
    res.send(show)
})
app.set('views','/view')
app.get('/',function(req,res){
res.render('index')
}).listen(3000,()=>console.log('i am the server you know'))
*/
 
// const express=require('express');
// const app=express;
// app.
// app.get('/',(req,res,next)=>{
//     res.render('hello')
//     next();
// })
// app.get('/index',(req,res,next)=>{
//     res.render('hello')
//     next();
// })
// app.listen(3000,()=>console.log('my port is running on port 3000'))
// const express=require('express');
// const app= express;
// app.use(logger)
// app.get('',(req,res,next)=>{
//     res.send('Home Page')
//     next()
// })
// app.get('',(req,res,next)=>{
//     res.send('users page')
//     next()
// })
// function logger(req,res,next)=>{
//     console.log('log')
//     next()
// }

// app.listen(3000)
/*const aa=[]
app.post('/',async (req,res)=>{
    aa=bcrypt.hash(req.body.password,10)
try{
aa.push({
    id:new Date().getTime(),
   name:req.body.name,
   age:req.body.age 
})
}
})
const express=require('express')
const app=express()

app.get('/' ,(req,res)=>{
res.render('hello friend')
})
app.get('./public/index.html' ,(req,res)=>{
   
})
app.get('./public/index1.html' ,(req,res)=>{
    res.res.json({MESSAGE:'HELOO'})
    res.DOWNLOAD('SERVER.JS')
    res.render('index',{text:'hello"})
    <%='default'%>


})
app.get('/:id',(req,res)=>{
    req.params.id
})
app.put('',(req,res)=>{
    res.send("update")
})
app.delete('',(req,res)=>{
    res.send("delete user")
})
app.listen(3000)
if(process.env.NODE_ENV !=='production'){
     require('dotenv').config()
}

const express=require('express');
const req = require('express/lib/request');
const app=express();
const passport =require('passport-local')
const bcrypt= require('bcrypt')
const flash=require('express-flash')
const session=require('express-session')
const initializepassport= require('./passport-config')
initializepassport(passport,
      email=> users.find(user.email === email),
      id=>users.find(user => user.id === id)
)

 app.use(express.urlencoded({extended:false}));
 app.use(express.json());
 app.use(express.static('public'));
 app.use(flash())
 app.use(session({
      secret:Process.env.SESSION_SERET,
      resave:false,
      saveUninitialized: false
 }))
 app.use(passport.initialize())
 app.use(passport.session())
 const users=[];
 app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/public/login.html')
 })
//how to register someone.
app.post('/register',async (req,res)=>{
try{
     const hashpassword= await bcrypt.hash(req.body.password,10);
     users.push({
          id:new Date().getTime(),
         name:req.body.name,
          email:req.body.email,
          password:hashpassword
      })
      res.redirect('/login')
}catch{
     res.redirect('/register')
}
 
app.get('/login',(req,res)=>{
     res.sendFile(__dirname + '/public/logout.html')
})

 })
 app.post('/login',passport.authenticate('local',{
      successRedirect:'/',
      failureRedirect:'/login',
      failureFlash:true
 }))
 
 
app.get('/register',(req,res)=>{
     res.sendFile(__dirname + '/public/register.html')
  
})

function checkAuthenticated(req, res, next){
     if(req.isAuthenticated()){
          return next()
     }
     res.redirect('/login')
}
function checkNotAuthenticated(req, res, next){
     if(req.isAuthenticated()){
       return   res.redirect('/')
       
     }
 next()
}
app.listen(3000)

/*
const express=require('express');
const app=express();
app.get('/login',(req,res)=>{
res.sendFile(__dirname + '/public/login.html')
})
app.listen(3000)


const localStrategy = require('passport-local').strategy
const bcrypt = require('bcrypt')
function initialize(passport, getUserByEmail, getUserById){
    const authenticateUser= async (email,password,done)=>{
const user = getUserByEmail(email)
if(user==null) done(null,false, {'no user with that email'})
try{
    if(await bcrypt.compare(password,user.password)){
return done(null, user)
    }else{
        return done(null, false, {message: 'password incorect'})
    }
}catch(e){
return done(e)
}

    }
passport.use(new localStrategy({usernameField:'email'}),authenticateUser)
passport.serializeUser((user, done)=>done(null, user.id))
passport.deserializeUser((id, done)=>{
    return done(null, getUserById(id))
})
}
modules.export=initialize
*/



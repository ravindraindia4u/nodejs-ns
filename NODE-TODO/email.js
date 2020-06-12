const nodemailer=require("nodemailer");

const transporter=nodemailer.createTransport([
  {
    service:"Gmail",
    auth:{
      user:"ravindraglobal4u@gmail.com",
      pass:"Ravindra@1997"
    }
  }
])

var mailOptions={
  from:"Ravi infotech <ravindraglobal4u@gmail.com>",
  to:"ravindraindia4u@gmail.com",
  subject:"Node Email",
  text:"This is a messsage from node Js"
}

transporter.sendMail(mailOptions,function(error,info){
  if(error){
    console.log(error);
  }
  else{
    console.log("Email was sent successfully");
  }
})

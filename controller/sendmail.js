const nodemailer = require('nodemailer');


 const mail=async(req,res)=>{
    
        const transporter=nodemailer.createTransport({
    
            host:process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            secure:true,
            auth:{
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASS
            }
        })
        const mailOptions={
           
            to:process.env.SMTP_USER,
            subject:req.body.subject,
            text:`Name: ${req.body.name} \n Email: ${req.body.email} \n Message: ${req.body.message}`
            
        }
        transporter.sendMail(mailOptions,function(err,info){
            if(err)
            {
                 console.log("err",err)
            }
            console.log("email sent",info.response)
        })
}
module.exports={mail}

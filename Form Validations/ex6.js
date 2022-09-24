function formvalidations()
{
    //Target_uname_input
    var uname_input=document.getElementById('uname')
    var email_input=document.getElementById('email')
    var pwd_input=document.getElementById('pwd')
    var finalstatus = true;
    //errors
    var uname_span=document.getElementById('uname_span')
    var email_span=document.getElementById('email_span')
    var pwd_span=document.getElementById('pwd_span')

    //icons
    var wrong=`<i class="bi bi-exclamation-circle-fill"></i>`
    var right=`<i class="bi bi-check-circle-fill"></i>`

    //uname
    if(uname_input.value =="" || uname_input.value == undefined)
    {
        uname_span.innerHTML=`${wrong} Enter Name`
        uname_input.style.border="1px solid #f00c0c"
        uname_span.className="text-danger" 
        finalstatus = false;

    } else if(!uname_input.value.match(/^[a-z]+$/)){
        
        uname_span.innerHTML=`${wrong} Enter Lowercase Alphabets only`
        uname_input.style.border="1px solid #f00c0c"
        uname_span.className="text-danger" 
        finalstatus = false;

    } else {
        uname_span.innerHTML=`${right} Thank you`
        uname_input.style.border="1px solid #10d909"
        uname_span.className="text-success"   // Js_with_Bootstrap
       
    }
    //email
     if(email_input.value=="" || email_input.value==undefined)
     {
         email_span.innerHTML=`${wrong} Enter Email`
         email_input.style.border="1px solid #f00c0c"
         email_span.className="text-danger"   // Js_with_Bootstrap
         finalstatus = false;

    } else  if(!email_input.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/))
    {
        
        email_span.innerHTML=`${wrong} Enter valid email name@domain.ext`
        email_input.style.border="1px solid #f00c0c"
        email_span.className="text-danger"   // Js_with_Bootstrap
        finalstatus = false;

    } else {
        email_span.innerHTML=`${right} Thank you`
        email_input.style.border="1px solid #10d909"
        email_span.className="text-success"   // Js_with_Bootstrap
        
     }
    //password
      if(pwd_input.value=="" || email_input.value==undefined)
      {
          pwd_span.innerHTML=`${wrong} Enter password`
          pwd_input.style.border="1px solid #f00c0c"
          pwd_span.className="text-danger"   // Js_with_Bootstrap
          finalstatus = false;
      } else  if(!pwd_input.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/))
      {
          
          pwd_span.innerHTML=`${wrong} one_uppercase,lowercase,number,special character must`
          pwd_input.style.border="1px solid #f00c0c"
          pwd_span.className="text-danger"   // Js_with_Bootstrap
          finalstatus = false;
  
      } else {
      pwd_span.innerHTML=`${right} Thank you`
      pwd_input.style.border="1px solid #10d909"
      pwd_span.className="text-success"   // Js_with_Bootstrap
      
      }
      return finalstatus;
}











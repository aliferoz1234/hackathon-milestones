document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();//prevent page reload

 
//collect input values
    const name=(document.getElementById('name') as HTMLInputElement).value;
    const email=(document.getElementById('email') as HTMLInputElement).value;
    const phone=(document.getElementById('phone') as HTMLInputElement).value;
    const education=(document.getElementById('education') as HTMLInputElement).value;
    const experience=(document.getElementById('experience') as HTMLInputElement).value;
    const skills=(document.getElementById('skills') as HTMLInputElement).value;

   
    // resume output
    const resumeOutput=
    `<h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Phone:</b>${email}</p>
    <p><b>phone:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>`;

    const resumeOutputElement=document.getElementById('resumeDisplay') as HTMLDivElement
    if(resumeOutputElement){
        resumeOutputElement.innerHTML=resumeOutput
    }
    else{
        console.error('the resume output elements are missing')
    }
   
})




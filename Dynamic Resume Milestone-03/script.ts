document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();//prevent page reload

 
//collect input values
    const profilePictureInput=(document.getElementById("profilePicture") as HTMLInputElement).files?.[0]
    const profilePictureURL=profilePictureInput?URL.createObjectURL(profilePictureInput):"";
    const name=(document.getElementById('name') as HTMLInputElement).value;
    const email=(document.getElementById('email') as HTMLInputElement).value;
    const phone=(document.getElementById('phone') as HTMLInputElement).value;
    const education=(document.getElementById('education') as HTMLTextAreaElement).value;
    const experience=(document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills=(document.getElementById('skills') as HTMLTextAreaElement).value;

   
    // resume output
    const resumeOutput=`
    <h2><b>Resume</b></h2>
    <img src="${profilePictureURL}" alt="Profle Picture" class="profilePicture">
    <h3>Personal Information</h3>
    <p><b>Name: </b>${name}</p>
    <p><b>Email: </b>${email}</p>
    <p><b>Phone: </b>${phone}</p>

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




document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();//prevent page reload

 
//collect input values
    const profilePictureInput=(document.getElementById("profilePicture") as HTMLInputElement).files?.[0]
    const profilePictureURL=profilePictureInput?URL.createObjectURL(profilePictureInput):"";
    const name=(document.getElementById('name') as HTMLInputElement).value;
    const email=(document.getElementById('email') as HTMLInputElement).value;
    const phone=(document.getElementById('phone') as HTMLInputElement).value;
    const education=(document.getElementById('education') as HTMLInputElement).value;
    const experience=(document.getElementById('experience') as HTMLInputElement).value;
    const skills=(document.getElementById('skills') as HTMLInputElement).value;

   
    // resume output
    const resumeOutput=
    `<h2><b>Resume</b></h2>
    <img src="${profilePictureURL}" alt="Profle Picture" class="profilePicture">
    <h3>Personal Information</h3>
    <p><b>Name: </b><span contenteditable="true">${name}</span></p>
    <p><b>Email: </b><span contenteditable="true">${email}</span></p>
    <p><b>Phone: </b><span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p cotenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>`;

    const resumeOutputElement=document.getElementById('resumeDisplay') as HTMLDivElement
    if(resumeOutputElement){
        resumeOutputElement.innerHTML=resumeOutput
    }
    else{
        console.error('the resume output elements are missing')
    }
   
})




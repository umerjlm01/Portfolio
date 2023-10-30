const sections = document.querySelectorAll('.section');
const sectbtns = document.querySelectorAll('.controls');
const sectbtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');

function PageTransitions() {
    for (let i = 0; i < sectbtn.length; i++) { // Fix the loop condition
        sectbtn[i].addEventListener('click', function() {
            let currentbtn = document.querySelector('.active-btn'); // Use querySelector to find the currently active button
            if (currentbtn) {
                currentbtn.classList.remove('active-btn'); // Remove the 'active-btn' class from the currently active button
            }
            this.classList.add('active-btn'); // Add the 'active-btn' class to the clicked button
        });
    }
}
allsections.addEventListener('click', (e) =>{
    const id= e.target.dataset.id;
    if(id){
        sectbtns.forEach((btn) => {
btn.classList.remove('active')
        })
        e.target.classList.add('active')
        //hide setions
        sections.forEach((section) =>{
            section.classList.remove('active')
        })
        const element= document.getElementById(id);
        element.classList.add('active');
    }
})

// Theme Button

const themebtn = document.querySelector('.theme-btn')
themebtn.addEventListener('click', () =>{
    let element = document.body;
    element.classList.toggle('light-mode')

})



PageTransitions();



  

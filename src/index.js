const chk = document.getElementById('chk');
const hability = document.getElementsByClassName('hability');
const aboutMeBox = document.getElementById('about_me');
const aboutMe = document.getElementById('about_me_description');
const header = document.getElementById('header');

console.log(hability)

chk.addEventListener('change', () => {
    document.body.classList.toggle('ligth');

    for (let i = 0; i < hability.length; i++) {
        hability[i].classList.toggle('ligth');
    }
  
    aboutMe.classList.toggle('ligth');
    aboutMeBox.classList.toggle('ligth');
    header.classList.toggle('ligth')
});



var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

for (let x = 0; x < topics.length; x++) {
  console.log(topics[x])
};

// if (topic === 'HTML') {
//   console.log("Let's study HTML!");
// } else if (topic === 'CSS') {
//   console.log("Let's study CSS!");
// } else if (topic === 'Git') {
//   console.log("Let's study Git!");
// } else if (topic === 'JavaScript') {
//   console.log("Let's study JavaScript!");
// } else {
//   console.log('Please try again!');
// }

// const switchElement = document.querySelector('.switch')

// switchElement.addEventListener('click', () => {
//   document.body.classList .toggle('dark')
//   document.section.classList.toggle('dark')
// })

const switchElement = document.querySelector('.switch');

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  const sectionElements = document.querySelectorAll('section');
  sectionElements.forEach((section) => {
    section.classList.toggle('dark');
    
    const cardElements = section.querySelectorAll('.card');
    cardElements.forEach((card) => {
      card.classList.toggle('dark');
    });
  });
});

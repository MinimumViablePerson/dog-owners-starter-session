// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

// We need to add the dogs in the list
let dogList = document.querySelector('.dogs-list')
// We need the section where the dog clicked will be displayed
let dogSection = document.querySelector('.main__dog-section')

function addDogListItem(dog) {
  // <li class="dogs-list__button">Mr. Bonkers</li>
  let liEl = document.createElement('li')
  liEl.className = 'dogs-list__button'
  liEl.textContent = dog.name
  dogList.append(liEl)
}

function displayDog(dog) {
  // Remove previous content
  dogSection.textContent = ''

  // Add dog info

  // <h2>Mr. Bonkers</h2>
  //  <img
  //  src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
  //  alt=""
  //  />
  //  <div class="main__dog-section__desc">
  //  <h3>Bio</h3>
  //  <p>
  //  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
  //  minima voluptates libero cumque rerum consequatur optio aliquid sint
  //  eum maxime illo laborum omnis quo ab rem cupiditate nulla
  //  perspiciatis ipsum!
  //  </p>
  //  </div class="main__dog-section__btn">
  //  <p><em>Is naughty?</em> yes!</p>
  //  <button>Good dog!</button>

  const pEl = document.createElement('p')
  pEl.textContent = dog.name

  dogSection.append(pEl)
}

for (let dog of data) {
  addDogListItem(dog)
}

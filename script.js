function side_menu_on() {
  document.getElementById("side-menu").style.display='flex';
  }
function side_menu_off(){
  document.getElementById("side-menu").style.display='none';
}


// js for cards in collections-------------------------------------
const collections = [
  { 
    imgSrc: 'back.jpeg',
    heading: 'Collection 1',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo odit aut nihil, earum error deleniti doloribus ut ducimus alias iusto.',
    url: 'https://vbochliya.github.io/Nikunj-trading-details/'
  },
  { 
    imgSrc: 'back.jpeg',
    heading: 'Collection 2',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo odit aut nihil, earum error deleniti doloribus ut ducimus alias iusto.',
    url: 'https://vbochliya.github.io/Nikunj-trading-details/'
  },
  { 
    imgSrc: 'back.jpeg',
    heading: 'Collection 3',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo odit aut nihil, earum error deleniti doloribus ut ducimus alias iusto.',
    url: 'https://vbochliya.github.io/Nikunj-trading-details/'
  }
  ,
  { 
    imgSrc: 'back.jpeg',
    heading: 'Collection 4',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo odit aut nihil, earum error deleniti doloribus ut ducimus alias iusto.',
    url: 'https://vbochliya.github.io/Nikunj-trading-details/'
  }
  ,
  { 
    imgSrc: 'back.jpeg',
    heading: 'Collection 5',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo odit aut nihil, earum error deleniti doloribus ut ducimus alias iusto.',
    url: 'https://vbochliya.github.io/Nikunj-trading-details/'
  }
];

// Select the #collections section
const collectionsSection = document.getElementById('collections');

// Loop through each collection and create corresponding HTML
collections.forEach(collection => {
  // Create elements
  const collectionCard = document.createElement('div');
  const anchor = document.createElement('a'); // Create anchor element

  const img = document.createElement('img');
  const heading = document.createElement('h3');
  const detail = document.createElement('span');

  // Set attributes and content
  collectionCard.classList.add('collection-card', 'm-10'); // Adding multiple classes at once

  anchor.href = collection.url; // Set anchor's href to the collection's URL
  anchor.target = '_blank'; // Optional: Opens link in a new tab

  img.src = collection.imgSrc;
  img.alt = '';

  heading.classList.add('collection-card-heading', 'my-10'); // Adding multiple classes at once
  heading.textContent = collection.heading;

  detail.classList.add('collection-card-detail', 'txt-center'); // Adding multiple classes at once
  detail.textContent = collection.detail;

  // Append img, heading, and detail to anchor
  anchor.appendChild(img); // Append the img inside the anchor
  collectionCard.appendChild(anchor); // Append the anchor to the collectionCard
  collectionCard.appendChild(heading);
  collectionCard.appendChild(detail);

  // Append collectionCard to collectionsSection
  collectionsSection.appendChild(collectionCard);
});


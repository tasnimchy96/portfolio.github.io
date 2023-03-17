function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

document.querySelector('.open').addEventListener('click', openNav);
document.querySelector('.close').addEventListener('click', closeNav);

// Modal data array - customize this to your needs
const modalData = [
  {
    project_title: 'Tonic',
    project_client: 'CANOPY',
    client_service: ' Back End Dev',
    service_year: ' 2015',
    desktop_image: './images/snapshot-1.svg',
    project_details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    html: 'Html',
    css: 'Css',
    javascript: 'JavaScript',
    github: 'Github',
    ruby: 'Ruby',
    bootstrap: 'Bootstrap',
    live: 'See live',
    live_icon: './images/live.png',
    source: 'See Source',
    source_icon: './images/source.png',
    source_link: 'https://github.com/tasnimchy96/portfolio.github.io',
    mobile_image: './images/modal-snapshot-mobile.png',
  },
  {
    project_title: 'Tonic',
    project_client: 'CANOPY',
    client_service: ' Back End Dev',
    service_year: ' 2015',
    desktop_image: './images/snapshot-2.svg',
    project_details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    html: 'Html',
    css: 'Css',
    javascript: 'JavaScript',
    github: 'Github',
    ruby: 'Ruby',
    bootstrap: 'Bootstrap',
    live: 'See live',
    live_icon: './images/live.png',
    source: 'See Source',
    source_icon: './images/source.png',
    source_link: 'https://github.com/tasnimchy96/portfolio.github.io',
    mobile_image: './images/modal-snapshot-mobile.png',
  },
  {
    project_title: 'Tonic',
    project_client: 'CANOPY',
    client_service: ' Back End Dev',
    service_year: ' 2015',
    desktop_image: './images/snapshot-3.svg',
    project_details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    html: 'Html',
    css: 'Css',
    javascript: 'JavaScript',
    github: 'Github',
    ruby: 'Ruby',
    bootstrap: 'Bootstrap',
    live: 'See live',
    live_icon: './images/live.png',
    source: 'See Source',
    source_icon: './images/source.png',
    source_link: 'https://github.com/tasnimchy96/portfolio.github.io',
    mobile_image: './images/modal-snapshot-mobile.png',
  },
  {
    project_title: 'Tonic',
    project_client: 'CANOPY',
    client_service: ' Back End Dev',
    service_year: ' 2015',
    desktop_image: './images/snapshot-4.svg',
    project_details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    html: 'Html',
    css: 'Css',
    javascript: 'JavaScript',
    github: 'Github',
    ruby: 'Ruby',
    bootstrap: 'Bootstrap',
    live: 'See live',
    live_icon: './images/live.png',
    source: 'See Source',
    source_icon: './images/source.png',
    source_link: 'https://github.com/tasnimchy96/portfolio.github.io',
    mobile_image: './images/modal-snapshot-mobile.png',
  },
];

// Get the modal container element
const modalContainer = document.getElementById('modal-container');

// Get the button elements that open the modals
const openModalButtons = document.querySelectorAll('.openModalBtn');
// Loop through the button elements and add event listeners
openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the index of the modal data from the data-modal attribute
    const modalIndex = button.getAttribute('data-modal');

    // Get the corresponding modal data from the modalData array
    const modal = modalData[modalIndex];

    // Create the HTML for the modal content
    const modalHTML = `
      <div class="my-modal">
        <div class="modal-project-headline">
          <h2>${modal.project_title}</h2>
          <div class="modal-project-client">
            <p class="modal-snapshot-title">${modal.project_client}</p>
            <span class="modal-circle"></span>
            <p>${modal.client_service}</p>
            <span class="modal-circle"></span>
            <p>${modal.service_year}</p>
          </div>
        </div>
        <img src="${modal.desktop_image}" alt="" />
        <div class="modal-project-info">
          <p>
            ${modal.project_details}
          </p>
          <div>
            <ul class="modal-used-language">
              <li class="modal-language"><a href="">${modal.html}</a></li>
              <li class="modal-language"><a href="">${modal.css}</a></li>
              <li class="modal-language"><a href="">${modal.javascript}</a></li>
              <li class="modal-language lan"><a href="">${modal.github}</a></li>
              <li class="modal-language lan"><a href="">${modal.ruby}</a></li>
              <li class="modal-language lan"><a href="">${modal.botstrap}</a></li>
            </ul>
            <hr class="modal-hr"/>
            <div class="modal-buttons">
              <button class="modal-button">${modal.live} <img src="${modal.live_icon}" alt="" /></button>
              <button class="modal-button">
                ${modal.source} <img src="${modal.source_icon}" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Add the modal HTML to the modal container
    modalContainer.innerHTML = modalHTML;

    // Show the modal
    modalContainer.style.display = 'block';

    // Add click event listener to close the modal when clicked outside the modal content
    modalContainer.addEventListener('click', (event) => {
      if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
      }
    });
  });
});

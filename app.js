const sectors = [
  {
    title: 'Education',
    stage: 'Core',
    description:
      'Learning products, tutoring systems, upskilling pathways, and school operations tools.',
  },
  {
    title: 'Healthcare',
    stage: 'Core',
    description:
      'Telehealth workflows, patient engagement, diagnostics support, and care logistics.',
  },
  {
    title: 'Climate',
    stage: 'Emerging',
    description:
      'Carbon tracking, sustainable mobility, energy optimization, and green analytics.',
  },
  {
    title: 'Finance',
    stage: 'Core',
    description:
      'Payments, budgeting, credit workflows, compliance automation, and fintech APIs.',
  },
  {
    title: 'Community',
    stage: 'Impact',
    description:
      'Local networks, volunteer coordination, social services delivery, and civic engagement.',
  },
  {
    title: 'Creator Economy',
    stage: 'Emerging',
    description:
      'Audience tools, monetization workflows, brand partnerships, and creator analytics.',
  },
  {
    title: 'Agriculture',
    stage: 'Impact',
    description:
      'Farm planning, crop intelligence, marketplace links, and supply-chain monitoring.',
  },
  {
    title: 'Logistics',
    stage: 'Core',
    description:
      'Routing, fleet management, warehouse visibility, and fulfillment orchestration.',
  },
];

const grid = document.getElementById('sectorGrid');
const filterButtons = document.getElementById('filterButtons');
const year = document.getElementById('year');

const filters = ['All', ...new Set(sectors.map((sector) => sector.stage))];
let selectedFilter = 'All';

function renderFilters() {
  filterButtons.innerHTML = '';

  filters.forEach((filter) => {
    const button = document.createElement('button');
    button.className = `filter-chip${selectedFilter === filter ? ' active' : ''}`;
    button.textContent = filter;
    button.type = 'button';
    button.addEventListener('click', () => {
      selectedFilter = filter;
      renderFilters();
      renderSectors();
    });

    filterButtons.appendChild(button);
  });
}

function renderSectors() {
  const visibleSectors =
    selectedFilter === 'All'
      ? sectors
      : sectors.filter((sector) => sector.stage === selectedFilter);

  grid.innerHTML = '';

  visibleSectors.forEach((sector) => {
    const card = document.createElement('article');
    card.className = 'card';

    const title = document.createElement('h3');
    title.textContent = sector.title;

    const detail = document.createElement('p');
    detail.textContent = `${sector.stage} · ${sector.description}`;

    card.append(title, detail);
    grid.appendChild(card);
  });
}

year.textContent = new Date().getFullYear();
renderFilters();
renderSectors();

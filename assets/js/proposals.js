(() => {
  const page = document.querySelector('.proposal-page');
  if (!page) return;

  const form = page.querySelector('.proposal-filters');
  const topic = form.querySelector('[name="topic"]');
  const level = form.querySelector('[name="level"]');
  const cards = Array.from(page.querySelectorAll('.proposal-card'));
  const groups = Array.from(page.querySelectorAll('.proposal-group'));
  const status = page.querySelector('.proposal-results');
  const empty = page.querySelector('.proposal-empty');

  function filterIdeas() {
    let count = 0;
    cards.forEach(card => {
      const matchesTopic = topic.value === 'all' || card.dataset.topics.split(' ').includes(topic.value);
      const matchesLevel = level.value === 'all' || card.dataset.levels.split(' ').includes(level.value);
      card.hidden = !(matchesTopic && matchesLevel);
      if (!card.hidden) count += 1;
    });
    groups.forEach(group => {
      group.hidden = !group.querySelector('.proposal-card:not([hidden])');
    });
    status.textContent = `Showing ${count} of ${cards.length} ideas`;
    empty.hidden = count !== 0;
  }

  // A shared idea link always reveals its target, even after filters were used.
  function revealLinkedIdea() {
    const card = cards.find(item => `#${item.id}` === window.location.hash);
    if (!card) return;
    if (card.hidden) {
      topic.value = 'all';
      level.value = 'all';
      filterIdeas();
    }
    card.querySelector('details').open = true;
    card.scrollIntoView({ block: 'start' });
  }

  form.addEventListener('change', filterIdeas);
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('reset', () => {
    // The browser restores the select values after the reset event.
    window.setTimeout(filterIdeas, 0);
  });
  window.addEventListener('hashchange', revealLinkedIdea);
  form.hidden = false;
  filterIdeas();
  revealLinkedIdea();
})();

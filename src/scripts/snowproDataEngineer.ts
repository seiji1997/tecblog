// Kept small and independent of the lesson bodies to avoid shipping content JSON twice.
const objectiveIds = ['1.1','1.2','1.3','1.4','1.5','1.6','1.7','2.1','2.2','2.3','3.1','3.2','3.3','4.1','4.2','5.1','5.2','5.3','5.4','5.5','5.6','5.7'];
const validIds = new Set(objectiveIds);
const storageKey = 'seiji-atlas:dea-c02:objectives:v1';
let state: Record<string, boolean> = {};
let canSave = true;

function loadState() {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '{}');
    state = {};
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      for (const [key, value] of Object.entries(parsed)) if (validIds.has(key) && value === true) state[key] = true;
    }
  } catch { canSave = false; }
}
function renderProgress() {
  document.querySelectorAll<HTMLInputElement>('[data-dea-objective]').forEach((input) => {
    input.disabled = false;
    input.checked = Boolean(state[input.dataset.deaObjective ?? '']);
  });
  document.querySelectorAll<HTMLElement>('[data-dea-progress]').forEach((panel) => {
    const ids = (panel.dataset.deaProgress ?? '').split(',').filter((id) => validIds.has(id));
    const count = ids.filter((id) => state[id]).length;
    const label = panel.querySelector('[data-dea-progress-count]');
    if (label) label.textContent = `${count} / ${ids.length}`;
    const bar = panel.querySelector('progress');
    if (bar) bar.value = count;
  });
  document.querySelectorAll('[data-dea-storage-status]').forEach((label) => {
    label.textContent = canSave
      ? '自己チェックはこのブラウザに保存します。合格可能性を表す数値ではありません。'
      : 'この環境では保存できないため、自己チェックは現在の画面内でのみ保持します。';
  });
}
function filterCatalog(catalog: HTMLElement) {
  const query = catalog.querySelector<HTMLInputElement>('[data-dea-query]')?.value.trim().toLocaleLowerCase() ?? '';
  const words = query.split(/\s+/).filter(Boolean);
  const domain = catalog.querySelector<HTMLSelectElement>('[data-dea-domain-filter]')?.value ?? '';
  let count = 0;
  catalog.querySelectorAll<HTMLElement>('[data-dea-search]').forEach((item) => {
    const text = (item.dataset.deaSearch ?? '').toLocaleLowerCase();
    const matches = (!domain || item.dataset.deaDomain === domain) && words.every((word) => text.includes(word));
    item.hidden = !matches;
    if (matches) count += 1;
  });
  const counter = catalog.querySelector('[data-dea-result-count]');
  if (counter) counter.textContent = `${count} 件表示`;
  const empty = catalog.querySelector<HTMLElement>('[data-dea-empty]');
  if (empty) empty.hidden = count !== 0;
}
function init() {
  if (!document.querySelector('.dea')) return;
  loadState();
  renderProgress();
  document.querySelectorAll<HTMLElement>('[data-dea-catalog]').forEach((catalog) => {
    catalog.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input, select').forEach((control) => { control.disabled = false; });
    filterCatalog(catalog);
  });
}
// One delegated listener set survives Astro ClientRouter page transitions.
document.addEventListener('change', (event) => {
  const target = event.target;
  if (target instanceof HTMLInputElement && target.dataset.deaObjective) {
    const id = target.dataset.deaObjective;
    if (!validIds.has(id)) return;
    state[id] = target.checked;
    try { localStorage.setItem(storageKey, JSON.stringify(state)); canSave = true; }
    catch { canSave = false; }
    renderProgress();
  }
  if (target instanceof HTMLSelectElement && target.hasAttribute('data-dea-domain-filter')) {
    const catalog = target.closest<HTMLElement>('[data-dea-catalog]');
    if (catalog) filterCatalog(catalog);
  }
});
document.addEventListener('input', (event) => {
  const target = event.target;
  if (target instanceof HTMLInputElement && target.hasAttribute('data-dea-query')) {
    const catalog = target.closest<HTMLElement>('[data-dea-catalog]');
    if (catalog) filterCatalog(catalog);
  }
});
document.addEventListener('astro:page-load', init);
window.addEventListener('storage', (event) => {
  if (event.key === storageKey) { loadState(); renderProgress(); }
});
init();

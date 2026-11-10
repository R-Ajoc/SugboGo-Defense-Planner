'use strict';
(() => {
  const phases = window.PLANNER_PHASES;
  const days = phases.flatMap(phase => phase.days);
  const tasks = days.flatMap(day => day.groups.flatMap(group => group.tasks));
  const taskIds = new Set(tasks.map(task => task.id));
  const dayIds = new Set(days.map(day => day.id));
  const storageKey = 'sugbogo-defense-planner-2026-v1';
  const $ = id => document.getElementById(id);
  const escape = text => String(text).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  let state = { completed: {}, notes: {} };
  let hideCompleted = false;
  function validate(value) {
    if (!value || typeof value !== 'object' || !value.completed || typeof value.completed !== 'object' || Array.isArray(value.completed) || !value.notes || typeof value.notes !== 'object' || Array.isArray(value.notes)) throw new Error('Invalid backup');
    const clean = { completed: {}, notes: {} };
    for (const [id, checked] of Object.entries(value.completed)) {
      if (!taskIds.has(id) || typeof checked !== 'boolean') throw new Error('Unknown task');
      if (checked) clean.completed[id] = true;
    }
    for (const [id, note] of Object.entries(value.notes)) {
      if (!dayIds.has(id) || typeof note !== 'string' || note.length > 12000) throw new Error('Invalid notes');
      clean.notes[id] = note;
    }
    return clean;
  }
  function notify(message, error = false) {
    $('status').textContent = message;
    $('status').classList.toggle('error', error);
  }
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) state = validate(JSON.parse(saved));
  } catch {
    notify('Saved progress could not be loaded. This session starts fresh; import a backup if you have one.', true);
  }
  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
      notify('Saved in this browser.');
    } catch {
      notify('Browser storage is unavailable. Keep this page open and export a backup to preserve your progress.', true);
    }
  }
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Manila', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  let currentPhase = phases.find(phase => today >= phase.start && today <= phase.end) || phases[0];
  let currentDay = currentPhase.days.find(day => day.id === `nov${Number(today.slice(-2))}`) || currentPhase.days[0];
  function readHash() {
    const id = location.hash.slice(1);
    const match = phases.find(phase => phase.days.some(day => day.id === id));
    if (match) {
      currentPhase = match;
      currentDay = match.days.find(day => day.id === id);
    }
  }
  readHash();
  const complete = list => list.filter(task => state.completed[task.id]).length;
  const phaseTasks = phase => phase.days.flatMap(day => day.groups.flatMap(group => group.tasks));
  function renderSummary() {
    const count = complete(tasks);
    const percent = Math.round(count / tasks.length * 100);
    $('overall-percent').textContent = `${percent}%`;
    $('overall-count').textContent = `${count} of ${tasks.length} tasks complete`;
    $('overall-progress').value = percent;
    const currentTasks = phaseTasks(currentPhase);
    $('phase-count').textContent = `${complete(currentTasks)} / ${currentTasks.length} done`;
    phases.forEach(phase => {
      const list = phaseTasks(phase);
      const count = complete(list);
      $(`phase-progress-${phase.id}`).textContent = `${count}/${list.length}`;
      const button = $(`phase-${phase.id}`);
      button.classList.toggle('active', phase.id === currentPhase.id);
      button.classList.toggle('complete', count === list.length);
      if (phase.id === currentPhase.id) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
  }
  $('phase-list').innerHTML = phases.map((phase, index) => `<button id="phase-${phase.id}" class="phase-button" data-phase="${phase.id}" aria-controls="checklist"><span class="phase-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><span class="phase-button-copy"><span class="phase-dates">${phase.dates}</span><span class="phase-name">${phase.title}</span></span><span class="phase-progress" id="phase-progress-${phase.id}"></span></button>`).join('');
  function renderTasks() {
    const dayTasks = currentDay.groups.flatMap(group => group.tasks);
    $('visible-count').textContent = `${currentDay.title} · ${complete(dayTasks)}/${dayTasks.length} done`;
    let visible = 0;
    $('task-groups').innerHTML = currentDay.groups.map((group, index) => {
      const filtered = group.tasks.filter(task => !hideCompleted || !state.completed[task.id]);
      visible += filtered.length;
      if (!filtered.length) return '';
      return `<section class="task-group" aria-labelledby="group-${index}"><div class="group-heading"><h3 id="group-${index}">${escape(group.title)}</h3><span>${complete(group.tasks)}/${group.tasks.length}</span></div>${filtered.map(task => `<label class="task-row${state.completed[task.id] ? ' is-done' : ''}"><input id="${task.id}" type="checkbox" data-task="${task.id}"${state.completed[task.id] ? ' checked' : ''}><span>${escape(task.text)}</span></label>`).join('')}</section>`;
    }).join('');
    if (!visible) $('task-groups').innerHTML = '<div class="empty-state"><span class="empty-check" aria-hidden="true">✓</span><h3>All clear for this day.</h3><p>Every task is complete. Turn off “Hide completed” to review them.</p></div>';
  }
  function render() {
    $('phase-date').textContent = `${currentPhase.dates} · 2026`;
    $('phase-title').textContent = currentPhase.title;
    $('phase-description').textContent = currentPhase.description;
    $('day-tabs').innerHTML = currentPhase.days.map(day => `<button id="day-${day.id}" class="day-tab${day.id === currentDay.id ? ' active' : ''}" data-day="${day.id}" aria-pressed="${day.id === currentDay.id}">${day.label}</button>`).join('');
    $('day-notes').value = state.notes[currentDay.id] || '';
    $('day-notes').setAttribute('aria-label', `Notes and handoff for ${currentDay.label}`);
    renderTasks();
    renderSummary();
  }
  function choose(phase, day = phase.days[0]) {
    currentPhase = phase;
    currentDay = day;
    history.replaceState(null, '', `#${day.id}`);
    render();
  }
  $('phase-list').addEventListener('click', event => {
    const button = event.target.closest('[data-phase]');
    if (button) choose(phases.find(phase => phase.id === button.dataset.phase));
  });
  $('day-tabs').addEventListener('click', event => {
    const button = event.target.closest('[data-day]');
    if (!button) return;
    choose(currentPhase, currentPhase.days.find(day => day.id === button.dataset.day));
    $(`day-${currentDay.id}`).focus({ preventScroll: true });
  });
  $('task-groups').addEventListener('change', event => {
    const input = event.target;
    if (!input.matches('[data-task]')) return;
    const inputs = [...$('task-groups').querySelectorAll('input')];
    const position = inputs.indexOf(input);
    if (input.checked) state.completed[input.dataset.task] = true;
    else delete state.completed[input.dataset.task];
    save();
    renderTasks();
    renderSummary();
    const remaining = [...$('task-groups').querySelectorAll('input')];
    const focusTarget = $(input.id) || remaining[Math.min(position, remaining.length - 1)] || $('hide-completed');
    focusTarget.focus({ preventScroll: true });
  });
  $('hide-completed').addEventListener('change', event => {
    hideCompleted = event.target.checked;
    renderTasks();
  });
  $('day-notes').addEventListener('input', event => {
    state.notes[currentDay.id] = event.target.value;
    save();
  });
  $('export').addEventListener('click', () => {
    const backup = { format: 'sugbogo-defense-planner', version: 1, exportedAt: new Date().toISOString(), ...state };
    const url = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `sugbogo-planner-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify('Backup exported. Importing it later will restore these checkboxes and notes.');
  });
  $('import').addEventListener('click', () => $('import-file').click());
  $('import-file').addEventListener('change', async event => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      if (file.size > 1000000) throw new Error('Too large');
      const data = JSON.parse(await file.text());
      if (data.format !== 'sugbogo-defense-planner' || data.version !== 1) throw new Error('Wrong backup');
      const restored = validate(data);
      if (!confirm('Replace this device’s checklist progress and notes with this backup? Export your current progress first if you want to keep it.')) return;
      state = restored;
      save();
      render();
    } catch {
      notify('Could not import this file. Choose a valid SugboGo planner JSON backup. Your current progress has been kept.', true);
    } finally {
      event.target.value = '';
    }
  });
  $('print').addEventListener('click', () => {
    const printView = document.createElement('section');
    printView.id = 'print-plan';
    printView.innerHTML = '<h1>SugboGo · Defense preparation</h1><p>November 11–23, 2026 · Finish by November 20 · Rehearse November 21–22</p>' + phases.map(phase => `<section><h2>${phase.dates}: ${escape(phase.title)}</h2><p>${escape(phase.description)}</p>${phase.days.map(day => `<h3>${escape(day.label)} · ${escape(day.title)}</h3>${day.groups.map(group => `<h4>${escape(group.title)}</h4><ul>${group.tasks.map(task => `<li>${state.completed[task.id] ? '☑' : '☐'} ${escape(task.text)}</li>`).join('')}</ul>`).join('')}${state.notes[day.id] ? `<p class="printed-notes"><strong>Notes:</strong> ${escape(state.notes[day.id])}</p>` : ''}`).join('')}</section>`).join('');
    document.body.append(printView);
    try { window.print(); } finally { printView.remove(); }
  });
  window.addEventListener('hashchange', () => { readHash(); render(); });
  window.addEventListener('storage', event => {
    if (event.key !== storageKey || !event.newValue) return;
    if (document.activeElement === $('day-notes')) {
      notify('Progress changed in another tab. Export your notes before reloading to use the other tab’s version.', true);
      return;
    }
    try { state = validate(JSON.parse(event.newValue)); render(); notify('Progress updated from another tab.'); } catch { /* Ignore unrelated invalid data. */ }
  });
  render();
})();

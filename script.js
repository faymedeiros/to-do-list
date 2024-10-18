function save(day) {
    const textarea = document.querySelector(`#${day} textarea`);
    localStorage.setItem(day, textarea.value);
    alert('Tarefa salva!');
}

function edit(day) {
    const textarea = document.querySelector(`#${day} textarea`);
    textarea.value = localStorage.getItem(day) || '';
}

function remove(day) {
    localStorage.removeItem(day);
    const textarea = document.querySelector(`#${day} textarea`);
    textarea.value = '';
    alert('Tarefa removida!');
}

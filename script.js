// Перетаскивание блоков в рабочую область
const blocks = document.querySelectorAll('.block');
const codeArea = document.querySelector('.code-area');

// Добавляем обработчики событий для начала и конца перетаскивания
blocks.forEach(block => {
    block.addEventListener('dragstart', dragStart);
});

codeArea.addEventListener('dragover', dragOver);
codeArea.addEventListener('drop', drop);

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.outerHTML);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    codeArea.innerHTML += data;
}

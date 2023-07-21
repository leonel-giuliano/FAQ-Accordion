'use strict';

const lines = document.querySelectorAll('.line');
const answerWrapper = document.querySelectorAll('.answer-wrapper');
const arrows = document.querySelectorAll('.arrow');
const box = document.querySelector('.computer-desktop__box');

lines.forEach((line, ixL)=>{
    line.addEventListener('click', ()=>{
        answerWrapper.forEach((selected, ixA)=>{
            let aSelected = answerWrapper[ixL];

            if (selected != aSelected && selected.classList.contains('selected')) {
                select('remove', selected, lines[ixA], arrows[ixA]);
            }
            select('toggle', aSelected, line, arrows[ixL]);
            if (aSelected.classList.contains('selected')) box.classList.add('selected');
            else box.classList.remove('selected');
        });
    });
});

const select = ((mode, ...elm)=>{
    for (let i of elm) {
        if (mode == 'toggle') i.classList.toggle('selected');
        else if (mode == 'remove') i.classList.remove('selected');
    }
});
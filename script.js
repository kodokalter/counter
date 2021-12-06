const number = document.getElementById('number');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.value == 'decrease') {
            count--;
        }else if(item.value == 'increase'){
            count++;
        }else if(item.value == 'reset'){
            count = 0;
        }
        if(count>0){
            number.style.color = 'green';
        }
        if(count==0){
            number.style.color = 'black';
        }
        if(count<0){
            number.style.color = 'red';
        }
        number.textContent = count
    })
})
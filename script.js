function showScreen(id){

document.querySelectorAll('.screen')
.forEach(screen=>{
screen.classList.remove('active');
});

document.getElementById(id)
.classList.add('active');

}

const ctx = document.getElementById('retrabajosChart');

new Chart(ctx, {

type:'line',

data:{
labels:['2024','2025','Actual','Objetivo'],

datasets:[{
label:'% Retrabajos',
data:[18,15,12,7]
}]
},

options:{
responsive:true
}

});
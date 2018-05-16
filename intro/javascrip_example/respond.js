var btn  = document.querySelector('button');

function debtCalculation() {
  var amount = parseInt(document.querySelector('#amount').value);
  var interest = parseInt(document.querySelector('#interest').value);
  var totalDebt = amount + amount * interest / 100;
  var heading = document.createElement('H3');
  heading.innerHTML = `The total debt with your bank is <span style="background: red; color: yellow"> ${totalDebt} </span> Euros.`
  document.body.appendChild(heading);
  
  document.body.appendChild(heading);
  document.querySelector('#amount').value = '';
  document.querySelector('#interest').value = '';
}

btn.addEventListener('click', debtCalculation);
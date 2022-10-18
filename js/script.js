'use strict';

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const age = document.getElementById('age');

let clients = [];

const addClient = (e) => {
  e.preventDefault();

  const client = new Client(firstName, lastName, phone, age)

  addClientToTheTable(client);
  clients.push(client);
  document.forms[0].reset();
}

localStorage.setItem('newClient', JSON.stringify(clients));

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button');
  button.addEventListener('click', addClient);
});

const addClientToTheTable = (client) => {
  const table = document.getElementById('table-clients');
  const trElement = document.createElement('tr');
  const tdElement = document.createElement('td');

  trElement.appendChild(tdElement);
  table.appendChild(trElement);

  trElement.innerHTML = `<td> ${client.firstName.value + " " + client.lastName.value} </td> <td> ${client.phone.value}</td > <td>${client.age.value}</td > `
}





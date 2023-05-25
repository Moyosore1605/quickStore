let i;
    let array = [];
    let item;
    let quantity;
    let price;
    let amount;
    let amount1;
    let total = 0;
    let action = '';
    display();
    function display() {
        let table = document.getElementById('table');
        table.innerHTML = "";
        table.innerHTML += `<th>S/N</th>
            <th>ITEM</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>AMOUNT</th>
            <th>ACTION</th>`
        for (let i = 0; i < array.length; i++) {
            table.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${array[i].item}</td>
            <td>${array[i].quantity}</td>
            <td>${array[i].price}</td>
            <td>${array[i].amount}</td>
            <td><button class='btn bg-danger p-2' onclick=Click(${i})>DELETE</button></td>
        </tr>`
            total = total + array[i].amount;
            document.getElementById('input3').value = `${total}`;
        }
    }
    function add() {
        item = document.getElementById('input').value;
        quantity = Number(document.getElementById('input1').value);
        price = Number(document.getElementById('input2').value);
        amount = quantity * price;
        array.push({ item: item, quantity: quantity, price: price, amount: amount })
        document.getElementById('input').value = '';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        display();
    }
    function Click(params) {
        array.splice(params, 1);
        display();
    }
    function reset(params) {
        array.splice(params);
        display();
    }
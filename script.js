const purchasePrice = document.querySelector('.purchase-price')
const sellingPrice = document.querySelector('.seling-price')
const qty = document.querySelector('.qty')
const companyName = document.querySelector('.company-name')
const overAllTotal = document.querySelector('.overall-total')

let earinings;
if (localStorage.theEarinings != null) {
    earinings = JSON.parse(localStorage.theEarinings)
} else {
    earinings = []
}

// Add Data
function addData() {
    let dateFunc = new Date()
    let date = dateFunc.toString()
    console.log(date);
    let newProduct = {
        purchasePrice: purchasePrice.value,
        sellingPrice: sellingPrice.value,
        qty: qty.value,
        companyName: companyName.value,
        total: Math.round((+qty.value * +sellingPrice.value) - (+purchasePrice.value * +qty.value))

    }
    earinings.push(newProduct)
    localStorage.setItem('theEarinings', JSON.stringify(earinings))
    showData()
    getTotal()
    clearInputs()
    console.log(earinings);
}

// Show Data
function showData() {
    let table = '';
    earinings.forEach((item, i) => {

        table += `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${item.purchasePrice}</td>
        <td>${item.sellingPrice}</td>
        <td>${item.qty}</td>
        <td>${item.companyName}</td>
        <td>${item.total}</td>
        </tr> 
            `
        console.log(item);
    })

    let tbody = document.querySelector('.tbody')
    tbody.innerHTML = table
}
showData()


// Clear inputs
function clearInputs() {
    purchasePrice.value = ''
    sellingPrice.value = ''
    qty.value = ''
    companyName.value = ''
}

// Get Total

let nums = []
let sum = 0;
function getTotal() {

    for (let i = 0; i < earinings.length; i++) {

        // var num = test[i] + test[i];
        nums.push(+earinings[i].total)
        sum += parseInt(nums[i]);
    }
    overAllTotal.innerHTML = sum
    console.log(sum);
}

getTotal()

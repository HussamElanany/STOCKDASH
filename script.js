const purchasePrice = document.querySelector('.purchase-price')
const sellingPrice = document.querySelector('.seling-price')
const qty = document.querySelector('.qty')
const companyName = document.querySelector('.company-name')
const overAllTotal = document.querySelector('.overall-total')

const overAllTotalHist = document.querySelector('.overall-total-hist')

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
        total: Math.round((+qty.value * +sellingPrice.value) - (+purchasePrice.value * +qty.value)),
        getDate: date.slice(0, 25)
    }
    earinings.push(newProduct)
    localStorage.setItem('theEarinings', JSON.stringify(earinings))
    getTotal()
    showData()
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
        <td class='caps'>${item.companyName}</td>
        
        <td>${item.total}</td>
        <td>${item.getDate}</td>
        <td><button type="button" onclick="
        deleteItem(${i})
        showData()
        " class="btn btn-outline-primary">-</button></td>
        </tr> 
            `

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
function getTotal() {
    let nums = []
    let sum = 0;
    for (let i = 0; i < earinings.length; i++) {
        // var num = test[i] + test[i];
        nums.push(+earinings[i].total)
        sum += parseInt(nums[i]);

    }
    overAllTotal.innerHTML = ` $${sum}`
    showData()
}
getTotal()

// Delete Item
function deleteItem(i) {
    earinings.splice(i, 1)
    localStorage.theEarinings = JSON.stringify(earinings)
    getTotal()
    showData()
}


let eariningsHistory;
if (localStorage.theEariningsHistory != null) {
    eariningsHistory = JSON.parse(localStorage.theEariningsHistory)
} else {
    eariningsHistory = []
}
// Push data history
let pushedData;
function pushData() {
    for (let i = 0; i < earinings.length; i++) {
        let newProduct = {
            purchasePrice: earinings[i].purchasePrice,
            sellingPrice: earinings[i].sellingPrice,
            qty: earinings[i].qty,
            companyName: earinings[i].companyName,
            total: earinings[i].total,
            getDate: earinings[i].getDate
        }
        eariningsHistory.push(newProduct)
        console.log(i);
    }

    localStorage.removeItem("theEarinings");

    // pushedData = earinings.splice(0, earinings.length)
    // eariningsHistory.push({ data: pushedData })
    // eariningsHistory.push({ earinings })
    // console.log(eariningsHistory);

    localStorage.setItem('theEariningsHistory', JSON.stringify(eariningsHistory))
    showData()
    showHistData()

}

// Show Data History

function showHistData() {
    if (eariningsHistory != []) {
        let table = '';
        for (let i = 0; i < eariningsHistory.length; i++) {

            table += `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${eariningsHistory[i].purchasePrice}</td>
        <td>${eariningsHistory[i].sellingPrice}</td>
        <td>${eariningsHistory[i].qty}</td>
        <td class='caps'>${eariningsHistory[i].companyName}</td>
        <td>${eariningsHistory[i].total}</td>
        <td>${eariningsHistory[i].getDate}</td>
       
        </tr>
             `
            // <td><button type="button" onclick="
            // deleteItem(${i})
            // showData()
            // " class="btn btn-outline-primary">-</button></td>
            console.log(eariningsHistory[i].purchasePrice);
        }

        let tbodyHistory = document.querySelector('.tbodyHistory')
        tbodyHistory.innerHTML = table
    }
    showData()

}
showData()
showHistData()

//Get Total hist
function getTotalHist() {
    let nums = []
    let sum = 0;
    for (let i = 0; i < eariningsHistory.length; i++) {
        // var num = test[i] + test[i];
        nums.push(+eariningsHistory[i].total)
        sum += parseInt(nums[i]);

    }
    overAllTotalHist.innerHTML = ` $${sum}`
    showData()

}
getTotalHist()
const purchasePrice = document.querySelector('.purchase-price')

const purchasePriceGoal = document.querySelector('.purchase-price-goal')

const sellingPrice = document.querySelector('.seling-price')

const sellingPriceGoal = document.querySelector('.seling-price-goal')

const qty = document.querySelector('.qty')

const qtyGoal = document.querySelector('.qty-goal')

const companyName = document.querySelector('.company-name')

const companyNameGoal = document.querySelector('.company-name-goal')

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
        " class="btn btn-outline-primary">-</button>

        <button type="button" onclick="
        updateData(${i})
        showData()
        " class="btn btn-outline-success">Edit</button></td>
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


// Update Invest
function updateData(i) {
    console.log(i);
    purchasePrice.value = earinings[i].purchasePrice
    sellingPrice.value = earinings[i].sellingPrice
    qty.value = earinings[i].qty
    companyName.value = earinings[i].companyName
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


// Companies to follow


let companies;
if (localStorage.theCompanies != null) {
    companies = JSON.parse(localStorage.theCompanies)
} else {
    companies = []
}
const compName = document.querySelector('.comp-name')
const currentPrice = document.querySelector('.current-price')
const followRes = document.querySelector('.flo-reason')

function addCompLst() {
    console.log(compName.value, currentPrice.value, followRes.value);
    let dateFunc = new Date()
    let date = dateFunc.toString()
    console.log(date);
    let newProduct = {
        compName: compName.value,
        currentPrice: currentPrice.value,
        followRes: followRes.value,
        getDate: date.slice(0, 25)
    }
    companies.push(newProduct)
    localStorage.setItem('theCompanies', JSON.stringify(companies))
    getTotal()
    showData()
    showHistData()
    clearInputs()
    console.log(companies);
    showInterstingComp()

}

function showInterstingComp() {
    if (companies != []) {
        let table = '';
        for (let i = 0; i < companies.length; i++) {

            table += `
        <tr>
        <th scope="row">${i + 1}</th>
   
        <td class='caps'>${companies[i].compName}</td>
        <td>${companies[i].currentPrice}</td>
        <td >${companies[i].followRes}</td>
        <td>${eariningsHistory[i].getDate}</td>
        <td><button type="button" onclick="
        deleteComp(${i})
        showData()
        " class="btn btn-outline-primary">-</button>
        </tr>
             `

        }

        let tbodyComp = document.querySelector('.tbody-comp')
        tbodyComp.innerHTML = table
    }
}
showInterstingComp()

// Delete Item
function deleteComp(i) {
    companies.splice(i, 1)
    localStorage.theCompanies = JSON.stringify(companies)

    showData()
    showInterstingComp()
    showHistData()
}
// let earinings;
// if (localStorage.theEarinings != null) {
//     earinings = JSON.parse(localStorage.theEarinings)
// } else {
//     earinings = []
// }

// const fullAmount = document.querySelector('.full-amount')
// const longInvest = document.querySelector('.long-invest')
// const fastInvest = document.querySelector('.fast-invest')
// const invesPort = document.querySelector('.investment-port')



// Add goal

// let goals;
// if (localStorage.theGoal != null) {
//     goals = JSON.parse(localStorage.theGoal)
// } else {
//     goals = []
// }

// function addDataGoal() {
//     let dateFunc = new Date()
//     let date = dateFunc.toString()
//     console.log(date);
//     let newProduct = {
//         purchasePrice: purchasePriceGoal.value,
//         sellingPrice: sellingPriceGoal.value,
//         qty: qtyGoal.value,
//         companyName: companyNameGoal.value,
//         total: Math.round((+qtyGoal.value * +sellingPriceGoal.value) - (+purchasePriceGoal.value * +qtyGoal.value)),
//         getDate: date.slice(0, 25)
//     }
//     goals.push(newProduct)
//     localStorage.setItem('theGoal', JSON.stringify(goals))

//     showData()
//     clearInputs()
//     console.log(goals);
// }
// function showDataGoal() {
//     if (goals != []) {
//         let table = '';
//         for (let i = 0; i < goals.length; i++) {

//             table += `
//         <tr>
//         <th scope="row">${i + 1}</th>
//         <td>${goals[i].purchasePrice}</td>
//         <td>${goals[i].sellingPrice}</td>
//         <td>${goals[i].qty}</td>
//         <td class='caps'>${goals[i].companyName}</td>
//         <td>${goals[i].total}</td>
//         <td>${goals[i].getDate}</td>

//         </tr>
//              `
// <td><button type="button" onclick="
// deleteItem(${i})
// showData()
// " class="btn btn-outline-primary">-</button></td>
//             console.log(goals[i].purchasePrice);
//         }

//         let tbodyGoals = document.querySelector('.tbody-goals')
//         tbodyGoals.innerHTML = table
//     }

// }
// showDataGoal()
// ======================================================
// ACCOUNT SECTION
// ======================================================

//elements for desktop button
const accountBtn = document.getElementById("accountBtn");
const accountText = document.getElementById("accountText");
const accountIcon = document.getElementById("accountIcon");

//welcome message for user
const userSection = document.getElementById("userSection");
const userName = document.getElementById("userName");

//elements button for mobile view
const mobileAccountBtn = document.getElementById("mobileAccountBtn");
const mobileAccountText = document.getElementById("mobileAccountText");

//chinicheck kung naka login na yung user 
if(localStorage.getItem("loggedIn") === "true"){

    //change login button to my account
    accountText.textContent = "My Account";
    accountBtn.href = "./account.html";

    //hide login icon
    accountIcon.style.display = "none";

    userSection.classList.remove("d-none");//show welcome
    userName.textContent = localStorage.getItem("username");//show username

    //mobile version ng myaccount
    mobileAccountText.textContent = "My Account";
    mobileAccountBtn.href = "./account.html";

}
else{
    //change to login button pag hindi naka login
    accountText.textContent = "";
    accountBtn.href = "./login.html";

    //show icon
    accountIcon.style.display = "inline";

    //mobile login button
    mobileAccountText.textContent = "Login";
    mobileAccountBtn.href = "./login.html";
}


// ======================================================
// LOGOUT FUNCTION
// ======================================================
function logout(){

    //removed login status
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    // Redirect back to homepage
    window.location.href = "./index.html";
}
// ======================================================
// BREADCRUMB
// ======================================================
document.getElementById("breadcrumb").innerHTML = `
    <a href="./index.html"
       class="text-decoration-none fw-bold text-dark">
       Home
    </a>
    >
    <a href="./account.html"
       class="text-decoration-none fw-bold text-dark">
       My Account
    </a>
    >
    <span>Order History</span>
`;



const orderHistory = document.getElementById("orderHistory");

const orders = JSON.parse(localStorage.getItem("orders")) || [];

if(orders.length === 0){

    orderHistory.innerHTML = `
        <div class="alert alert-info">
            No orders found.
        </div>
    `;

}
else{

    [...orders].reverse().forEach(order => {

        let itemsHtml = "";

        order.items.forEach(item => {

            itemsHtml += `
                <li>
                    ${item.name}
                    x${item.quantity}
                </li>
            `;

        });

        orderHistory.innerHTML += `
            <div class="card mb-3 shadow-sm">

                <div class="card-body">

                    <h5>
                        Order #${order.orderId}
                    </h5>

                    <p>
                        <strong>Order Date:</strong>
                        ${order.orderDate}
                    </p>

                    <p>
                        <strong>Delivery Date:</strong>
                        ${order.deliveryDate}
                    </p>

                    <p>
                        <strong>Status:</strong>
                        ${order.status}
                    </p>
                    <p>
                        <strong>Payment Method:</strong>
                        ${order.paymentMethod}
                    </p>
                    <p>
                        <strong>Total:</strong>
                        ₱${order.total.toLocaleString(undefined,{
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </p>
                    <ul>
                        ${itemsHtml}
                    </ul>
                </div>
            </div>
        `;
    });
}
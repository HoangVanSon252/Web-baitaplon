//đổi giá trị tiền
function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

let lastScrollTop = 0;
let lastScrollAdvanced = document.getElementById("filter-btn");
const navbar = document.getElementById("header-bottom");
const closeBtnAdvancedSearch = document.getElementById("close-sort-search");
const navbarAdvanced = document.getElementById("advanced-search");
window.addEventListener("scroll",function () {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Cuộn xuống
        navbar.classList.add("hidden-nav");
    } else {
        // Cuộn lên
        navbar.classList.remove("hidden-nav");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
lastScrollAdvanced.addEventListener("click",function () {
    navbar.classList.add("hidden-nav");
    navbarAdvanced.style.display = "block";
});
closeBtnAdvancedSearch.addEventListener("click", function () {
    navbarAdvanced.style.display = "none";
    navbar.classList.remove("hidden-nav");
});

// chuyển đồi qua lại đăng ký và đăng nhập
let signup = document.querySelector('.signup-link');
let login = document.querySelector('.login-link');
let container = document.querySelector('.signup-login .modal-container');
login.addEventListener('click', () => {
    openLoginForm();
})

signup.addEventListener('click', () => {
    openRegisterForm();
})

// open modal
let signupbtn = document.getElementById('signup');
let loginbtn = document.getElementById('login');
let formsg = document.querySelector('.signup-login');

signupbtn.addEventListener('click', () => {
    openRegisterForm();
})

loginbtn.addEventListener('click', () => {
    openLoginForm();
})

const openRegisterForm = () => {
    formsg.classList.add('open');
    document.getElementById('form-register').classList.add('active');
    document.getElementById('form-register').classList.remove('hidden');
    document.getElementById('form-login').classList.add('hidden');
    document.getElementById('form-login').classList.remove('active');
}

const openLoginForm = () => {
    document.querySelector('.form-message-check-login').innerHTML = '';
    formsg.classList.add('open');
    document.getElementById('form-register').classList.add('hidden');
    document.getElementById('form-register').classList.remove('active');
    document.getElementById('form-login').classList.add('active');
    document.getElementById('form-login').classList.remove('hidden');
}

//đóng modal đăng ký đăng nhập
let modalContainer = document.querySelectorAll('.modall');
function closeModal() {
    modalContainer.forEach(item => {
        item.classList.remove('open');
    });
    console.log(modalContainer)
    body.style.overflow = "auto";
}

//show list ra các sản phẩm(producst)
function renderProducts(showProducst) {
    let productHtml = '';
    if (showProducst.length == 0) {
        document.getElementById("home-products").style.display = "none";
        productHtml = `<div class="no-result">
                            <div class="no-result-h">Tìm kiếm không có kết quả</div>
                            <div class="no-result-p">Xin lỗi, chúng tôi không thể tìm được kết quả hợp với tìm kiếm của bạn</div>
                            <div class="no-result-i">
                                <i class="fa-regular fa-face-sad-cry"></i>
                            </div>
                        </div>`;
    }else{
        document.getElementById("home-products").style.display = "block";
        showProducst.forEach((products) => {
            productHtml += `<div class="col-product">
                                <article class="card-product" >
                                    <div class="card-header">
                                        <a href="#" class="card-image-link" onclick="detailProduct(${products.id})">
                                        <img class="card-image" src="${products.img}" alt="${products.title}">
                                        </a>
                                    </div>
                                    <div class="food-info">
                                        <div class="card-content">
                                            <div class="card-title">
                                                <a href="#" class="card-title-link" onclick="detailProduct(${products.id})">${products.title}</a>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <div class="product-price">
                                                <span class="current-price">${vnd(products.price)}</span>
                                            </div>
                                        <div class="product-buy">
                                            <button onclick="detailProduct(${products.id})" class="card-button order-item"><i class="fa-regular fa-cart-shopping-fast"></i> Đặt món</button>
                                        </div> 
                                    </div>
                                    </div>
                                </article>
                            </div>`;
        });
    }
    document.getElementById('home-products').innerHTML = productHtml;
}
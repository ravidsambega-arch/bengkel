// ambil data dari localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// tambah ke keranjang
function tambahKeranjang(nama, harga) {
    cart.push({nama, harga});
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
    alert(nama + " ditambahkan ke keranjang");
}

// update tampilan jumlah
function updateCart() {
    document.getElementById("count").innerText = cart.length;
}

// toggle cart (sementara alert dulu)
function toggleCart() {
    alert("Fitur keranjang dibuka (bisa dikembangkan lagi)");
}
function filterProduk(merk){
    alert("Filter produk: " + merk);
}

// load awal
updateCart();
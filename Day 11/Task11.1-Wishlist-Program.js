
// Initially

var wish = document.getElementById("wish");
var addBtn = document.getElementById("addBtn");
var wishList = document.getElementById("wishList");
var message = document.getElementById("message");

var currentWish = null;

// Add button aur Enter key ka event

addBtn.addEventListener("click", addWish);

wish.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        addWish();
    }
});

// 1. ADD WISH

function addWish() {
    var value = wish.value.trim();

    if (value == "") {
        emptyWish();
        return;
    }

    if (currentWish != null) {
        updateWish(value);
    }
    else {
        createWish(value);
    }

    wish.value = "";
}

// Check empty input

function emptyWish() {
    message.innerText = "Please enter your wish!";
    message.style.color = "red";
}

// Create new wish

function createWish(value) {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    var text = document.createElement("span");
    var editBtn = document.createElement("button");
    var deleteBtn = document.createElement("button");

    checkbox.type = "checkbox";

    text.innerText = value;
    text.className = "wish-text";

    editBtn.innerText = "Edit";
    editBtn.className = "edit";
    editBtn.type = "button";

    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.type = "button";

    // Edit wish
    editBtn.addEventListener("click", function() {
        editWish(li, text);
    });

    // Delete wish
    deleteBtn.addEventListener("click", function() {
        deleteWish(li);
    });

    // Complete wish
    checkbox.addEventListener("change", function() {
        text.classList.toggle("completed");
    });

    // Add elements to list item
    li.appendChild(checkbox); //parent.appendChild{child in var}
    li.appendChild(text);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Add list item to wishlist

    wishList.appendChild(li); //it adds new created list item to the end of wishlist.

    message.innerText = "Wish added successfully!";
    message.style.color = "green";
}

// Edit wish

function editWish(li, text) {
    currentWish = li;
    wish.value = text.innerText;
    addBtn.innerText = "Update";
    wish.focus(); //utomatically places the cursor inside the wish input field, allowing the user to start typing without clicking on the field.
}

// Update wish

function updateWish(value) {
    currentWish.querySelector(".wish-text").innerText = value;

    currentWish = null;
    addBtn.innerText = "Add";

    message.innerText = "Wish updated successfully!";
    message.style.color = "green";
}

// Delete wish

function deleteWish(li) {
    wishList.removeChild(li);

    if (currentWish == li) {
        currentWish = null;
        wish.value = "";
        addBtn.innerText = "Add";
    }

    message.innerText = "Wish deleted!";
    message.style.color = "green";
}


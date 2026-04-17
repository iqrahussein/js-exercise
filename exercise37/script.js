const post_title = document.querySelector("#post_title");
const post_desc = document.querySelector("#post_desc");
const post_image_url = document.querySelector("#image");
const form = document.querySelector("#form");
const list = document.querySelector("#list");

window.addEventListener("DOMContentLoaded", () => {
    displayPosts();
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const title = post_title.value;
    const desc = post_desc.value;
    const imageUrl = post_image_url.value;

    if (title.trim() !== "" && imageUrl.trim() !== "") {
        const newPost = {
            title: title,
            image: imageUrl,
            desc: desc
        };

        savePost(newPost);
        addToDOM(newPost.title, newPost.image, newPost.desc);

        form.reset(); 
    }
});

// unction-ka keydinta (LocalStorage)
function savePost(post) {
    let posts = JSON.parse(localStorage.getItem("my_posts")) || [];
    posts.push(post);
    localStorage.setItem("my_posts", JSON.stringify(posts));
}

// Function-ka soo akhrinta iyo soo bandhigidda
function displayPosts() {
    let posts = JSON.parse(localStorage.getItem("my_posts")) || [];
    posts.forEach(post => {
        addToDOM(post.title, post.image, post.desc);
    });
}

function addToDOM(title, imageUrl, desc) {
    const li = document.createElement('li');
    li.style.listStyle = "none";
    li.style.border = "1px solid #ddd";
    li.style.padding = "15px";
    li.style.marginBottom = "15px";
    li.style.borderRadius = "8px";

    li.innerHTML = `
        <h2>${title}</h2>
        <img src="${imageUrl}" alt="Post Image" style="width: 100%; max-width: 400px; border-radius: 5px;">            
        <p>${desc}</p>
    `;
    
    list.appendChild(li);
}
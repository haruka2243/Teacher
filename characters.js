const teachers = [
    ["髙橋先生", "髙橋先生.png"],
    ["増田先生", "増田先生.png"]
];

const gallery = document.getElementById("gallery");

teachers.forEach(teacher => {

    const name = teacher[0];
    const image = teacher[1];

    gallery.innerHTML += `
        <div class="card">
            <img src="${image}" alt="${name}">
            <div class="name">${name}</div>
        </div>
    `;
});

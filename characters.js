const teachers = [
    ["髙橋先生", "髙橋先生.jpg"],
    ["増田先生", "増田先生.jpg"],
    ["藤野先生", "藤野先生.jpg"],
    ["西田先生", "西田先生.jpg"],
    ["會見先生", "會見先生.jpg"],
    ["前田先生", "前田先生.jpg"],
    ["若原先生", "若原先生.jpg"],
    ["玉本先生", "玉本先生.jpg"],
    ["先生", "先生.jpg"],
    ["先生", "先生.jpg"],
    ["先生", "先生.jpg"],
    ["先生", "先生.jpg"],
    ["先生", "先生.jpg"],
    ["先生", "先生.jpg"],
    ["先生", "先生.jpg"],
    ["先生", "先生.jpg"],
    ["先生", "先生.jpg"],
    ["先生", "先生.jpg"]
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

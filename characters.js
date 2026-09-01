const teachers = [
    ["髙橋先生", "髙橋先生.jpg", "3年学年主任　少林寺部顧問"],
    ["増田先生", "増田先生.jpg", "情報の先生"],
    ["藤野先生", "藤野先生.jpg", "3年1組の担任　バドミントン部副顧問"],
    ["西田先生", "西田先生.jpg", "3年2組の担任"],
    ["會見先生", "會見先生.jpg", "2年1組の担任　バドミントン部顧問"],
    ["前田先生", "前田先生.jpg", ""],
    ["若原先生", "若原先生.jpg", "国語の先生"],
    ["玉本先生", "玉本先生.jpg", "美術の先生"],
    ["先生", "先生.jpg", ""],
    ["先生", "先生.jpg", ""],
    ["先生", "先生.jpg", ""],
    ["先生", "先生.jpg", ""],
    ["先生", "先生.jpg", ""],
    ["先生", "先生.jpg", ""],
    ["先生", "先生.jpg", ""],
    ["先生", "先生.jpg", ""],
    ["先生", "先生.jpg", ""],
    ["先生", "先生.jpg", ""]
];

const gallery = document.getElementById("gallery");

teachers.forEach(teacher => {

    const name = teacher[0];
    const image = teacher[1];
    const detail = teacher[2];

    gallery.innerHTML += `
        <div class="card" onclick="showDetail('${name}', '${image}', '${detail}')">
            <img src="${image}" alt="${name}">
            <div class="name">${name}</div>
        </div>
    `;
});

function showDetail(name, image, detail){

    document.getElementById("detail").innerHTML = `
        <h2>${name}</h2>
        <img src="${image}" alt="${name}">
        <p>${detail}</p>
    `;
}

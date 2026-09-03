const teachers = [
    ["髙橋先生", "少林寺部顧問"],
    ["増田先生", "情報の先生"],
    ["藤野先生", "英語の先生　バドミントン部副顧問"],
    ["西田先生", ""],
    ["會見先生", "数学の先生　バドミントン部顧問"],
    ["前田先生", ""],
    ["若原先生", "国語の先生"],
    ["玉本先生", "美術の先生"],
    ["郷先生", "軟式野球部顧問"],
    ["武田先生", "日本史の先生　男子バスケ顧問"],
    ["先生", ""],
    ["先生", ""],
    ["先生", ""],
    ["先生", ""],
    ["先生", ""],
    ["先生", ""],
    ["先生", ""],
    ["先生", ""]
];

const gallery = document.getElementById("gallery");

teachers.forEach(teacher => {

    const name = teacher[0];
    const detail = teacher[1];

    gallery.innerHTML += `
        <div class="card" onclick="showDetail('${name}', '${detail}')">
            <div class="name">${name}</div>
        </div>
    `;
});

function showDetail(name, detail){

    document.getElementById("detail").innerHTML = `
        <h2>${name}</h2>
        <p>${detail}</p>
    `;
}

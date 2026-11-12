const teachers = [    
    ["會見先生", "あいみ", ""],
    ["藤野先生", "ふじの", ""],
    ["髙橋先生", "たかはし", ""],
    ["前田先生", "まえだ", ""],
    ["西尾先生", "にしお", ""],
    ["中野先生", "なかの", ""],
    ["高山先生", "たかやま", ""],
    ["大西先生", "おおにし", ""],
    ["先生", "", ""],
    ["先生", "", ""],
    ["先生", "", ""],
    ["先生", "", ""],
    ["先生", "", ""],
    ["先生", "", ""],
    ["先生", "", ""]
];

const gallery = document.getElementById("gallery");

teachers.forEach(teacher => {
    const name = teacher[0];
    const reading = teacher[1];
    const detail = teacher[2];

    gallery.innerHTML += `
        <div class="card" onclick="showDetail(this, '${name}', '${detail}')">
            <div class="reading">${reading}</div>
            <div class="name">${name}</div>
        </div>
    `;
});

function showDetail(card, name, detail){

    const detailArea = document.getElementById("detail");

    // すでに同じ先生の詳細が表示されていたら消す
    if(detailArea.dataset.teacher === name){
        detailArea.innerHTML = "";
        detailArea.dataset.teacher = "";
        return;
    }

    // 詳細を表示
    detailArea.innerHTML = `
        <h2>${name}</h2>
        <p>${detail}</p>
    `;

    detailArea.dataset.teacher = name;
}

const characters = [
    ["髙橋先生", "髙橋先生.png"],
    ["増田先生", "増田先生.png"],
    ["エイメス", "エイメス.webp"]
];

const gallery = document.getElementById("gallery");

characters.forEach(character => {

    const name = character[0];
    const image = character[1];

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${image}" alt="${name}">
        <div class="name">${name}</div>
    `;

    gallery.appendChild(card);
});

const bg = document.querySelector('.bg'),
    be = document.querySelector('.be');

document.onmousemove = (event) => {
    bg.style.transform = `translate(${-event.clientX / 200}px, ${-event.clientY / 200}px)`;
};

function genRanString(length) {
    let characters = "%&?/#^!*+awbs",
        result = '';
    while (length--) {
        result += characters[Math.floor(Math.random() * characters.length)];
    }
    return result;
}


document.querySelectorAll('.b').forEach(async a => {
    let text = a.textContent, length = text.length, duration = 30,
        delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const animate = async () => {
            const d = duration / length;
            for (let i = 0; i < duration; i++) {
                const f = Math.round(i / d);
                a.textContent = text.slice(0, f) + genRanString(length - f);
                await delay(20);
            }
            for (let i = 0; i < 10; i++) {
                a.textContent = text + '_'; await delay(400);
                a.textContent = text; await delay(400);
            }
            for (let i = 0; i < duration; i++) {
                const f = Math.round(i / d);
                console.log(f);
                a.textContent = text.slice(0, length - f) + genRanString(f);
                await delay(20);
            }
        animate();
    }

    animate();
})



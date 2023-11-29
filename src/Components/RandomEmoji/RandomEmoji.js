import React, {useEffect} from 'react';

function RandomEmoji() {
    useEffect(() => {
        const emojis = Array.from(document.querySelectorAll('.emoji'));

        emojis.forEach(emoji => {
            let dx = (Math.random() - 0.5) * 10;
            let dy = (Math.random() - 0.5) * 10;
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;

            function step() {
                if (x < 0 || x > window.innerWidth) dx = -dx;
                if (y < 0 || y > window.innerHeight) dy = -dy;

                x += dx;
                y += dy;

                emoji.style.left = x + 'px';
                emoji.style.top = y + 'px';

                requestAnimationFrame(step);
            }

            step();
        });
    }, []);


    return (
        <div>
            <div className="emoji">😀</div>
            <div className="emoji">🙂</div>
            <div className="emoji">😄</div>
            <div className="emoji">😁</div>
            <div className="emoji">😜</div>
            <div className="emoji">🤣</div>
            <div className="emoji">😗</div>
            <div className="emoji">🤤</div>
            <div className="emoji">🤠</div>
            <div className="emoji">🤪</div>
            <div className="emoji">🥳</div>
            <div className="emoji">😘</div>
            <div className="emoji">😋</div>
            <div className="emoji">😎</div>
        </div>
    );
}

export default RandomEmoji;


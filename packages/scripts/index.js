document.addEventListener('DOMContentLoaded', function() {
    const vlog = document.querySelector('.vlog');

    function startAnimationCycle() {
        setTimeout(animateFromLeft, 3000);
    }

    function animateFromLeft() {
        vlog.style.right = 'auto';
        vlog.style.bottom = 'auto';
        vlog.style.left = '-250px';
        vlog.style.top = '50%';
        vlog.style.display = 'block';
        vlog.style.transform = 'translateY(-50%) rotate(-30deg) scaleX(-1)';
        vlog.style.animation = 'slideInFromLeft 0.5s forwards';
        setTimeout(function() {
            vlog.style.animation = 'slideOutToLeft 0.5s forwards';
            setTimeout(function() {
                vlog.style.display = 'none';
                setTimeout(animateFromRight, 12000);
            }, 1000);
        }, 6000);
    }

    function animateFromRight() {
        vlog.style.left = 'auto';
        vlog.style.top = 'auto';
        vlog.style.right = '-250px';
        vlog.style.bottom = '0';
        vlog.style.display = 'block';
        vlog.style.transform = 'translateY(0) rotate(30deg)';
        vlog.style.animation = 'slideInFromRight 0.5s forwards';
        setTimeout(function() {
            vlog.style.animation = 'slideOutToRight 0.5s forwards';
            setTimeout(function() {
                vlog.style.display = 'none';
                setTimeout(animateFromLeft, 12000);
            }, 1000);
        }, 6000);
    }
    startAnimationCycle();
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const rightSide = document.querySelector('.right-side');
let isMouseDown = false;

rightSide.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

rightSide.addEventListener('wheel', (e) => {
    if (isMouseDown) {
        e.preventDefault();

        const delta = e.deltaY || e.detail || e.wheelDelta;
        rightSide.scrollTop += delta > 0 ? 30 : -30;

        const isAtBottom = rightSide.scrollHeight - rightSide.scrollTop <= rightSide.clientHeight + 5;
        const isAtTop = rightSide.scrollTop <= 0;

        return (delta > 0 && isAtBottom) || (delta < 0 && isAtTop);

    }
    return true;
});

rightSide.style.overflow = 'hidden auto';
rightSide.style.maxHeight = 'calc(100vh - 40px)';
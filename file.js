window.onload = () => {
    let allBoxes = document.querySelectorAll(".box");
    let colorArray = [];
    let clickedBoxes = [];

    let randomColor = () => {
        let random = Math.floor(Math.random() * 5);
        let array = ["0fef2d", "#2aeb0f", "yellow", "coral","#eed2ef","#aab220"];
        return array[random];
    };

    allBoxes.forEach((box) => {
        box.addEventListener("click", () => {
        box.classList.add("active")
            if (clickedBoxes.includes(box)) {
                // If box is already clicked, return
                return;
            }

            let currentColor = randomColor();
            colorArray.push(currentColor);
            box.style.backgroundColor = `${currentColor}`;
            clickedBoxes.push(box);

            if (clickedBoxes.length === 2) {
                // Compare the colors of the two clicked boxes
                let color1 = clickedBoxes[0].style.backgroundColor;
                let color2 = clickedBoxes[1].style.backgroundColor;
                
                if (color1 === color2) {
                    // If colors match, hide the boxes and reset clickedBoxes array
                    clickedBoxes.forEach((clickedBox) => {
                        
                    });
                    alert("Match Found");
            
                } else {
                    // If colors don't match, reset clickedBoxes array
                    clickedBoxes = [];
                }
            }
        });
    });
};

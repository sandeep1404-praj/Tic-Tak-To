let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new-but");
let mcontainer = document.querySelectorAll(".mcontainer");
let mesg = document.querySelector("#mesg");
let turnx = true;
const win =[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetbut = () => {
    turnx = true;
    enableboxes();
    mesg.innerText = "";
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("click");
        if (turnx) {
            box.innerText = "X";
            turnx = false;
        } else {
            box.innerText = "O";
            turnx = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};
const disbox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    };
};
const showwinner = (winner) =>{
    mesg.innerText = `congratulation, Winner is:${winner}`;
    disbox();
};

const checkwinner= () =>{
    for (let pattern of win){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if( pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2=== pos3){
              console.log("winner",pos1);
              showwinner(pos1);
            };
        };
    };
};
newgame.addEventListener("click",resetbut);
reset.addEventListener("click",resetbut);
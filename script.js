let container=document.querySelector("#container");
let randomColor=false;

function clear()
{
	let squaresBySide=prompt("How many squares");

	while(isNaN(squaresBySide))
	{
		squaresBySide=prompt("thats not a number, gimme da digits brah");
	}
	document.getElementById("container").innerHTML="";
	
	

	makeGrid(squaresBySide);
}

function clrMode()
{
	if(randomColor)
	{
		randomColor=false;
	}
	else
	{
		randomColor=true;
	}
}

function randomVal(min,max)
{
	return Math.floor(Math.random() * (max-min+1))+min;
}

function paint(e)
{
	let squareToPaint=e.explicitOriginalTarget;
	
	if(randomColor)
	{
		squareToPaint.style.backgroundColor="rgb("+randomVal(0,255)+","+randomVal(0,255)+","+randomVal(0,255)+")";
	}
	else
	{
		squareToPaint.style.backgroundColor="black";
	}
	
	
}


function makeGrid(numOfSquares=16)
{
	console.log(numOfSquares);
	let h=600/numOfSquares;
	let w=860/numOfSquares;
	console.log(h);
	console.log(w);
	for(let i=0;i<numOfSquares;i++)
	{
		for(let j=0;j<numOfSquares;j++)
		{
			let square=document.createElement("div");
			square.style.height=`${h}px`;
			square.style.width=`${w}px`;

			square.classList.add("square");
			square.addEventListener("mouseover", paint);
			container.appendChild(square);		
			
		}
	}	

}

makeGrid();
let buttonClear=document.querySelector("#clear");
let buttonColor=document.querySelector("#colorMode");

buttonClear.addEventListener("click",clear);
buttonColor.addEventListener("click",clrMode);

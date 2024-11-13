getAllLiElements = () => {
  let liList = document.querySelectorAll("li");
  console.log(liList);
  let arr = [];

  for (let i = 0; i < liList.length; i++) {
    // console.log(liList[i]);
    console.log(liList[i].textContent);
    arr.push(liList[i].textContent);
  }
  console.log(arr);

  let ele = document.querySelector("h2");
  console.log(ele);

  let divElement = document.querySelector("#sample");
  //   let div = document.getElementById("sample")
  divElement.style.backgroundColor = "pink";
  divElement.style.fontSize = "18px";
  divElement.style.color = "teal";
  console.log(divElement);
};

getAllLiElements();

//add event to html element through js
document.querySelector("#btn").addEventListener("click", (e) => {
  // e: event object(get created automatically when event is fired)
  console.log(e.target);

  //create a new div
  let div = document.createElement("div"); //<div></div>
  div.textContent = "LetsUpgrade"; //<div>LetsUgrade</div>
  div.style.backgroundColor = "orange";
  div.id = "sample";
  div.style.border = "2px solid black"; //<div style="border: "2px solid black">LetsUgrade</div>
  console.log(div);

  document.body.appendChild(div);

  //delete
  //   pseudo class (CSS)
  let li = document.querySelector("li:last-child");
  li.remove();

  //add image in UI
  let img = document.createElement("img"); //<img />
  img.setAttribute(
    "src",
    "data:image/jpeg;base64,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"
  ); //<img src="" />

  document.body.appendChild(img);
});

submitForm = (e) => {
    e.preventDefault();
  let email = document.querySelector("#email").value;
//   console.log(email);
};

document.querySelector("#emailform").addEventListener("submit", submitForm);


let firstName = "alina";//global

function getName() {
    let lastName = "joe";//local scope
    console.log(firstName + " " + lastName);

    return lastName;
}

// console.log(lastName);

getName();
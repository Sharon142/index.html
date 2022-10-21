document.body.style.backgroundColor = "Yellow";
const Verdict = document.querySelector("#verdict");
const number = ["The number is less than 25"]
const counter = ["The number is more than 25"]
function number(){
  let text = "";
for (let i = 0; i < 51; i++) {
  console.log(number.value)
  if (i === 25) { continue; }
 if (i < 25) {
  Verdict.innerHTML = number;
 } else {
  Verdict.innerHTML = counter;
 }
}
     
}

public class Main {
  static int myMethod(int x) {
    return 5 + x;
  }

  public static void main(String[] args) {
    System.out.println(myMethod(3));
  }
}

let response = {
  response: 'number',
  total: 49,
  data: {
    place: 'school',
    start: '22/01/19',
    countries: [
    'Australia',
    'New Zealand',
    'Canada'
  ],
 
}
 
};

function removeCountries(responseObj, countries){
  responseObj.data.countries.pull(countries);
  return responseObj.data.countries
}

console.log(removeCountries(response, Canada));
console.log(response)


  

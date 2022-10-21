let counter = document.querySelector("#counter");
document.body.style.backgroundColor = "Yellow";
function number(){
  if (counter.value < 10) {
    while (i < 10) {
      text += "Value is too small!";
      document.body.style.backgroundColor = "Turquiose";  
      i++;     
    }
  } else {
    text += "Value is too large";
      document.body.style.backgroundColor = "Purple"; 
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


  

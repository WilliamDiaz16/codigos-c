function main() { 
    var distance = parseInt(readLine(), 10); 
    //your code goes here 
    var speed = 40 
    var time = 60 
    var minutes = distance/speed
    console.log(minutes*time) 
    }

function main() {var depth = parseInt(readLine(), 10);//your code goes here
    var climb = 7;
    var slip = 2;
    var day = 0;
        for(workdone=0;workdone<=depth;) { day = day + 1;workdone=workdone+climb;if(workdone>=depth){break;}
        workdone = workdone - slip;}
     console.log(day);}   

function main() {var amount = parseFloat(readLine(), 10);var rate = parseFloat(readLine(), 10);  
    console.log(convert(amount, rate));}
function convert(amount,rate){return amount * rate }

function contact(name, number) 
{this.name = name;this.number = number;this.print = print;}
function print()
{console.log(this.name + ": " + this.number);}
var a = new contact("David", 12345);
var b = new contact("Amy", 987654321)
a.print();
b.print();

function main() {var increase = parseInt(readLine(), 10);var prices = [98.99, 15.2, 20, 1026];
for(var i=0;i<=prices.length-1;i++){prices[i]=prices[i]+increase;}console.log(prices);}

class Add {constructor(...words) {this.words = words;}
print(){
    var y ="";for (x of this.words) {
    if(x == ","){
    x = "";}
    else{y += "$" + x;}
    }
    y = y + "$";
    console.log(y);
    }
  }
  
  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
  var y = new Add("this", "is", "awesome");
  var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", ",", "consectetur", "adipiscing", "elit");
  x.print();
  y.print();
  z.print();









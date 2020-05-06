
let pin = Math.floor(1000 + Math.random() * 9000); // random 4 digit pin 
let vaultAmount = Math.floor(10000 + Math.random() * 900000); //random number between 1000 and 1000000
let cashier = Math.floor(1000 + Math.random() * 9000) ;  //random number between 1000 and 9999
let totalTake = ( cashier + vaultAmount);  
// let name = lower.charAt(0).toUpperCase() + lower.substring(1);
const ransom = 45000;
let playGame;
let vaults = [
    "vault 1 ",
    "vault 2 ",
    "vault 3 "
]; 
let secure;
let exitChoice1;
let method;
let escape;
let code;
let door;
let time;
let follow;
let choice;


// ROB BANK NOW

// VAULT SECTION

const vaultlevel = () => {
    alert ("You have taken the manager to the vaults but you only have time to access one of the three vaults.");
  let vault = prompt( `do you enter ${vaults}` );
  switch(vault) {
    case "vault one":
    case "vault 1":    
    case "one":
    case "1":    
      alert("You have gained access to vault 1 which contains a vast amount of gold.");
      alert (" You fill your bags with the gold.");
      alert (" You then flee the bank but are over encumbered which results in your capture.");
      vaultlevel();
      break;
    case "vault two":
    case "vault 2":      
    case "two":
    case "2":
      alert ("You have gained access to vault 2 which is filled with safety deposit boxes.");
      alert ("You attempt to access the boxes but trip a silent alarm!");
      alert ("BANG! A security gate comes crashing down trapping you inside!");
      vaultlevel(); 
      break;
    case "all":
    case "All":
        alert ("You fool! Your greed has gotten you caught!");
        alert ("Try Again.");
        vaultlevel(); 
        break;
    default:
        alert ("input: 'vault 1', 'vault 2', 'vault 3' or 'all'");
        vaultlevel(); 
        break;
    case "vault three":
    case "vault 3":    
    case "three":
    case "3":     
          alert ("You have accessed vault 3 which has contains pallets of money.");
          alert ("You fill up your bags with as much money as possible and flee.");
          alert ("With the bags filled you get in your car and evade the police! PAYDAY!");
          break; 
  }
};


// HOSTAGE SECTION STARTS 

const hostageLevel = () => {
    alert (`You have gathered the hostages in the lobby.`);
    let secure = prompt("Do you secure the hostages? \nY/N").toLowerCase ();
    if (secure == "yes" || secure == "y") {
    alert ( "Hostages are secured and you proceed to take the bank manager to the vaults.");
    vaultlevel();
    }
    else if ( secure == "no" || secure == "n"){
        alert ("You did not secure the hostages, you were overpowered and detained. \nTry again.");
        hostageLevel ();
    } else { 
          ("Invalid input please use Y/N");
    hostageLevel (); 
    }
}

//  Hostage section ends 


//  CALM METHOD

const outLevel = () => {
    alert ("With your Usain Bolt speed you have made it out of the bank! However you need to figure out how you're going to get away from the bank security guards or the police that the bank have called.");
let noReconGetaway = prompt ("Do you escape on foot or do you steal a car? \nEnter 'foot' or 'car'.")
if (noReconGetaway == "car"){
    alert("You try to steal a car but your luck happens to be terrible as it turns out to be an undercover police officer's vehicle!")
    alert("Failed at the last hurdle! Try again?")
    outLevel ();
}
else if (noReconGetaway == "foot"){
    alert("You've only gone and done it! There's a massive parade going on and you take the opportunity to slip into the crowd and make your way into the underground, you wont be caught now!")
    alert("The adrenaline pumping through your body! You finally settle down and decide to check how you've stolen from the bank...")
    alert("£500. :/ ")
    alert("You've risked your freedom for a measly £500....You should have done the recon first, reckon you would have got more.")
}
else {
    alert("I only recognise 'foot' or 'car'. Try your answer again.");
   outLevel ();
}
}
// BRIBING OR THREATENING THE CASHIER

const calmLevel = () => {
    alert ('You proceed to queue up to see the cashier, whilst also making sure that your head is down so the cameras do not see your face. Once you get to the front, the cashier asks "How may I help you?"') ;
    let exitChoice = prompt ("Do you answer by bribing the cashier, getting the money and walking out of the bank quietly or do you threaten the cashier, get the money and run out of the bank? \nEnter either 'bribe' or 'threat'.")
    if (exitChoice == "bribe"){
       alert("You have now bribed the cashier, the money is in the bag and you're feeling good! You start to walk out the bank quietly however the cashier has double crossed you and you get rugby tackled by the security guard. *OUCH* ");
       alert("You have been caught! Try again.")
       calmLevel ();
   }
   else if (exitChoice == "threat") {
       alert('You threaten the cashier by saying "Do not make any sudden movements. I have a gun and I will use it if I have to. I want you to put all the the money in the bag!"')
       alert("You start to run towards the exit and the security guards try to stop you but they can't. (You are pretty quick to be fair, you broke the record for 100 metres back in high school!")
       outLevel ();
    }
else {
     alert("I only recognise 'bribe' or 'threat' exactly. Try your answer again.");
    calmLevel ();
}
}

// CALM METHOD END


// ROB BANK NOW HOSTAGES

const nowLevel = () => {
    alert("You walk into the bank.");
    alert("You need to decide how you are going to rob the bank.");
    let method = prompt("Do you go about this calmly or take hostages. Enter either calmly or hostages").toLowerCase();
    if (method == "calmly"){
        alert("You have decided to calmly rob the bank.");
   calmLevel();
}
else if (method == "hostages") {
    alert("You have decided to take hostages.");
    hostageLevel();
} else {
    alert("I only recognise 'calmly' or 'hostages' exactly. Try again.");
    nowLevel();
}
}

// ROB BANK NOW END.... 



//RECON SECTION

// escapeSafeLevel
const escapeSafeLevel = () =>{
    alert("you have made it out of the bank");
    alert("you can escape either on foot or by car");
   let escape =prompt("Enter either foot or car");
    if (escape == "car")  {
        alert("You jump in a passing car ready to make your get away.");
        alert("You get stuck in traffic.");
        alert("You wipe the sweat of your brow and nervously look in the rear view mirror.");
        alert("You see the police approaching your car.");
        alert("You get out to flee on foot.");
        alert("As you leave your car you get tackled by the police.");
        alert("You failed to get away. Try again.")
        escapeSafeLevel();
    } else if (escape == "foot"){
        alert("You leave on foot and head for the underground. You hear the police arriving at the bank but you are long gone. ");
        alert(`You got £${vaultAmount} from the vault and £${cashier} from the cashier.`);
        alert(`Total take £${totalTake}.`);
        if ( totalTake >= ransom ){
            alert("You managed to get enougth money to pay of the ransom. Congratulations!");
        } else {
            alert("You did everything you could. But there wasn't enougth money in the vault. \n Try again there might be next time.");  
        };
    } else {
        alert("I only recognise 'foot' or 'car' exactly. Try again.");
        escapeSafeLevel();
    }

}
    
// IN SAFE


//IF TRYED DOOR 
const doorLevel = () => {
alert("There is a code pad on the door");
 let code = prompt("Enter code")
     if (code == pin ){
         alert("PIN correct.");
         alert("You open the door and find yourself in the safe, you take the money and leave the bank.");
         alert(`You gain £${vaultAmount}.`);
         escapeSafeLevel();
      } 
      else {
          alert("PIN incorrect");
          alert("The alarm goes off and the police have surrounded the building. \nYou are trapped.");
          alert("Try again. (Don't try the door if you don't know the code).");
          afternoonLevel();
      } 
      }

 // IF YOU CHOOSE AFTERNOON

const afternoonLevel = () => {
    alert("You walk in the bank and there is no sign of the security guard.");
    alert("You go up too the bank teller and demand they give you all the money from the cashier.");
    alert(`They hand you £${cashier} .`);
    alert("You then walk over to a door with a coded lock on it.")
    let door = prompt("Do you try the door? \nEnter 'yes' or 'no'")
    if (door == "yes" || door == "y"){
        alert("You have chosen to try the door.");
        doorLevel();
     } else if (door == "no" || door == "n") {
        alert("You don't want to take the risk and walk past the door and make your way out.");
        alert(`You made it out the bank but only with £${cashier}.`);
     }else {
         alert("I only recognise 'yes' or 'no' exactly. Try again.");
         afternoonLevel();
     } 
     }

// EVENING



//ROBBERY DAY 
const bigDayLevel = () => {
    alert("Today is the day you are going to rob the bank!");
    let time = prompt("What time do you want to rob the bank? 1 or 5? ");
    if (time == "1" ||  time == "one "){
        alert("You have chosen to attempt to rob the bank at 1 o'clock.");
        afternoonLevel();
     } 
     else if (time == "5" ||  time == "five") {
         alert("You have chosen to rob the bank at 5 o'clock.");
         alert(`You go up too the bank teller and demand all the money from the cashier. \nYou get ${cashier}`);
         alert("You get rugby tackled to the floor!");
         alert("The security guard has apprehended you and the police are on the way!");
         alert("Better luck next time. Try again.");

         bigDayLevel();  
     }   
     else {
         alert("I only recognise '1' or '5' exactly. Try again.");
         bigDayLevel();
     } 
     }


// RECON STEP 1
const reconLevel = () => {
    alert("You wait outside the bank looking to see if you can spot anything to help you in your heist.");
    alert("You discover that the security guard goes on his lunch from 1 till 2.");
    alert("You notice the bank manager walking towards a pin coded door.");
    let follow = prompt("Follow bank manager. [Y/N]").toLowerCase();
    if (follow == "yes" || follow == "y" ){
    alert(`You notice the manager enter the code ${pin} on the locked door. That would be worth remembering.`);
    alert("You go home ready to rob the bank tomorrow.");
    alert(`You have discovered the best time to rob the bank is 1pm and the code is ${pin}.`)
    bigDayLevel();
    } else if (follow == "no" || follow == "n") {
        alert("You decide it is too risky to follow the bank manager and leave the bank.");
        alert("You are ready to apply what you have learnt from your reconnaissance when you rob the bank tomorrow.")
        alert("You discovered that the best time to rob the bank is 1 o'clock.")
        bigDayLevel();  
    }   
    else {
        alert("I only recognise 'no' or 'yes'. \nTry again.");
        reconLevel();
    } 
    }


// FIRST SECTION OF THE GAME
 
const firstLevel = () => {
   let choice = prompt("Would you like to proceed with the heist now or do some recon first? \nEnter 'Now' or 'Recon' to continue.").toLowerCase();
   if (choice == "now"){
   alert("You have chosen to rob the bank now.");
   nowLevel();
} 
else if (choice == "recon") {
    alert("You have decided to carry out the recon.");
    reconLevel();  
}   
else {
    alert("I only recognise 'now' or 'recon' exactly. \nTry again.");
    firstLevel();
} 
}

 // START GAME 

const startGame = () => {
    alert("HELLO! WELCOME TO THE BIG APPLE BANK HEIST!");
    let name = prompt("Please enter your name:");
    alert(`Hi ${name}, your family have been taken hostage and in order to save them and pay the ransom, you have decided to rob the Big Apple Bank.`);
    let playGame = prompt("Are you ready to save them? \n[Y/N]").toLowerCase();
    if (playGame == "y") {
        alert("Great, let's get some money!");
        firstLevel();
    }
    else if (playGame == "n") {
        alert("Fine then.");
    }
    else {
        alert("I only recognise 'Y' or 'N' exactly. \nTry again.");
        startGame();
    }
}

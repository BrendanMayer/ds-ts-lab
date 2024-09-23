import {Friend, Colleague } from './myTypes'
import { friends } from './01-basics'; 
import { colleagues } from './01-basics';


function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(friends: Friend[]): string[] {
    return friends.map(older);  

}
console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));


function addColleague(cs: Colleague[], name: string, department: string, email: string): Colleague {
    
    const currentExtension = highestExtension(cs).contact.extension;
    const newHighestExtension = currentExtension + 1;

    
    const colleagueToAdd: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: newHighestExtension
        }
    };

    
    cs.push(colleagueToAdd);

  
    return colleagueToAdd;
} 

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

//console.log(older(friends[0]))
import {Friend, Colleague, EmailContact } from './myTypes'
import { friends } from './01-basics'; 
import { colleagues } from './01-basics';


function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(friends: Friend[]) {
    return friends.map(older);  

}
//console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  //console.log(highestExtension(colleagues.current));


function addColleague(cs: Colleague[], name: string, department: string, email: string) {
    
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

//addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number, max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
        end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
    //console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
    //console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
    //console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW


function findFriends(friends: Friend[], criterion: (friend: Friend) => boolean): string[] {
    return friends.filter(criterion).map(friend => friend.name);
}

function addInterest(friend: Friend, interest: string): string[] {
    
    if (friend.interests == undefined) {
        friend.interests = [];
    }
    
    friend.interests.push(interest);
    
    return friend.interests;
}

console.log(addInterest(friends[0], 'Politics'))

//console.log(findFriends(friends, (friend) => friend.name.startsWith('Ar')));
//console.log(findFriends(friends, (friend) => friend.age < 35));
//console.log(older(friends[0]))
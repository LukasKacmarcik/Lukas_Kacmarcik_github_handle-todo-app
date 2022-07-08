const args: string[] = process.argv.slice(2);
import { Storage } from "./storage";
import { writeToFile } from "./storage";
import { readFromFile } from "./storage";

switch(args[0]) {
  case undefined:
    console.log('Command Line Todo application\n=============================\nCommand line arguments:\n\t\t-l   Lists all the tasks\n\t\t-a   Adds a new task\n\t\t-r   Removes an task\n\t\t-c   Completes an task');
    break;

  case '-l':
    Storage.list();
    break;

  case '-a':
    Storage.add(args[1]);
    break;
    
  case '-r':
    let indexToRemove = parseInt(args[1])
    
    if (args[1] !== indexToRemove.toString()) {
      console.log('Unable to remove: index is not a number');
      break;
    }

  if(args[1] === undefined) {
      console.log('Unable to remove: no index provided');
      break;
    }
    
    Storage.remove(indexToRemove);
    break;

  case '-c':
    let indexToCheck = parseInt(args[1])
    if (args[1] !== indexToCheck.toString()) {
      console.log('Unable to check: index is not a number');
      break;
    }

  if(args[1] === undefined) {
      console.log('Unable to check: no index provided');
      break;
    }
    
    Storage.complete(indexToCheck)
    break;
  
  default:
    console.log('Unsupported argument');
    console.log('Command Line Todo application\n=============================\nCommand line arguments:\n\t\t-l   Lists all the tasks\n\t\t-a   Adds a new task\n\t\t-r   Removes an task\n\t\t-c   Completes an task');
    ;
}

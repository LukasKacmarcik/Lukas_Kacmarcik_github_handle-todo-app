import fs from 'fs';
import { Task } from './task';
export function readFromFile(): string {
  return fs.readFileSync('./data.txt', 'utf-8');
}

export function writeToFile(stringToWrite:string): void {
  fs.writeFileSync('./data.txt', stringToWrite);
}
export class Storage {

  static list() {
    let originalInArr = readFromFile().split('\n');
    let line = 1;
    originalInArr.forEach(function(task) {
      console.log(`${line} ${task}`);
      line++;
    });
  };
/////ADD
  static add(taskToAdd: string|number) {
    let soFar = readFromFile();
    let numOfLIne = 0;
    if (soFar.length < 1) {
      numOfLIne = soFar.split('\n').length;
    } else {
      numOfLIne = soFar.split('\n').length + 1;
    }
    if(readFromFile().length < 1) {
      writeToFile(`[ ] ${taskToAdd}`)
    } else {
      writeToFile(`${soFar}\n[ ] ${taskToAdd}`);
    }
  };
//////REMOVE
  static remove(taskToRemove: number) {
    let original: string[] = readFromFile().split('\n');
    if(original[taskToRemove] === undefined) {
      return console.log('Unable to remove: index is out of bound');
    }
    original.splice(taskToRemove - 1,1);
    let sendBack = original.join('\n');
    writeToFile(sendBack);
  };
//////COMPLETE
  static complete(taskToComplete: number) {
    let original: string[] = readFromFile().split('\n');
    if(original[taskToComplete] === undefined) {
      return console.log('Unable to check: index is out of bound');
    }
    let mutating = original[taskToComplete - 1];
    mutating = mutating.replace('[ ]','[x]');
    original.splice(taskToComplete - 1, 1, mutating);
    let toSend = original.join('\n');
    writeToFile(toSend);
  };
}
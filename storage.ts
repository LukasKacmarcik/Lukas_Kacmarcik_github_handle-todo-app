import fs from 'fs';
export function readFromFile(): string {
  return fs.readFileSync('./data.txt', 'utf-8');
}

export function writeToFile(stringToWrite:string): void {
  fs.writeFileSync('./data.txt', stringToWrite);
}
export class Storage {

  static list() {
    console.log(readFromFile());
  };

  static add(taskToAdd: string) {
    let soFar = readFromFile();
    writeToFile(`${soFar}\n${taskToAdd}`)
  };

  static remove(taskToRemove: string) {};

  static complete(taskToComplete: string) {};
}
const parseCode = (str) => {
  // your code here
 
  const [firstName, lastName, id] = str.split("0").filter(Boolean);
  return { firstName, lastName, id };
};
 
// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
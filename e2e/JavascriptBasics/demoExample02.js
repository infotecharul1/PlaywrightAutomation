// const
/*
Scope is within the block
Instantiation and assignment - Both must be done at the time of declaration
Reinstantiation is not allowed

*/
{
  const pi = 1;
  pi = 3.14; // This will throw an error because 'const' variables must be initialized at the time of declaration
}
Console.log(pi); // Outputs: 3.14

// let
/*
Scope is within the block
instiantiation and assignment is allowed - we do seperate declaration and assignment
Reinstantiation is allowed

*/
{
  let radius = 2.5;
  radius = 3; // This is allowed because 'let' variables can be reassigned
  console.log(radius); // Outputs: 3
}

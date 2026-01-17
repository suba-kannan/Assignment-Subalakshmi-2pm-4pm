// Explain try / catch / finally

// Used to handle errors safely without crashing the program.

// try

// Code that may cause error is written here.

// catch

// Runs if an error occurs in try.

// finally

// Always runs whether error occurs or not.
try {
  let x = y + 10; // y not defined
} catch (error) {
  console.log("Error occurred:", error.message);
} finally {
  console.log("Program finished");
}

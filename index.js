require('datejs');

function combineUsers(...args) {
  // Step 2: Initialize the return object
  const combinedObject = {
    users: [],
  };

  // Step 3 & 4: Loop through args and merge all arrays into users
  for (const arr of args) {
    combinedObject.users = [...combinedObject.users, ...arr];
  }

  // Step 5: Get today's date in M/d/yyyy format
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  // Step 7: Return the combined object
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
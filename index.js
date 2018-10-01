const msg = {
  "message": "",
  "date": ""
};

function grabMessage(index) {
  return (index === -1) ? null : process.argv[index];
}

if (process.argv.length !== 4) {
  console.log("Please enter a message and a date. No more, no less.");
} else {
  msg.message = grabMessage(2);
  msg.date = grabMessage(3);
  console.log (msg);
}

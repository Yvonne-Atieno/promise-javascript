//Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.
async function messageString(message, delay){
    await new Promise((resolve)=>setTimeout(resolve,delay));
    console.log(messageString)
  }
  messageString("I love JavaScript",3000)



logMassageWithDelay("Hello,world!",1000);   
    




//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
let userIds = [001,002,003,004];
async function getUserData(userIds) {
  let i = 0;
  if( i => userIds.length) {
    return;
  }
  const id = userIds[i++]
  const userData = await getUserData(userIds[i]);
    console.log(userData);
}
getUserData();


//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
async functiondoTask(){
    try{
 await performTask();
 console.log("Task completed successfully") ;      

    }
} 
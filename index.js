
import client from "./cofig/open-ai.js";
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {
    /** Basic logic 
     
    const chatCompletion = await client.chat.completions.create({
        model: 'gpt-4o',
        messages : [{
            role:'developer',
            content: 'what is the capital of India'
        }]
    });

    */
  

    console.log(colors.bold.green("Welcome to the chatbot program"));
    console.log(colors.bold.green("You can start chatting with the bot"));
    const chatHistory = [];
    
    while(true){
        const userInput = readlineSync.question(colors.yellow("You: "));
        try {
            const messages = chatHistory.map(([role,content])=> ({role, content}));
                 
            messages.push({role:'developer', content:userInput});

            const chatCompletion = await client.chat.completions.create({
                model: 'gpt-4o',
                messages :messages
            });
            const aitext = chatCompletion.choices[0].message.content;

            if(userName.toLocaleLowerCase() === 'exit') {
                console.log(colors.green( `Bot: ${aitext}`));
                return;
            } 
                 
            console.log(colors.green( `Bot: ${aitext}`));
            chatHistory.push(['developer',userInput]);
            chatHistory.push(['assistant',aitext]);
            
        } catch (error){
            console.log(colors.red( `BOT: ${error}`));
            return;
        }
       
    }
}

main();
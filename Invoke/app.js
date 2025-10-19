import Groq from "groq-sdk/index.mjs";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
})

async function main(){
    const response = await groq.chat.completions.create({
        model:"llama-3.1-8b-instant",
        messages:[
            {
                role:"user",
                content:"Hello, can you tell me a joke?",
            }
        ]
    })
    // console.log(response);
    console.log(response.choices[0]);
    
}

main();
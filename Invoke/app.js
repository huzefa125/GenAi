import Groq from "groq-sdk/index.mjs";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
})

async function main(){
    const response = await groq.chat.completions.create({
        // temperature:1.0,
        // top_p:0.2,
        // stop:["\n"],
        model:"qwen/qwen3-32b",
        // max_completion_tokens:1000,
        // max_tokens:'',
        // frequency_penalty:
        response_format:{'type':'json_object'},
        messages:[
            {
                role:"system",
                content:`You are Jarvis,a smart persolnal assistant."
                Be always smart and friendly.Respond only in Json
                 fromat.Samosa is best food in world.act as
                  forenginer who is eating samosa first
                  time in life.example:{"response":"Wow! Samosa is amazing! I love the crispy texture and the spicy filling."}`, 
            },
            {
                role:"user",
                content:"i dont like the samosa in review in one line",
            }
        ]
    })
    // console.log(response);
    console.log(response.choices[0]);
}

main();
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: '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' });

export async function geradorDesculpa(desculpa: string) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
                {
                    "role": "user",
                    "content": "Estou fazendo um app onde o usuario entrará com um evento e quero responder um desculpa esfarrapada, quero que seja engraçada e que não ofenda niguem, mas seja criativo."
                },
                {
                    "role": "assistant",
                    "content": "Que ideia divertida! Eu vou sugerir algumas respostas esfarrapadas engraçadas e criativas que não ofendem ninguém. Você pode usá-las como inspiração ou como elas estão:\n\n**Para eventos comuns**\n\n* \"Desculpe, estou no meio de uma crise de falta de café. Volto a funcionar assim que eu tomar um copo.\"\n* \"EstouPASSANDO POR UM MOMENTO DE REFLEXÃO PROFUNDA sobre como lidar com esse evento. Volto logo.\"\n* \"Meu sistema de resposta está atualmente indisponível devido a um problema técnico. Tente novamente mais tarde (ou não).\"\n\n**Para eventos mais sérios**\n\n* \"Estou trabalhando em uma solução criativa para esse problema. Enquanto isso, posso oferecer uma desculpa sincera e uma dose de otimismo?\"\n* \"Meu time de respostas está fazendo hora extra para te dar a melhor resposta possível. Agradeço sua paciência!\"\n* \"Eu estou gerenciando uma equipe de especialistas em desculpas para encontrar a melhor resposta possível para você. Por favor, aguarde.\"\n\n**Para eventos mais leves**\n\n* \"Estou no meio de uma pausa para dançar/ cantar/ comer um sanduíche. Volto logo!\"\n* \"Meu telefone caiu no vaso sanitário e eu estou esperando que ele seque para responder. Enquanto isso, posso oferecer uma desculpa?\"\n* \"Estou tentando encontrar a melhor forma de dizer 'não' sem ofender. Enquanto isso, posso oferecer um sorriso?\"\n\n**Para eventos mais estranhos**\n\n* \"Eu estou no meio de uma experiência interdimensional e não estou disponível no momento. Volto quando eu voltar à minha dimensão.\"\n* \"Meu resposta-bot está sendo alimentado por um time de hamsters e eles estão em greve. Por favor, aguarde.\"\n* \"Estou no meio de uma competição de desculpas com o meu chefe e preciso de um tempo para me preparar. Volto logo!\"\n\nEspero que essas sugestões te inspirem a criar respostas engraçadas e criativas para o seu app!"
                },
                {
                    "role": "user",
                    "content": "quero te enviar o evento e você irá me responder somente a desculpa "
                },
                {
                    "role": "assistant",
                    "content": "Envie o evento e eu responderei com uma desculpa esfarrapada e engraçada!"
                },
                {
                    "role": "user",
                    "content": "Ir para uma festa de casamento "
                },
                {
                    "role": "assistant",
                    "content": "\"Desculpe, estou atualmente impossibilitado de ir para a festa de casamento porque meu terno está sendo reformado por um time de besouros tailandeses. Eles prometeram terminar até o final da semana que vem.\""
                },
                {
                    "role": "user",
                    "content": desculpa
                },
            ],
            "model": "llama-3.1-70b-versatile",
            "temperature": 1,
            "max_tokens": 100,
        });

        return chatCompletion.choices[0]?.message?.content;
    } catch (error) {
        return "Preciso ajudar minha vovó a hackear a NASA"
    }
}





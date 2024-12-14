const Groq = require("groq-sdk");

const groq = new Groq({apiKey: "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"});

export async function geradorDesculpas(desculpa: string) {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content:
          "Estou fazendo um app onde o usuário entrara com um evento e quero responder com uma desculpa esfarapada, quero que seja engraçada e que não ofenda ninguem, mas seja criativo.\n",
      },
      {
        role: "assistant",
        content:
          'What a fun project!\n\nI\'d be happy to help you come up with some creative and playful excuses that are sure to bring a smile to your users\' faces. Since you want to avoid offending anyone, I\'ll make sure to keep them light-hearted and respectful.\n\nHere are some examples to get you started:\n\n1. "Sorry about that, I was just trying to attend to the sudden uprising of the sofa cushions, which required my immediate attention."\n2. "I apologize for the inconvenience, but I was mid-journey to find the correct recipe for the perfect grilled cheese sandwich, and time got away from me."\n3. "Unfortunately, I was dealing with a sudden case of \'Sudden Onset Dance Disorder\' and had to perform an emergency dance break to restore my focus."\n4. "I regret to inform you that I was temporarily abducted by a group of mischievous pixies, who needed my help with their impromptu jam session."\n5. "Sorry about the delay, I was just out for a quick walk to rescue a group of trapped honeybees who were stuck in a nearby flower pot."\n6. "I apologize for the inconvenience, but I was experiencing a sudden case of \'Amnesia-Induced Disco Fever,\' and my memory was temporarily replaced with an endless supply of disco music."\n7. "Unfortunately, I was in the middle of a crucial round of \'Extreme Knitting,\' and had to pause to re-tie my scarf, which had become stuck in the sleeve of my sweater."\n8. "I\'m afraid I had to put off our meeting due to a sudden and unforeseen \'Flapjack Emergency,\' which required my immediate attention to resuscitate the last of the batch."\n9. "Sorry to keep you waiting, but I was dealing with a mysterious case of \'Sudden Onset Spontaneous Silliness,\' which caused me to break out in uncontrollable laughter."\n10. "I regret to inform you that I was temporarily beamed away to a distant planet to help with an intergalactic bake-off competition, and didn\'t have time to return before our meeting."\n\nFeel free to modify or combine these examples to fit your app\'s tone and style. I hope these creative excuses bring a smile to your users\' faces and help keep your app fun and engaging!',
      },
      {
        role: "user",
        content: "pode responder em pt-br?",
      },
      {
        role: "assistant",
        content:
          'Claro!\n\nEu estou feliz em ajudar você a criar desculpas esfarapadas e engraçadas para o seu app. Aqui vão algumas sugestões para você começar:\n\n1. " Desculpe, mas eu estava tentando lidar com a sublevação repentina dos almofadões do sofá, que exigiu minha atenção imediata."\n2. "Peço desculpas pelo inconveniente, mas eu estava em uma jornada para encontrar a receita certa para o sanduíche de queijo tostado perfeito e o tempo fugiu de mim."\n3. "Infelizmente, eu estava lidando com um caso de \'Desordem de Dança Súbita\' e precisei fazer uma pausa de emergência para restaurar meu foco."\n4. "Lamento informar que eu fui temporariamente sequestrado por um grupo de pixies travessos que precisavam da minha ajuda para uma sessão de improvisação."\n5. "Desculpe pelo atraso, mas eu estava fazendo um passeio para resgatar um grupo de abelhas presas em um vaso de flores próximo."\n6. "Peço desculpas pelo inconveniente, mas eu estava experimentando um caso de \'Febre Disco Induzida por Amnésia\' e minha memória foi temporariamente substituída por uma Playlist de música disco."\n7. "Infelizmente, eu estava no meio de uma rodada crucial de \'Tricô Extremo\' e tive que pausar para reamarrar meu xale, que estava preso na manga da minha blusa."\n8. "Lamento informar que eu precisei adiar nosso encontro devido a uma \'Emergência de Biscoitos\' súbita e inesperada, que exigiu minha atenção imediata para ressuscitar a última partida."\n9. "Desculpe por ter mantido você esperando, mas eu estava lidando com um caso de \'Súbita Espontaneidade\' que me fez quebrar em risadas incontroláveis."\n10. "Lamento informar que eu fui temporariamente transportado para um planeta distante para ajudar em uma competição de padaria interestelar e não tive tempo de voltar antes do nosso encontro."\n\nSinta-se à vontade para modificar ou combinar essas sugestões para se adaptar ao tom e ao estilo do seu app. Espero que essas desculpas criativas tragam um sorriso ao rosto dos usuários e mantenham o seu app divertido e atraente!',
      },
      {
        role: "user",
        content:
          "quero te enviar o evento e você irá me responder somente a desculpa",
      },
      {
        role: "assistant",
        content:
          "Envie o evento e irei responder com uma desculpa criativa e engraçada!",
      },
      {
        role: "user",
        content: "ir para uma festa de casamento",
      },
      {
        role: "assistant",
        content:
          '"Desculpe, mas eu estava no meio de uma investigação importante sobre a desaparição de um par de sapatos de dança e não pude deixar o caso sem solução!"',
      },
      {
        role: "user",
        content: desculpa,
      },
    ],
    model: "llama-3.1-70b-versatile",
    temperature: 1,
    max_tokens: 1024,
  });

  debugger;
  console.log(chatCompletion.choices[0]?.message?.content);

  return chatCompletion.choices[0]?.message?.content || "";
}

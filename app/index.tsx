import { geradorDesculpas } from "@/services/ai/generator";
import styles from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [desculpa, setDesculpa] = useState("")
  const [resposta, setResposta] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const callDesculpa = async () => {
    console.log("chegout aqui")
    if (desculpa.length < 5) {
      alert("Desculpe, o evento precisa ter mais de 5 caracteres")
      return;
    }
    
    const result = await geradorDesculpas(desculpa);
    setResposta(result)
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.titulo}>Desculpator 300</Text>
      <Text style={styles.subtitulo}>Sua maquina de desculpas profissional</Text>
      <TextInput
        onChangeText={setDesculpa}
        value={desculpa}
        style={styles.input}
        placeholder="Digite o evento que você quer evitar ..."></TextInput>

      <TouchableOpacity style={styles.button} onPress={callDesculpa}>
        <Text style={styles.buttonText}>{ !isLoading ? "Gerar desculpas infalível!" : ""}</Text>
      </TouchableOpacity>


      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sua desculpa está pronta:</Text>
        <Text style={styles.cardText}>{resposta}</Text>
      </View>

    </View>
  );
}

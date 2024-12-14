import styles from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [desculpa, setDesculpa] = useState("")

  const gerarDesculpa = () => {
    if (desculpa.length < 5) {
      alert("Desculpe, o evento precisa ter mais de 5 caracteres")
      return;
    }
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

      <TouchableOpacity style={styles.button} onPress={gerarDesculpa}>
        <Text style={styles.buttonText}>Gerar desculpas infalível!</Text>
      </TouchableOpacity>


      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sua desculpa está pronta:</Text>
        <Text style={styles.cardText}>a desculpa gerada pela IA</Text>
      </View>

    </View>
  );
}

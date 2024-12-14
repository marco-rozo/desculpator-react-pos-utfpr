import { geradorDesculpa } from "@/services/ai/generator";
import styles from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MotiView } from 'moti';

export default function Index() {
  const [desculpa, setDesculpa] = useState("")
  const [resposta, setResposta] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const callDesculpa = async () => {
    if (desculpa.length < 5) {
      alert("Desculpe, o evento precisa ter mais de 5 caracteres")
      return;
    }

    setIsLoading(true);
    setDesculpa("")
    setResposta("")

    try {
      const result = await geradorDesculpa(desculpa);
      setResposta(result)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false);
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

      <TouchableOpacity style={styles.button} onPress={callDesculpa}>
        <Text style={styles.buttonText}>{isLoading ? "Carregando..." : "Gerar desculpas infalível!"}</Text>
      </TouchableOpacity>


      {
        resposta && (
          <MotiView
            style={styles.card}
            from={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
          >
            <Text style={styles.cardTitle}>Sua desculpa está pronta:</Text>
            <Text style={styles.cardText}>{resposta}</Text>
          </MotiView>
        )
      }

    </View>
  );
}

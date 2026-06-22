import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// useLocalSearchParams serve para resgatar os parâmetros que enviamos de outra tela
import { router, useLocalSearchParams } from 'expo-router';

export default function Resultado() {
  // Pega todos os dados recebidos na navegação
  const params = useLocalSearchParams(); 
  
  // Pegamos o valor enviado com o nome "acertos".
  // Transformamos em Número. Se não existir nada lá, usamos o 0 como padrão.
  const acertos = Number(params.acertos) || 0;
  
  // O Quiz tem 10 perguntas. Erros = Total menos Acertos!
  const totalPerguntas = 10;
  const erros = totalPerguntas - acertos;

  // Função para voltar ao Início do Quiz
  const reiniciarQuiz = () => {
    router.push('/'); // '/' é o endereço principal do aplicativo (o index.tsx)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Campeonato Finalizado! 🎉</Text>
      
      {/* Quadro de Placares */}
      <View style={styles.cardPlacar}>
        <Text style={styles.textoAcertos}>✅ Você acertou: {acertos} questões</Text>
        <Text style={styles.textoErros}>❌ Você errou: {erros} questões</Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={reiniciarQuiz}>
        <Text style={styles.textoBotao}>JOGAR NOVAMENTE</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilização Visual
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ecfdf5', padding: 20 },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, color: '#047857', textAlign: 'center' },
  cardPlacar: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 20,
    width: '100%',
    elevation: 3, // Sombrinha legal
    marginBottom: 40,
  },
  textoAcertos: { fontSize: 22, color: '#10b981', fontWeight: 'bold', marginBottom: 15 },
  textoErros: { fontSize: 22, color: '#ef4444', fontWeight: 'bold' },
  botao: { backgroundColor: '#0f766e', paddingVertical: 18, paddingHorizontal: 40, borderRadius: 12, width: '100%', alignItems: 'center' },
  textoBotao: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
});

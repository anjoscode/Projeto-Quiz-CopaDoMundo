import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// O 'router' é a ferramenta do Expo que usamos para navegar de uma tela para outra!
import { router } from 'expo-router'; 

export default function TelaInicial() {
  
  // Essa função é executada quando o usuário clica no botão "Começar"
  const comecarQuiz = () => {
    // Aqui estamos mandando o aplicativo ir para a tela chamada "pergunta1"
    router.push('/pergunta1');
  };

  return (
    // A View é o container principal, como se fosse o 'body' ou uma 'div' grande do HTML
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Copa do Mundo 🏆</Text>
      
      <Text style={styles.subtitulo}>Teste seus conhecimentos e veja se você conhece mesmo sobre a Copa do Mundo!</Text>
      
      {/* TouchableOpacity é o botão do React Native (ele dá um efeito de clique) */}
      <TouchableOpacity style={styles.botao} onPress={comecarQuiz}>
        <Text style={styles.textoBotao}>INICIAR JOGO</Text>
      </TouchableOpacity>
      
    </View>
  );
}

// O StyleSheet é onde criamos o design, bem parecido com CSS!
const styles = StyleSheet.create({
  container: { 
    flex: 1, // Faz a View ocupar a tela inteira
    justifyContent: 'center', // Centraliza os elementos no meio da tela (vertical)
    alignItems: 'center', // Centraliza os elementos (horizontal)
    backgroundColor: '#f0f4f8', // Cor do fundo
    padding: 20
  },
  titulo: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 10,
    color: '#1e293b',
    textAlign: 'center'
  },
  subtitulo: { 
    fontSize: 18, 
    marginBottom: 50,
    color: '#64748b',
    textAlign: 'center'
  },
  botao: { 
    backgroundColor: '#4f46e5', // Cor azul do botão
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12, // Deixa as bordas arredondadas
  },
  textoBotao: { 
    color: '#ffffff', // Letra branca
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});

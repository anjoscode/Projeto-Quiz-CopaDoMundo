import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function Resultado() {
  
  // Pega os dados enviados pela última pergunta do quiz
  const params = useLocalSearchParams(); 
  
  // Converte a quantidade de acertos para número, garantindo que seja 0 se não houver dados
  const acertos = Number(params.acertos) || 0;
  
  // Calcula o total de erros com base no número de perguntas do quiz
  const totalPerguntas = 10;
  const erros = totalPerguntas - acertos;

  // Função que escolhe uma mensagem especial de acordo com o desempenho do jogador
  const obterFeedback = () => {
    if (acertos === 10) {
      return "Espetacular! Desempenho perfeito igual ao Brasil em 2002!";
    } else if (acertos >= 7) { 
      return "Gênio da bola! Sua leitura de jogo foi digna de um camisa 10 da Seleção!";
    } else if (acertos >= 4) { 
      return "Quase lá! Você bateu na trave igual ao Mbappé em 2022!";
    } else { // Caso tenha entre 0 e 3 acertos
      return "Isolou o pênalti! Desempenho doloroso igual ao Baggio em 94...";
    }
  };

  // Função que escolhe a imagem de fundo baseada na pontuação
  const obterImagemFundo = () => {
    if (acertos === 10) {
      return require('../../assets/images/ronaldo2002.png');
    } else if (acertos >= 7) { 
      // Neymar para 7, 8 ou 9 acertos
      return require('../../assets/images/neymar10.png');
    } else if (acertos >= 4) { 
      return require('../../assets/images/mbappe2022.png');
    } else { 
      return require('../../assets/images/baggio94.png');
    }
  };

  // Função para voltar à tela inicial e começar um novo jogo
  const reiniciarQuiz = () => {
    router.push('/'); 
  };

  return (
    // Usa uma imagem de fundo que muda conforme o resultado
    <ImageBackground 
      source={obterImagemFundo()} 
      style={styles.container}
      imageStyle={styles.imagemFundo}
      resizeMode="cover"
    >
      {/* Título de fim de jogo */}
      <Text style={styles.titulo}>Fim de Jogo!</Text>
      
      {/* Mensagem personalizada sobre o desempenho */}
      <Text style={styles.mensagemFeedback}>{obterFeedback()}</Text>

      {/* Caixa que mostra o placar final */}
      <View style={styles.cardPlacar}>
        <Text style={styles.textoAcertos}>✅ Você acertou: {acertos} questões</Text>
        <Text style={styles.textoErros}>❌ Você errou: {erros} questões</Text>
      </View>

      {/* Botão para recomeçar o quiz */}
      <TouchableOpacity style={styles.botao} onPress={reiniciarQuiz}>
        <Text style={styles.textoBotao}>JOGAR NOVAMENTE</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

// Estilização da tela
const styles = StyleSheet.create({
  // Fundo ocupando a tela toda
  container: { 
    flex: 1, 
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#000000', 
    padding: 20,
    flexDirection: 'column', 
  },
  
  // Ajuste de opacidade da imagem de fundo
  imagemFundo: {
    opacity: 0.80, 
    width: '100%',
    height: '100%',
  },
  
  // Título da tela
  titulo: { 
    fontSize: 36, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    color: '#ffffff', 
    textAlign: 'center',
    width: '100%',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  
  // Estilo do feedback
  mensagemFeedback: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff', 
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    lineHeight: 26,
    width: '100%',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  
  // Estilo da caixa de placar
  cardPlacar: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    width: '100%',
    elevation: 5, 
    marginBottom: 25,
  },
  
  // Texto de acertos e erros
  textoAcertos: { fontSize: 20, color: '#10b981', fontWeight: 'bold', marginBottom: 10 },
  textoErros: { fontSize: 20, color: '#ef4444', fontWeight: 'bold' },
  
  // Botão de jogar novamente
  botao: {
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  
  // Texto dentro do botão
  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
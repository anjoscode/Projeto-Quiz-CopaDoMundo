// Importação de dependências
import { router } from 'expo-router';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Tela de boas-vindas do quiz
export default function TelaInicial() {
  
  // Direciona o usuário para a primeira pergunta
  const comecarQuiz = () => {
    router.push('/pergunta1');
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/copadomundo2026.png')} 
      style={styles.container}
      imageStyle={styles.imagemFundo} 
      resizeMode="cover" 
    >
      {/* Camada para garantir contraste do texto sobre a imagem */}
      <View style={styles.overlay} />
      
      {/* Título principal */}
      <Text style={styles.titulo}>Copa do Mundo</Text>
      
      {/* Breve descrição do quiz */}
      <Text style={styles.subtitulo}>
        Teste seus conhecimentos e veja se você conhece mesmo sobre a Copa do Mundo!
      </Text>
      
      {/* Botão de ação para iniciar */}
      <TouchableOpacity style={styles.botao} onPress={comecarQuiz}>
        <Text style={styles.textoBotao}>INICIAR JOGO</Text>
      </TouchableOpacity>
      
    </ImageBackground>
  );
}

// Folha de estilos
const styles = StyleSheet.create({
  // Container centralizado que ocupa a tela toda
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#000000',
    padding: 24
  },
  
  // Overlay escurecido para melhorar o contraste
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)', 
  },

  // Ajustes da imagem de fundo
  imagemFundo: {
    width: '100%',
    height: '100%',
  },
  
  // Estilo do título
  titulo: { 
    fontSize: 44, 
    fontWeight: 'bold', 
    marginBottom: 16,
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 0.8,
    textShadowColor: '#000000', 
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  
  // Estilo do subtítulo
  subtitulo: { 
    fontSize: 18, 
    lineHeight: 26,
    marginBottom: 60,
    color: '#ffffff',
    textAlign: 'center',
    maxWidth: '85%', 
    fontWeight: '600', 
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  
  // Botão "Iniciar Jogo"
  botao: { 
    backgroundColor: '#eab308', 
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30, 
    width: '85%', 
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  
  // Texto do botão
  textoBotao: { 
    color: '#1e293b', 
    fontSize: 18, 
    fontWeight: 'bold',
    letterSpacing: 1.2, 
  },
});

//.
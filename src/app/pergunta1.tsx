import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';

export default function Pergunta1() {
  
  // Função que verifica a resposta e passa os pontos para a próxima tela
  const responder = (acertou: boolean) => {
    
    // Inicializa os pontos da Pergunta 1 e envia para a Pergunta 2
    let pontosAtuais = 0;
    if (acertou) { 
      pontosAtuais = 1; 
    }
    
    // Manda o usuário para a próxima tela levando o placar
    router.push({ 
      pathname: '/pergunta2', 
      params: { acertos: pontosAtuais } 
    });
  };

  return (
    // Container principal da tela
    <View style={styles.container}>
      
      {/* Mostra em qual pergunta o aluno está */}
      <Text style={styles.contador}>Pergunta 1 de 10</Text>
      
      {/* Imagem da pergunta */}
      <Image source={require('../../assets/images/jogadores-uruguai.png')} style={styles.imagem} />

      {/* Enunciado da questão */}
      <Text style={styles.pergunta}>Qual país sediou a primeira Copa do Mundo da FIFA em 1930?</Text>
      
      {/* Opções de resposta: se for a correta, passa true, se não, passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>A) Brasil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={() => responder(true)}>
        <Text style={styles.textoBotao}>B) Uruguai</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>C) Itália</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>D) Argentina</Text>
      </TouchableOpacity>
      
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F5F5DC', 
    padding: 20 
  },
  
  // Contador em destaque
  contador: { 
    fontSize: 24, 
    color: '#000000', 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  
  // Imagem ajustada
  imagem: { 
    width: '95%', 
    height: 350, 
    marginBottom: 30, 
    resizeMode: 'contain' 
  }, 
  
  // Texto da pergunta
  pergunta: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 40, 
    textAlign: 'center', 
    color: '#1f2937' 
  },
  
  // Formato dos botões
  botao: { 
    backgroundColor: '#eab308', 
    padding: 18, 
    borderRadius: 30, 
    width: '100%', 
    marginBottom: 15, 
    alignItems: 'center',
    elevation: 3, 
    shadowColor: '#166534', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  
  // Estilo do texto dentro dos botões
  textoBotao: { 
    color: '#1e293b', 
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
});
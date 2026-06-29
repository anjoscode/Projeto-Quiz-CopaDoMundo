import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// Importa o router para navegar e o useLocalSearchParams para ler os pontos da tela anterior
import { router, useLocalSearchParams } from 'expo-router';

export default function Pergunta2() {
  
  // Pega os pontos que vieram da tela anterior (Pergunta 1)
  const params = useLocalSearchParams();
  // Converte os pontos para número, se não encontrar nada, começa com 0
  const pontosRecebidos = params.acertos ? Number(params.acertos) : 0;
  
  // Função que verifica se o aluno acertou e soma no placar
  const responder = (acertou: boolean) => {
    
    // Começa com a pontuação anterior e soma +1 se a resposta estiver correta
    let pontosAtuais = pontosRecebidos;
    if (acertou) { 
      pontosAtuais = pontosRecebidos + 1; 
    }
    
    // Vai para a próxima tela levando a pontuação atualizada
    router.push({ 
      pathname: '/pergunta3', 
      params: { acertos: pontosAtuais } 
    });
  };

  return (
    // Container principal da tela
    <View style={styles.container}>
      
      {/* Mostra em qual pergunta o aluno está */}
      <Text style={styles.contador}>Pergunta 2 de 10</Text>
      
      {/* Imagem da pergunta */}
      <Image source={require('../../assets/images/jogadormisterioso.png')} style={styles.imagem} />

      {/* Enunciado da questão */}
      <Text style={styles.pergunta}>Qual jogador detém o recorde de mais gols marcados em uma única edição de Copa do Mundo?</Text>
      
      {/* Opções de resposta: se for a correta, passa true, se não, passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(true)}>
        <Text style={styles.textoBotao}>A) Just Fontaine (França)</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>B) Diego Maradona (Argentina)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>C) Gerd Müller (Alemanha)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>D) Sandor Kocsis (Hungria)</Text>
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
    backgroundColor: '#ECEFF1', 
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
    backgroundColor: '#166534', 
    padding: 18, 
    borderRadius: 30, 
    width: '100%', 
    marginBottom: 15, 
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#1e3a8a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  
  // Estilo do texto dentro dos botões
  textoBotao: { 
    color: '#ffffff', 
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
});
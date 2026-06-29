import { router, useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Pergunta8() {
  
  // Pega os pontos que vieram da tela anterior (Pergunta 7)
  const params = useLocalSearchParams();
  // Converte os pontos para número, se não encontrar nada, começa com 0
  const pontosRecebidos = params.acertos ? Number(params.acertos) : 0;
  
  // Função que verifica se o aluno acertou e soma no placar
  const responder = (acertou: boolean) => {
    
    // Começa com os pontos que o aluno já tinha e soma +1 se a resposta for correta
    let pontosAtuais = pontosRecebidos;
    if (acertou) { 
      pontosAtuais = pontosRecebidos + 1; 
    }
    
    // Avança para a próxima tela (/pergunta9) levando o novo placar
    router.push({ 
      pathname: '/pergunta9' as any,
      params: { acertos: pontosAtuais } 
    });
  };

  return (
    // Estrutura principal que organiza os elementos na tela
    <View style={styles.container}>
      
      {/* Exibe o número da pergunta atual */}
      <Text style={styles.contador}>Pergunta 8 de 10</Text>
      
      {/* Imagem ilustrativa da pergunta */}
      <Image source={require('../../assets/images/var 2026.png')} style={styles.imagem} />

      {/* Enunciado da questão */}
      <Text style={styles.pergunta}>
        Em qual Copa do Mundo a tecnologia do VAR (Árbitro de Vídeo) foi utilizada oficialmente pela primeira vez?
      </Text>
      
      {/* Opções de resposta: se for a correta, passa true, se não, passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(true)}>
        <Text style={styles.textoBotao}>A) 2018 (Rússia)</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>B) 2014 (Brasil)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>C) 2022 (Catar)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>D) 2026 (América do Norte)</Text>
      </TouchableOpacity>
      
    </View>
  );
}

// Estilização da tela seguindo o padrão unificado
const styles = StyleSheet.create({
  // Fundo e alinhamento dos elementos
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#E0F2FE', 
    padding: 20 
  },
  
  // Estilo do contador de perguntas
  contador: { 
    fontSize: 24, 
    color: '#000000', 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  
  // Ajustes de tamanho e aparência da imagem
  imagem: { 
    width: '95%', 
    height: 350, 
    marginBottom: 30, 
    resizeMode: 'contain' 
  },
  
  // Texto da pergunta principal
  pergunta: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 40, 
    textAlign: 'center', 
    color: '#1f2937' 
  },
  
  // Estilo visual dos botões
  botao: { 
    backgroundColor: '#6b21a8', 
    padding: 18, 
    borderRadius: 30, 
    width: '100%', 
    marginBottom: 15, 
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  
  // Texto dentro dos botões
  textoBotao: { 
    color: '#ffffff', 
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
});
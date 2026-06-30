import { router, useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Pergunta6() {
  
  // Pega os pontos que vieram da tela anterior (Pergunta 5)
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
    
    // Avança para a próxima tela levando o novo placar
    router.push({ 
      pathname: '/pergunta7' as any,
      params: { acertos: pontosAtuais } 
    });
  };

  return (
    // Estrutura principal que organizes os elementos na tela
    <View style={styles.container}>
      
      {/* Exibe o número da pergunta atual */}
      <Text style={styles.contador}>Pergunta 6 de 10</Text>
      
      {/* Imagem ilustrativa da pergunta */}
      <Image source={require('../../assets/images/copa2018.png')} style={styles.imagem} />

      {/* Enunciado da questão */}
      <Text style={styles.pergunta}>
        Qual destas seleções surpreendeu o mundo e chegou à final da Copa de 2018 na Rússia?
      </Text>
      
      {/* Opções de resposta: se for a correta, passa true, se não, passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(true)}>
        <Text style={styles.textoBotao}>A) Croácia</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>B) Marrocos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>C) Bélgica</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>D) Inglaterra</Text>
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
    backgroundColor: '#FEE2E2', 
    padding: 15 
  },
  
  // Estilo do contador de perguntas
  contador: { 
    fontSize: 16, 
    color: '#000000', 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  
  // Ajustes de tamanho e aparência da imagem
  imagem: { 
    width: '90%', 
    height: 220, 
    marginBottom: 15, 
    resizeMode: 'contain' 
  },
  
  // Texto da pergunta principal
  pergunta: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center', 
    color: '#1f2937' 
  },
  
  // Estilo visual dos botões
  botao: { 
    backgroundColor: '#1e3a8a', 
    padding: 12, 
    borderRadius: 20, 
    width: '100%', 
    marginBottom: 10, 
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  
  // Texto dentro dos botões
  textoBotao: { 
    color: '#ffffff', 
    fontSize: 14, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
});

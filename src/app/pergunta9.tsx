import { router, useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Pergunta9() {
  
  // Pega a pontuação acumulada que veio da tela anterior (Pergunta 8)
  const params = useLocalSearchParams();
  // Converte o valor para número, garantindo que comece em 0 caso não exista
  const pontosRecebidos = params.acertos ? Number(params.acertos) : 0;
  
  // Função que verifica se o aluno acertou e soma no total de pontos
  const responder = (acertou: boolean) => {
    
    // Começa com os pontos que o aluno já tinha e soma +1 se a resposta for correta
    let pontosAtuais = pontosRecebidos;
    if (acertou) { 
      pontosAtuais = pontosRecebidos + 1; 
    }
    
    // Avança para a última pergunta (Pergunta 10) levando o placar atualizado
    router.push({ 
      pathname: '/pergunta10' as any,
      params: { acertos: pontosAtuais } 
    });
  };

  return (
    // Estrutura principal que organiza os elementos na tela
    <View style={styles.container}>
      
      {/* Exibe o número da pergunta atual */}
      <Text style={styles.contador}>Pergunta 9 de 10</Text>
      
      {/* Imagem ilustrativa da pergunta */}
      <Image source={require('../../assets/images/cafumisterioso.png')} style={styles.imagem} />

      {/* Enunciado da questão */}
      <Text style={styles.pergunta}>
        Quem era o capitão que ergueu a taça do pentacampeonato do Brasil na Copa de 2002?
      </Text>
      
      {/* Opções de resposta: se for a correta, passa true, se não, passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>A) Dunga</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>B) Roberto carlos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>C) Lúcio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(true)}>
        <Text style={styles.textoBotao}>D) Cafu</Text>
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
    backgroundColor: '#C8E6C9', 
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
    backgroundColor: '#c2410c', 
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
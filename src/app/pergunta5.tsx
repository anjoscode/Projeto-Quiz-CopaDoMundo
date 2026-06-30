import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Importa o router para navegar e o useLocalSearchParams para ler os pontos da tela anterior
import { router, useLocalSearchParams } from 'expo-router';

export default function Pergunta5() {
  
  // Pega a pontuação acumulada que veio da tela anterior (Pergunta 4)
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
    
    // Avança para a próxima tela levando o novo placar
    router.push({ 
      pathname: '/pergunta6' as any,
      params: { acertos: pontosAtuais } 
    });
  };

  return (
    // Estrutura principal que organiza os elementos na tela
    <View style={styles.container}>
      
      {/* Exibe o número da pergunta atual */}
      <Text style={styles.contador}>Pergunta 5 de 10</Text>
      
      {/* Imagem ilustrativa da pergunta */}
      <Image source={require('../../assets/images/taçadacopa.png')} style={styles.imagem} />

      {/* Enunciado da questão */}
      <Text style={styles.pergunta}>Qual país é o maior vencedor de Copas do Mundo na Europa, possuindo 4 títulos mundiais ao lado da Alemanha?</Text>
      
      {/* Opções de resposta: se for a correta, passa true, se não, passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>A) França</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={() => responder(true)}>
        <Text style={styles.textoBotao}>B) Itália</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>C) Inglaterra</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>D) Espanha</Text>
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
    backgroundColor: '#334155', 
    padding: 12, 
    borderRadius: 20, 
    width: '100%', 
    marginBottom: 10, 
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#1e293b',
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

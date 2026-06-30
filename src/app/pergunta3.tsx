import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// Importa o router para navegar e o useLocalSearchParams para ler os pontos da tela anterior
import { router, useLocalSearchParams } from 'expo-router';

export default function Pergunta3() {
  
  // Pega os pontos que vieram da tela anterior (Pergunta 2)
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
      pathname: '/pergunta4', 
      params: { acertos: pontosAtuais } 
    });
  };

  return (
    // Container principal da tela
    <View style={styles.container}>
      
      {/* Mostra em qual pergunta o aluno está */}
      <Text style={styles.contador}>Pergunta 3 de 10</Text>
      
      {/* Imagem ilustrativa da pergunta */}
      <Image source={require('../../assets/images/copadomundo2010.png')} style={styles.imagem} />

      {/* Enunciado da questão */}
      <Text style={styles.pergunta}>Qual seleção conquistou o título da Copa do Mundo de 2010, na África do Sul?</Text>
      
      {/* Opções de resposta: se for a correta, passa true, se não, passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>A) Holanda</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>B) Alemanha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(true)}>
        <Text style={styles.textoBotao}>C) Espanha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>D) França</Text>
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
    backgroundColor: '#E8F5E9', 
    padding: 15 
  },
  
  // Contador em destaque
  contador: { 
    fontSize: 16, 
    color: '#000000', 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  
  // Tamanho e ajuste da imagem
  imagem: { 
    width: '90%', 
    height: 220, 
    marginBottom: 15, 
    resizeMode: 'contain' 
  },
  
  // Texto da pergunta
  pergunta: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center', 
    color: '#1f2937' 
  },
  
  // Formato dos botões
  botao: { 
    backgroundColor: '#1E3A8A', 
    padding: 12, 
    borderRadius: 20, 
    width: '100%', 
    marginBottom: 10, 
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#122252',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  
  // Estilo do texto dentro dos botões
  textoBotao: { 
    color: '#ffffff', 
    fontSize: 14, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
});

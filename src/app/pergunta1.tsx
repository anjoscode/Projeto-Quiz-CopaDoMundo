import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';

export default function Pergunta1() {
  
  // ATENÇÃO ALUNOS: Lógica de Pontuação e Navegação!
  // A função abaixo recebe 'true' se o aluno apertou o botão certo, ou 'false' se errou.
  const responder = (acertou: boolean) => {
    
    // ======== DESAFIO PARA A TURMA! ========
    // Neste momento, o botão só leva para a próxima tela, mas não salva a pontuação!
    // Como vocês vão fazer para salvar os acertos e enviar para a próxima tela?
    // 
    // DICA MESTRE: Com o expo-router, você pode passar "params" (informações) na navegação!
    // Exemplo de como poderia ser a lógica:
    // let pontosAtuais = 0;
    // if (acertou) { pontosAtuais = 1; }
    // router.push({ pathname: '/pergunta2', params: { acertos: pontosAtuais } });
    // ========================================

    // Lógica funcional: Inicializa os pontos da Pergunta 1 e envia para a Pergunta 2
    let pontosAtuais = 0;
    if (acertou) { 
      pontosAtuais = 1; 
    }
    
    router.push({ 
      pathname: '/pergunta2', 
      params: { acertos: pontosAtuais } 
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.contador}>Pergunta 1 de 10</Text>
      
      {/* Imagem Ilustrativa da Pergunta */}
      <Image source={{ uri: 'https://flaticon.com' }} style={styles.imagem} />

      <Text style={styles.pergunta}>O que significa a sigla HTML?</Text>
      
      {/* Botão A (Correta) - Passa true para a função */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(true)}>
        <Text style={styles.textoBotao}>A) HyperText Markup Language</Text>
      </TouchableOpacity>
      
      {/* Botão B (Incorreta) - Passa false para a função */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>B) HighText Machine Language</Text>
      </TouchableOpacity>

      {/* Botão C (Incorreta) - Passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>C) Hyperlink and Text Management Language</Text>
      </TouchableOpacity>

      {/* Botão D (Incorreta) - Passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>D) Home Tool Markup Language</Text>
      </TouchableOpacity>

      {/* Para as próximas telas de perguntas, vocês vão seguir essa mesma estrutura! */}
    </View>
  );
}

// Estilização da Tela
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fdf2f8', padding: 20 },
  contador: { fontSize: 16, color: '#be185d', fontWeight: 'bold', marginBottom: 20 },
  imagem: { width: 120, height: 120, marginBottom: 20 },
  pergunta: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#1f2937' },
  botao: { 
    backgroundColor: '#ec4899', 
    padding: 18, 
    borderRadius: 12, 
    width: '100%', 
    marginBottom: 15, 
    alignItems: 'center',
  },
  textoBotao: { color: '#ffffff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});